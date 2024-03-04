import express from "express";
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
export const router = express.Router();


export const signup = async(req, res) => {    
const { username, password, email, full_name } = req.body;
    
try {
    
    const user = await Admin.create({ username, password, email, full_name });
    

    res.status(201).json(user);

}   
catch (error) {
    res.status(400).json({ error: error.message });
}
};

export const login = (req, res) => {   
    res.send("Login route");

};



export const logout = (req, res) => {
    res.send("Logout route");
};

export const forgotPassword = (req, res) => {
    res.send("Forgot Password route");
    
}
