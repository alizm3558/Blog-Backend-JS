
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    content: { type: String, required: true },
    date: {
        type: Date,
        default: Date.now,
    },

});


module.exports = mongoose.model("Post", PostSchema);