import { StatusCodes } from 'http-status-codes';
import User from '../2-models/UserModel.js';
import Pack from '../2-models/packageModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const getApplicationStats = async (req, res) => {
  const numberOfUsers = await User.countDocuments();
  const numberOfPackages = await Pack.countDocuments();
  const numberOfAirRegular = await Pack.countDocuments();
  const numberOfAirExpress = await Pack.countDocuments();
  const numberOfSeaContainer = await Pack.countDocuments();
  const numberOfFullShipment = await Pack.countDocuments();
  const numberOfPickUpSent = await Pack.countDocuments();
  res.status(StatusCodes.OK).json({
    numberOfUsers,
    numberOfPackages,
    numberOfAirRegular,
    numberOfAirExpress,
    numberOfFullShipment,
    numberOfPickUpSent,
    numberOfSeaContainer,
  });
};
export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.userPassword;
  console.log(obj);
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: 'update user' });
};
export const getAllUsers = async (req, res) => {
  const allUsers = await User.find();
  res.status(StatusCodes.OK).json({ allUsers });
};

export const getAllPackagesAdmin = async (req, res) => {
  const {
    search,
    desiredShippingMode,
    senderCommitment,
    packageStatus,
    destinationCountry,
    packageState,
    sort,
  } = req.query;
  const queryObject = {};

  if (search) {
    queryObject.$or = [{ receiverFullName: { $regex: search, $options: 'i' } }];
  }

  if (desiredShippingMode && desiredShippingMode !== 'all') {
    queryObject.desiredShippingMode = desiredShippingMode;
  }
  if (senderCommitment && senderCommitment !== 'all') {
    queryObject.senderCommitment = senderCommitment;
  }
  if (packageStatus && packageStatus !== 'all') {
    queryObject.packageStatus = packageStatus;
  }
  if (destinationCountry && destinationCountry !== 'all') {
    queryObject.destinationCountry = destinationCountry;
  }
  if (packageState && packageState !== 'all') {
    queryObject.packageState = packageState;
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'package state: a-z': 'packageState',
    'package state: z-a': '-packageState',
    'destination country: a-z': 'destinationCountry',
    'destination country: z-a': '-destinationCountry',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  //setup pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const packages = await Pack.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const numberOfPackages = await Pack.countDocuments(queryObject);

  const numOfPages = Math.ceil(numberOfPackages / limit);
  res
    .status(StatusCodes.OK)
    .json({ packages, numberOfPackages, numOfPages, currentPage: page });
};
