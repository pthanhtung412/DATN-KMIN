import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    user_name: {
      type: String,
      required: true,
      trim: true
    },
    user_password: {
      type: String,
      required: true,
      minlength: 6
    },
    user_email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: 'Invalid email'
      }
    }
  });

const User = mongoose.model('User', userSchema);

export default User;