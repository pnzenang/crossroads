import { body, param, validationResult } from 'express-validator';
import {
  BadRequestError,
  NotFountError,
  UnauthorizedError,
} from '../5-errors/customErrors.js';
import {
  PACKAGE_STATES,
  DESTINATION_COUNTRIES,
  PACKAGE_STATUS,
  SENDER_COMMITMENT,
  DESIRED_SHIPPING_MODE,
  NUMBER_OF_ITEMS,
} from '../7-utils/constants.js';
import mongoose from 'mongoose';
import Pack from '../2-models/packageModel.js';
import User from '../2-models/UserModel.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith('no package')) {
          throw new NotFountError(errorMessages);
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route');
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};
export const validatePackageInput = withValidationErrors([
  // body('senderFullName').notEmpty().withMessage('Sender Name is required'),
  // body('senderPhoneNumber')
  //   .notEmpty()
  //   .withMessage('Sender Phone Number is required'),
  body('packageStreetAddress')
    .notEmpty()
    .withMessage('Package Street Address is required'),
  body('packageCity').notEmpty().withMessage('Package city is required'),
  body('packageZipCode')
    .notEmpty()
    .withMessage('Package zip code is required')
    .isLength({ min: 5 }),
  body('packageDescription')
    .notEmpty()
    .withMessage('Package description is required'),
  // body('numberOfItems').notEmpty().withMessage('number of items is required'),
  body('receiverCity').notEmpty().withMessage('Receiver city is required'),
  body('receiverFullName').notEmpty().withMessage('Receiver name is required'),
  body('receiverPhoneNumber')
    .notEmpty()
    .withMessage('Receiver phone number is required'),
  body('packageState')
    .isIn(
      Object.values([
        PACKAGE_STATES.DELAWARE,
        PACKAGE_STATES.DISTRICT_OF_COLUMBIA,
        PACKAGE_STATES.ILLINOIS,
        PACKAGE_STATES.INDIANA,
        PACKAGE_STATES.IOWA,
        PACKAGE_STATES.KENTUCKY,
        PACKAGE_STATES.MARYLAND,
        PACKAGE_STATES.MICHIGAN,
        PACKAGE_STATES.MINNESOTA,
        PACKAGE_STATES.MISSOURI,
        PACKAGE_STATES.NEBRASKA,
        PACKAGE_STATES.NEW_JERSEY,
        PACKAGE_STATES.OHIO,
        PACKAGE_STATES.PENNSYLVANIA,
        PACKAGE_STATES.VIRGINIA,
        PACKAGE_STATES.WEST_VIRGINIA,
        PACKAGE_STATES.WISCONSIN,
      ])
    )
    .withMessage('Please select the state where the package is located'),
  // body('senderCommitment')
  //   .isIn(Object.values(SENDER_COMMITMENT))
  //   .withMessage('Invalid sender commitment'),
  body('destinationCountry')
    .isIn(
      Object.values([
        DESTINATION_COUNTRIES.CAMEROON,
        DESTINATION_COUNTRIES.CENTRAL_AFRICA,
        DESTINATION_COUNTRIES.CONGO,
        DESTINATION_COUNTRIES.EQUATORIAL_GUINEA,
        DESTINATION_COUNTRIES.GABON,
        DESTINATION_COUNTRIES.TCHAD,
        DESTINATION_COUNTRIES.SIERRA_LEONE,
        DESTINATION_COUNTRIES.IVORY_COST,
        DESTINATION_COUNTRIES.GHANA,
        DESTINATION_COUNTRIES.NIGERIA,
        DESTINATION_COUNTRIES.TOGO,
        DESTINATION_COUNTRIES.BENIN,
        DESTINATION_COUNTRIES.LIBERIA,
      ])
    )
    .withMessage('Select destination country'),
  // body('packageStatus')
  //   .isIn(Object.values(PACKAGE_STATUS))
  //   .withMessage('Invalid package status'),
  body('desiredShippingMode')
    .isIn(
      Object.values([
        DESIRED_SHIPPING_MODE.EXPRESS,
        DESIRED_SHIPPING_MODE.REGULAR,
        DESIRED_SHIPPING_MODE.MARITIME,
      ])
    )
    .withMessage('Please select a shipping mode'),
  body('numberOfItems')
    .isIn(
      Object.values([
        NUMBER_OF_ITEMS.ONE,
        NUMBER_OF_ITEMS.TWO,
        NUMBER_OF_ITEMS.THREE,
        NUMBER_OF_ITEMS.FOUR,
        NUMBER_OF_ITEMS.FIVE,
        NUMBER_OF_ITEMS.SIX,
        NUMBER_OF_ITEMS.SEVEN,
        NUMBER_OF_ITEMS.EIGHT,
        NUMBER_OF_ITEMS.NINE,
        NUMBER_OF_ITEMS.TEN,
      ])
    )
    .withMessage('Please select the number of items'),
]);

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id');
    const pack = await Pack.findById(value);
    if (!pack) throw new NotFountError(`no package with id:${value}`);

    const isAdmin = req.user.userRole === 'admin';
    const isOwner = req.user.userId === pack.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError('not authorized to access this route');
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body('userMiddleAndLastName').notEmpty().withMessage('last name is required'),
  body('userEmail')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (userEmail) => {
      const user = await User.findOne({ userEmail });
      if (user) {
        throw new BadRequestError(
          'email already exists, please use a different email.'
        );
      }
    }),
  body('userPhoneNumber').notEmpty().withMessage('phone number is required'),
  body('userStreetAddress')
    .notEmpty()
    .withMessage('street address is required'),
  body('userCity').notEmpty().withMessage('city is required'),
  body('userState').notEmpty().withMessage('state is required'),
  body('userZipCode')
    .notEmpty()
    .withMessage('zip code is required')
    .isLength({ min: 5 })
    .withMessage('zip code must be at least 5 characters long'),
  body('userPassword')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
]);

export const validateLoginInput = withValidationErrors([
  body('userEmail')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),

  body('userPassword').notEmpty().withMessage('password is required'),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('userMiddleAndLastName').notEmpty().withMessage('last name is required'),
  body('userEmail')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (userEmail, { req }) => {
      const user = await User.findOne({ userEmail });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('userPhoneNumber').notEmpty().withMessage('phone number is required'),
  body('userStreetAddress')
    .notEmpty()
    .withMessage('street address is required'),
  body('userCity').notEmpty().withMessage('city is required'),
  body('userState').notEmpty().withMessage('state is required'),
  body('userZipCode')
    .notEmpty()
    .withMessage('zip code is required')
    .isLength({ min: 5 })
    .withMessage('zip code must be at least 5 characters long'),
]);
