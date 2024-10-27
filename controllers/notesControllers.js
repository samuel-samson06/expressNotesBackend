const mongoose = require("mongoose");
const noteSchema = require("../models/noteSchema");

const getAllNotes = async (req,res)=>{
    try{
        const allNotes = await noteSchema.find().exec()
        res.json(allNotes)
    }catch(error){
        console.log(error)
    }
}

const getNote = async (req,res)=>{
    const {id} = req.params;
    try{
        const note = await noteSchema.findById(id).exec();
        if(!note){
            res.status(400).json({message:"Note not found"});
        }
        res.json(note);
    }catch(error){
        console.log(error);
    }

}
const createNote = async (req,res)=>{
    const {title,content,favorite} = req.body;
    try{
        if(!title || !content){
            return res.status(400).json({message: "Provide all necessary parameter"});
        }
        const newNote = await noteSchema.create({title,content,favorite});
        res.json(newNote);
    }catch(error){
        console.log(error);
    }
}

const updateNote = async (req,res)=>{
    const {id} = req.params;
    const {title, content,favorite} = req.body;
    try{
        if(!title ||  !content){
            return res.status(400).json({message: "Provide all necessary parameter"});
            }
        const note = await noteSchema.findByIdAndUpdate(id,{title,content,favorite},{new:true}).exec();
        if(!note){
            return res.status(400).json({message:"Note not found"});
        };
        res.json(note);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Error"});    }

}

const deleteNote = async (req,res)=>{
    const {id} = req.params;
    try{
        const note = await noteSchema.findByIdAndDelete(id).exec();

        if(!note){
            return res.status(400).json({message:"Note not found"});
        }

        res.json(note);

    }catch(error){
        console.log(error);
    }
}

module.exports = {getAllNotes,getNote,createNote,updateNote,deleteNote}