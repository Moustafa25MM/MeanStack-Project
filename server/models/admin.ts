// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 100,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 30,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 1024,
    },

  },
  {
    toJSON: {
      transform(doc, ret) {
        // eslint-disable-next-line no-param-reassign
        delete ret.password;
      },
    },
  },
);

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
