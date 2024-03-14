import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const authenticate = async (
  req,
  res,
  next
) => {
  const token = req.headers['authorization'] || req.cookies['token'] || '';  
  let tokenIsValid;
  try {
    tokenIsValid = jwt.verify(token, process.env.SECRET_KEY || '');
  } catch (error) {
    tokenIsValid = false;
   }

  // If the token is valid, we decode it and find the user in the database
  if (tokenIsValid) {
    const decoded = jwt.decode(token, { json: true });
     const user = await User.findOne({ email: decoded?.email || '' })
    res.locals.user = user;
    next();
  } else {
    res.status(401).send("You are Unauthorized!");

  }
}

const checkRole = (req,res,next) => {
  req.cookies['Role'] === 'admin' ? next() : res.status(401).send("You are Unauthorized!");

  
}



export {
  authenticate
  ,checkRole
}