import UserModels from "../Models/UserModels";

import { Request, Response } from "express";

import crypto from "crypto";

import bcrypt from "bcrypt";

// Users Registers on the platform:
export const UsersRegistration = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const token = crypto.randomBytes(48).toString("hex");

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const Users = await UserModels.create({
    name,
    email,
    password: hashedPassword,
    token,
    isVerified: false,
  });

  if (Users) {
    return res.status(201).json({
      message: `${name} registered successfully`,
      data: Users,
    });
  } else {
    return res.status(400).json({
      message: "Couldn't create users",
    });
  }
};
