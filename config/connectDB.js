require("dotenv").config
const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
    }catch(error){
        console.log("Error");
    }
}
module.exports = connectDB;