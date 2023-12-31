import express from "express";
import User from "../models/userModel.js";
import expressAsynchandler from 'express-async-handler';
import bcrypt from 'bcryptjs'

import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.post(
    '/signin',
    expressAsynchandler(async (req, res) => {
        const user = await User.findOne({email: req.body.email});
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)){
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({message: 'Invalid email or password'});
    }) 
);


userRouter.post(
    '/signup',
    expressAsynchandler(async (req, res) => {
        
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        });
        console.log(newUser)
        const user = await newUser.save()        
        console.log(user.isAdmin)
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
                });
            }
        )
);

export default userRouter;