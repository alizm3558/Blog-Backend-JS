const express = require('express');

const router = express.Router();
const Post = require("../models/Post");
const Joi = require("@hapi/joi");


// post eden kişiyi kaydedince de userid ye göre postlar getirilecek.


router.post("/create-post", (req, res) => { //post oluşturma

    const post = new Post({
        content: req.body.content,

    });
    post.save();
    res.json(post);
});

router.delete("/:id",(req,res)=>{   // post silme

    Post.findByIdAndDelete(req.params.id)
    .then((post)=>{
        res.json(post);
    })
    .catch((err)=>{
        res.json(err);
    });
});





module.exports = router;