import { StatusCodes } from 'http-status-codes';
import Pack from '../2-models/packageModel.js';
import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid';
const randomMatriculation = customAlphabet('1234567890', 6);

export const getAllPackages = async (req, res) => {
  const {
    search,
    desiredShippingMode,
    senderCommitment,
    packageStatus,
    destinationCountry,
    packageState,
    sort,
  } = req.query;
  const queryObject = {
    createdBy: req.user.userId,
  };

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

export const createPackage = async (req, res) => {
  const shippingMode = req.body.desiredShippingMode;
  const destination = req.body.destinationCountry;
  const origination = req.body.packageState;
  const originTwoLetter = `${origination}`.substring(1, 3);
  const firstLetter = `${shippingMode}`.charAt(0).toLocaleUpperCase();
  const secondLetter = `${shippingMode}`.charAt(4).toLocaleUpperCase();
  const destination3Letter = `${destination}`
    .substring(0, 3)
    .toLocaleUpperCase();
  req.body.createdBy = req.user.userId;
  req.body.packageSerialNumber = `${firstLetter}${secondLetter}${originTwoLetter}${randomMatriculation()}${destination3Letter}`;
  const pack = await Pack.create(req.body);
  res.status(StatusCodes.CREATED).json({ pack });
};

export const getPackage = async (req, res) => {
  const pack = await Pack.findById(req.params.id);
  res.status(StatusCodes.OK).json({ pack });
};

export const updatePackage = async (req, res) => {
  const updatedPackage = await Pack.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res
    .status(StatusCodes.OK)
    .json({ msg: 'package modified', pack: updatedPackage });
};

export const deletePackage = async (req, res) => {
  const removedPackage = await Pack.findByIdAndDelete(req.params.id);
  res
    .status(StatusCodes.OK)
    .json({ msg: 'package deleted', pack: removedPackage });
};
