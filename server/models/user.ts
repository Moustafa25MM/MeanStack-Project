/* eslint-disable no-param-reassign */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
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
  image: {
    type: String,
    required: true,

  },
  books: [
    {
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
      book_status: {
        type: String,
        enum: ['read', 'to_read', 'reading'],
        default: 'to_read',
      },
      rating: {
        type: Number,
        default: 0,
      },
    },
  ],
}, {
  timestamps: true,
  toJSON: {
    transform(doc, ret) {
      delete ret.password;
    },
  },
});

const User = mongoose.model('User', userSchema);

export default User;
