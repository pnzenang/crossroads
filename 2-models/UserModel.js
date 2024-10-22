import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    userFirstName: String,
    userMiddleAndLastName: String,
    userEmail: { type: String, lowercase: true },
    userPhoneNumber: String,
    userStreetAddress: String,
    userCity: String,
    userState: String,
    userZipCode: String,
    userPassword: String,
    userRole: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true }
);
UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.userPassword;
  return obj;
};
export default mongoose.model('User', UserSchema);
