import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const createToken = (_id) => {
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}
 
const router = express.Router();


router.post("/signup", async (req, res) => {
    const {name, lastName, sex, email, password} = req.body;

    try{
        const user = await UserModel.signup(name, lastName, sex, email, password)

        //create token and send
        const token = createToken(user._id)
        
        res.status(200).json({email, name, lastName, sex, token});
    }
    catch (err) {
        return res.status(400).json({message: err.message});
    }
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
       try{
        const user = await UserModel.login(email, password)
        const {name, lastName, sex} = user 

        //create token and send
        const token = createToken(user._id)
        
        res.status(200).json({email, name, lastName, sex, token});
    }
    catch (err) {
        return res.status(400).json({message: err.message});
    }

});

export { router as userRouter };