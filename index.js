// Required npms & ejs & router
const express = require("express"); 
const mongoose =require("mongoose"); 
const router = require("./router/toDoRouter.js");
const sassMiddleware = require("node-sass-middleware");
const path = require("path");
const app = express(); 


//connection setup
const config = require("./config/config.js")

//middleware
app.use(express.urlencoded({extended:true}))

// sass middleware - fungerar inte för mig så använde vanlig css, men vill gärna veta vad som blev fel!
app.use(sassMiddleware({
    src: path.join(__dirname, "scss"), 
    dest: path.join(__dirname, "public"),
    prefix:  '/prefix'
    })
    )
   
app.use("/public", express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");
 
 //router 
app.use(router);

//localhost
const port = process.env.PORT || 8004;

// Mongoose - åtgärda felmeddelande
const options ={
    useUnifiedTopology: true, 
    useNewUrlParser: true
}

mongoose.connect(config.databaseUrl,options ).then(()=> {
    console.log("Connection fungerar")
    //app is listening to port 
    app.listen(port);
})