import { StatusCodes } from 'http-status-codes';
import User from '../2-models/UserModel.js';
import bcrypt from 'bcryptjs';
import { hashPassword, comparePassword } from '../7-utils/passwordUtils.js';
import { UnauthenticatedError } from '../5-errors/customErrors.js';
import { createJWT } from '../7-utils/tokenUtils.js';

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.userRole = isFirstAccount ? 'admin' : 'user';

  const userHashedPassword = await hashPassword(req.body.userPassword);
  req.body.userPassword = userHashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req, res) => {
  const user = await User.findOne({
    userEmail: req.body.userEmail,
  });
  const isValidUser =
    user && (await comparePassword(req.body.userPassword, user.userPassword));

  if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

  const token = createJWT({ userId: user._id, userRole: user.userRole });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequestError('Please provide valid email');
  }
  // .select("+password")
  const user = await User.findOne({ email });
  if (user) {
    const passwordToken = crypto.randomBytes(70).toString('hex');
    //send email
    const origin = 'https://crossroads-55cr.onrender.com';
    // const origin = 'https://www.mysagi.org';

    https: await sendResetPasswordEmail({
      name: `${user.firstName}  ${user.lastAndMiddleNames}`,
      email: user.email,
      token: passwordToken,
      origin,
    });

    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

    user.passwordToken = hashString(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;

    // user.password = undefined;
    await user.save();
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Please check your email for reset password link' });
};
export const resetPassword = async (req, res) => {
  const { token, email, password } = req.body;
  if (!token || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ email });
  if (user) {
    const currentDate = new Date();

    if (
      user.passwordToken === hashString(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      const hashedPassword = await hashPassword(req.body.password);
      // req.body.password = hashedPassword;
      user.password = hashedPassword;
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;
      await user.save();
    }
  }
  res.send('reset password');
};

export const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};
