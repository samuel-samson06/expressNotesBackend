const mongoose = require("mongoose");
const {Schema} = mongoose;

const noteSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    favorite:{type:Boolean}
},{
    timestamps:true
});

module.exports = mongoose.model("note",noteSchema)