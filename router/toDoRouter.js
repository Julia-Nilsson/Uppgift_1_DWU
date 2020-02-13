const express = require("express");
const ToDo = require("../model/todo.js");
const router = express.Router();

// VISA det som finns på todo-listan - /comment

router.get("/comment", async (req, res) => {
    
    const comments = await ToDo.find()
    res.render("comment", {comments});
})

// POSTA NYA TO-DO's formuläret - /addTask

router.post("/addTask", async (req, res)=>
    {

    // Basera ny task på schemat ToDo i todo.js
    const toDoItem = new ToDo
        ({
        title:req.body.title,
        text:req.body.text,
        })

    // Eftersom postfunktionen är asynkron väntar funktionen på toDoItem, sparar den och skickar användaren till /comment
        await toDoItem.save( ()=>{
           
          res.redirect("/comment")
            
          } );
    });

// TA BORT todo-item
router.get("/delete/:id", async (req, res)=>{
    
    await ToDo
    .deleteOne({_id:req.params.id});
    res.redirect("/comment")
    })

    // ÄNDRA item på todo-listan

    router.get("/update/:id", async (req, res)=>{
    
        // Hitta todo via id
        const editTask= await ToDo.findById({_id:req.params.id})
        //Rendera edit-sidan
        res.render("edit", {editTask})
    })
    
    router.post("/update/:id", async(req, res)=>{
    
    //updateOne uppdaterar en specifik todo-item
       await ToDo.updateOne({_id:req.body._id},
        {$set: {title: req.body.title, text: req.body.text}}, {runValidators:true}) 
        res.redirect("/comment")
   
     })

    module.exports = router;
