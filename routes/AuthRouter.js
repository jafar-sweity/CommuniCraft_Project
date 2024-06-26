import express from "express";
import {
  signup,
  login,
  forgotPassword,
} from "../controllers/authControllers.js";
import logger from "../logger.js";
import User from "../models/User.js";
const AuthRouter = express.Router();
AuthRouter.post("/signup", async (req, res) => {
  const userData = req.body;
  console.log(userData);
  const response = await signup(userData);
  if (response.success) {
    res.cookie("token", response.token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).send(response);
    logger.info(response)
  } else {
    res.status(400).send(response);
    logger.error(response)
  }
});


AuthRouter.post('/login', async (req, res) => { 
    const response = await login(req.body);
    if(response.success){
        res.cookie('token', response.token, { httpOnly: true , maxAge: 7 * 24 * 60 * 60 * 1000});
        res.cookie('Role', response.role, { maxAge: 7 * 24 * 60 * 60 * 1000});
        
        res.status(200).send(response);
        logger.info(response)
    }
    else{
        res.status(400).send(response);
        logger.error(response)
    }
});

AuthRouter.post("/logout", async (req, res) => {
  // make user status inactive from the database
  const email = req.body.email;
  const user = await User.findOne({ where: { email } });
  user.status = "inactive";
  await user.save();

  res.clearCookie("token");
  console.log(req.cookies["token"]);
  res.status(201).send("Logged out successfully");
  logger.info("Logged out successfully")
});
AuthRouter.post("/forgot-password", forgotPassword);

export default AuthRouter;
