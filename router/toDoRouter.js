const express = require("express");
const ToDo = require("../model/todo.js");
const router = express.Router();



// Visa det som finns på todo-listan - /comment

router.get("/comment", async (req, res) => {
    
    const comments = await ToDo.find()
    res.render("comment", {comments});
})

//För att kunna skriva todo-items i formuläret - /createcomment

router.post("/createcomment", async (req, res)=>
    {

    const toDoItem = new ToDo
        ({
        title:req.body.title,
        text:req.body.text,
        })

        await toDoItem.save( (error, success)=>{
            if(error) {
          res.send(error.message) 
            }
          else
          res.redirect("/comment")
            
        } );
    });
// Ta bort todo-item
router.get("/delete/:id", async (req, res)=>{
    
    await ToDo
    .deleteOne({_id:req.params.id});
    res.redirect("/comment")
    })

    //Uppdatera item på todo-listan

    router.get("/update/:id", async (req, res)=>{
    
        // Hitta todo via id
        const editTask= await ToDo.findById({_id:req.params.id})
        res.render("edit", {editTask})
    })
    
    router.post("/update/:id", async(req, res)=>{
    
    //updateOne för att kunna uppdatera en todo-item
       await Comment.updateOne({_id:req.body._id},
        {$set: {text: req.body.title, text: req.body.text}}, {runValidators:true}) 
        res.redirect("/comment")
   
     })

    module.exports = router;
