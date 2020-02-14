const mongoose = require("mongoose");

//Schema todo-item
const schemaToDo = new mongoose.Schema(
    {
        title: {type:String, required: true, }, //Vill egentligen ha ett felmeddelande som dyker upp när titel saknas
        text:String,
        date: { type: Date,  default: Date.now() }, 
        completion: { type: Boolean, default: false }, //För att kunna visa om uppgiften är klar eller inte, kopplad till en completeknapp men visste inte hur jag skulle göra för att få det att fungera
      
    }
)

const ToDo = mongoose.model("ToDo", schemaToDo);

module.exports = ToDo;