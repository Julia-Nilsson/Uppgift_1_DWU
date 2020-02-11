const express = require("express");
const ToDo = require("../model/todo.js");
const router = express.Router();

router.route("/comment")


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
                console.log(error);
          res.send(error.message) 
            }
          else
          res.redirect("/comment")
            
        } );
    });
   
// Visa det som finns på todo-listan

router.get("/comment", async (req, res) => {

    const comments = await ToDo.find()
     res.render("comment", {comments});
    })

    // Ta bort todo-item
    router.get("/delete/:id", async (req, res)=>{
       
        await ToDo
        .deleteOne({_id:req.params.id});
        res.redirect("/comment")
    })


    
    router.get("/update/:id", async (req, res)=>{
    
        //vill hämta bara en data från databas
      const response= await CommeToDo.findById({_id:req.params.id})
        res.render("edit", {response})
    })
    
    router.post("/update/:id", async(req, res)=>{
    
    //använd updateOne metoden för att kunna redigera comment
       await Comment.updateOne({_id:req.body._id},
        {$set: {text: req.body.text, author:req.body.author}}, {runValidators:true}) 
        res.redirect("/comment")
   
     //res.send("test ")
    
     })


    module.exports = router;