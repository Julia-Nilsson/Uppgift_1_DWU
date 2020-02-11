const express = require("express");
const ToDo = require("../model/todo.js");
const router = express.Router();

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


    router.get("/comment", async (req, res) => {

        const comments = await Comment.find()
        //.sort({author:req.query.sort})
        // { comment : []}
        //comments:comments
         //console.log(req.query.sort)
         res.render("comment", {comments});
        }
        )
        
        router.get("/delete/:id", async (req, res)=>{
            console.log(req.params.id);
            await Comment
            .deleteOne({_id:req.params.id});
            //res.send("It works");
            res.redirect("/comment")
        })

// Visa det som finns på todo-listan
})
router.get("/comment", async (req, res) => {

    const comments = await Comment.find()
     res.render("comment", {comments});
    })

    module.exports = router;