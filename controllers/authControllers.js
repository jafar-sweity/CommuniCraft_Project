import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import User  from "../models/User.js";
import IsEmail from "isemail";
export const router = express.Router();

const createToken = (id, email) => {
  return jwt.sign({ email }, process.env.SECRET_KEY || '', {
    expiresIn: 7 * 24 * 60 * 60 // 1 week
  });
}
export const signup = async(userData) => {    
 const { name, role, status, email, mobile_number, password, profile_picture_url, bio, salary } = userData;

  try {

    //name is required
    if (!name) {
      return { error: 'Name is required', success: false};
    }
    // Check if the email is valid
    if (!IsEmail.validate(email)) {
      return { error: 'Invalid email', success: false};
    }

    // Check if the password is valid
    if (password.length < 6) {
      return { error: 'Password must be at least 6 characters long', success: false};
    }

    // Check if the user already exists in the database
    const user = await User.findOne({ where: { email } });
    if (user) {
      return { error: 'User email already exists' ,success: false};
    }

    
    // Create a new user in the database
    const newUser = await User.create({
      name,
      role,
      status,
      email,
      mobile_number,
      password,
      profile_picture_url, // Assuming profile_picture_url is a string
      bio,
      salary
    });

    return { message: `User ${newUser.name} created successfully`, success: true, token: createToken(newUser.id, newUser.email)};
  }   
  catch (error) {
    console.log(error);
    return { error: error.message ,success: false};
  }
};




export const login = async (userData) => {
  const { email, password } = userData;
  try {
  

    // Check if the user exists in the database
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return { error: 'User does not exist', success: false};
    }

    // Check if the password is correct
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return { error: 'Invalid password', success: false};
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY || '', {
      expiresIn: 7 * 24 * 60 * 60 // 1 week
    });

   

    return { token, success: true, role: user.role, message: `User ${user.name} logged in successfully`};
  } catch (error) {
    return { error: error.message, success: false};
  }
}

export const forgotPassword = (req, res) => {
    res.send("Forgot Password route");
    
}

