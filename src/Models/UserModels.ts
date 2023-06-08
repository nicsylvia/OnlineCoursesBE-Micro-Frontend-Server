import { Schema, model } from "mongoose";

import { UserData } from "../Interfaces/AllInterfaces";

import isEmail from "validator/lib/isEmail";

const UserSchema: Schema<UserData> = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  email: {
    type: String,
    required: [true, "Enter your email address"],
    validate: [isEmail, "Please enter a valid email"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a strong password"],
    alphanum: true,
    minlength: 8,
  },
  token: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const UserModels = model<UserData>("Users", UserSchema);

export default UserModels;
