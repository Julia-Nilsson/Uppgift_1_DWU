// Connection
const express = require("express"); 

const mongoose =require("mongoose"); 

const app = express(); 
 
mongoose.connect("mongodb+srv://Julia:Potatiskung14@cluster0-itxue.mongodb.net/test?retryWrites=true&w=majority");