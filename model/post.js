const mongoose = require("mongoose");

//Schema todo-item
const schemaPost = new mongoose.Schema(
    {
        title: String,
        text:String,
        date: { type: Date,  default: Date.now }, 
        completion: Boolean

    }
)

const Post = mongoose.model("Post", schemaPost);

module.exports = Post;