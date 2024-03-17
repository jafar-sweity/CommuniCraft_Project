import express from "express";
import {
  signup,
  login,
  forgotPassword,
} from "../controllers/authControllers.js";
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
  } else {
    res.status(400).send(response);
  }
});

AuthRouter.post("/login", async (req, res) => {
  const response = await login(req.body);
  if (response.success) {
    res.cookie("token", response.token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.cookie("Role", response.role, { maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.status(200).send(response);
  } else {
    res.status(400).send(response);
  }
});

AuthRouter.post("/logout", async (req, res) => {
  res.clearCookie("token");
  console.log(req.cookies["token"]);
  res.status(201).send("Logged out successfully");
});
AuthRouter.post("/forgot-password", forgotPassword);

export default AuthRouter;
