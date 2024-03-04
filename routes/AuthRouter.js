import express from 'express';
import { signup, login, logout, forgotPassword } from '../controllers/authControllers.js';
const AuthRouter = express.Router();
AuthRouter.post('/signup', signup);  
AuthRouter.post('/login', login);
AuthRouter.post('/logout', logout);
AuthRouter.post('/forgot-password', forgotPassword);
export default AuthRouter;