// Required npms & ejs & router
const express = require("express"); 
const mongoose =require("mongoose"); 
const toDoRouter = require("./router/toDoRouter");
const app = express(); 

//connection setup
const config = require("./config/config.js")

//middleware
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
 
 //router 
app.use(toDoRouter);

//localhost
const port = process.env.PORT || 8005;
const options ={
    useUnifiedTopology: true, 
    useNewUrlParser: true
}

mongoose.connect(config.databaseUrl,options ).then(()=> {
    console.log("Successful")
    //app is listening to port 
    app.listen(port);
})