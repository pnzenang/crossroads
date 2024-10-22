import {
  UnauthenticatedError,
  UnauthorizedError,
} from '../5-errors/customErrors.js';
import { verifyJWT } from '../7-utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const { userId, userRole } = verifyJWT(token);
    req.user = { userId, userRole };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid ');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.userRole)) {
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};
