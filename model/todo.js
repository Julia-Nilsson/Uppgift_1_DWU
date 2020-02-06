const mongoose = require("mongoose");

//Schema todo-item
const schemaToDo = new mongoose.Schema(
    {
        title: {type:String, required: true},
        text:String,
        date: { type: Date,  default: Date.now }, 
        completion: Boolean,
        priority: {
            type: Number,
            min: 1,
            max: 5
        }
    }
)

const ToDo = mongoose.model("ToDo", schemaToDo);

module.exports = ToDo;