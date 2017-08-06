const express = require("express");
const Sport = require("../models/index.js");

const sportRouter = express.Router();


sportRouter.post("/", (req, res) => {
    let newSport = new Sport(req.body);
    newSport.save((err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(201).send({ message: "Item Successfully Posted", data});
    })
});

sportRouter.get("/", (req, res) => {
    Sport.find(req.query, (err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(200).send({ message: "Items Successfully Retrieved", data});
    })
});

sportRouter.get("/:id", (req, res) => {
    Sport.findOne({"_id": req.params.id}, (err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(200).send({ message: "Item Successfully Retrieved", data});
    })
});

sportRouter.put("/:id", (req, res) => {
    Sport.findByIdAndUpdate({"_id": req.params.id}, req.body, {new: true}, (err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(200).send({ message: "Item Successfully Updated", data});
    })
});

sportRouter.delete("/:id", (req, res) => {
    Sport.findByIdAndRemove({"_id": req.params.id}, (err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(200).send({ message: "Item Successfully Removed", data});
    })
});


module.exports = sportRouter;