// Required npms & ejs
const express = require("express"); 

const mongoose =require("mongoose"); 

const app = express(); 

//connection setup
const config = require("./config/config.js")
mongoose.connect(config.databaseUrl);