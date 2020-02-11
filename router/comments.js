const express = require("express");
const ToDo = require("../model/todo.js")
const config = require("../config/config.js")
const router = express.Router();

//För att kunna skriva todo-items i formuläret - /createcomment
router.post("/createcomment", async (req, res)=>
    {

    const toDoItem = new ToDo
        ({
        title:req.body.title,
        text:req.body.text,
        })
    });

router.get("/createcomment", (req, res)=>{
 
res.render("/createcomment");

// Visa det som finns på todo-listan
})
router.get("/comment", async (req, res) => {

    const comments = await Comment.find()
     res.render("comment", {comments});
    })

    module.exports = router;