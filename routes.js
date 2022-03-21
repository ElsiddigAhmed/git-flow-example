const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        "App Name": "git flow example",
        "version": "1.0.0",
    });
});

router.get("/contributors", (req, res) => {
    res.status(200).json({
        "first": "El-sidig",
        "second": "ammar"
    })
});


module.exports =router ;