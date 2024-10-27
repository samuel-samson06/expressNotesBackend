require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const connectDB = require("./config/connectDB");
const corsOptions = require("./config/corsOption");
const router = require("./routes/notesRouter"); 
const e = require("express");
const port = process.env.PORT || 5000;


connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(morgan("combined"));
app.get("/",(req,res)=>{
    res.status(200).send("Official Page");
})

app.use("/api/notes",router);
app.use((req,res,next)=>{
    res.status(400);
    res.json({message:"This Route does not exist"})
    next()
})


mongoose.connection.once("open",()=>{
    console.log("Connected to MongoDB");
    app.listen(port,()=>{
        console.log(`Running on PORT ${port}`);
    })
});

mongoose.connection.on("error",()=>{
    console.log("Error");
});