const express = require("express");
const router = express.Router();
const Games = require("../models/Games");
const auth = require("../helpers/auth");

router.get("/", auth.verifyToken ,(req, res) => {
    Games.find()
        .then(posts => {
            res.status(200).json({posts});
        })
        .catch(err => {
            res.status(500).json({err, msg:"500"})
        })
});

router.post("/", (req, res) => {

    console.log(req.body)

    Games.create(req.body)
        .then(post => {
            res.status(201).json({post});
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err, msg:"500"})
        })
});

router.get("/:id", (req, res) => {
    Games.findById(req.params.id)
        .then(post => {
            res.status(200).json({post});
        })
        .catch(err => {
            res.status(500).json({err, msg: "500"})
        })
});

router.patch("/:id", (req, res) => {
    Games.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new:true})
        .then(post => {
            res.status(200).json({post});
        })
        .catch(err => {
            res.status(500).json({err, msg:"500"})
        })
});


router.delete("/:id", (req, res) => {
    Games.findByIdAndDelete(req.params.id)
        .then(post => {
            res.status(200).json({post});
        })
        .catch(err => {
            res.status(500).json({err, msg: "500"})
        })
});

module.exports = router;