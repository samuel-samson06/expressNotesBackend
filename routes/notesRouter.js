const {getAllNotes,getNote,createNote,updateNote,deleteNote} = require("../controllers/notesControllers");
const express = require("express");
const router = express.Router();


router.get("/",getAllNotes)

router.get("/:id",getNote)

router.post("/",createNote)

router.patch("/:id",updateNote)


router.delete("/:id",deleteNote)


module.exports = router;