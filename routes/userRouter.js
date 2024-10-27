const {register,login} = require("../controllers/usersController")
const express = require("express");
const userRouter = express.Router();

userRouter.post("/register",register)

userRouter.post("/login",login)

module.exports = userRouter;