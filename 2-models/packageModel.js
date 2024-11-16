import mongoose from 'mongoose';
import {
  DESIRED_SHIPPING_MODE,
  DESTINATION_COUNTRIES,
  NUMBER_OF_ITEMS,
  PACKAGE_STATES,
  PACKAGE_STATUS,
  SENDER_COMMITMENT,
} from '../7-utils/constants.js';

const PackageSchema = new mongoose.Schema(
  {
    packageSerialNumber: String,
    senderFullName: String,
    senderPhoneNumber: String,
    packageStreetAddress: String,
    packageCity: String,
    packageState: {
      type: String,
      enum: Object.values(PACKAGE_STATES),
      default: PACKAGE_STATES.SELECT,
    },

    packageZipCode: String,
    desiredShippingMode: {
      type: String,
      enum: Object.values(DESIRED_SHIPPING_MODE),
      default: DESIRED_SHIPPING_MODE.SELECT,
    },

    senderCommitment: {
      type: String,
      enum: Object.values(SENDER_COMMITMENT),
      default: SENDER_COMMITMENT.PACKAGE_CREATED,
    },
    destinationCountry: {
      type: String,
      enum: Object.values(DESTINATION_COUNTRIES),
      default: DESTINATION_COUNTRIES.SELECT,
    },
    receiverCity: String,

    packageDescription: String,
    // numberOfItems: String,
    numberOfItems: {
      type: String,
      enum: Object.values(NUMBER_OF_ITEMS),
      default: NUMBER_OF_ITEMS.SELECT,
    },
    receiverFullName: String,
    receiverPhoneNumber: String,

    packageStatus: {
      type: String,
      enum: Object.values(PACKAGE_STATUS),
      default: PACKAGE_STATUS.WAITING,
    },
    additionalInformation: String,
    shippingPrice: { type: Number, default: 25 },
    pickupDate: Date,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export default mongoose.model('Package', PackageSchema);
