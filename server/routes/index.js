const express = require("express");
const Bike = require("../models/index.js");

const bikeRouter = express.Router();


bikeRouter.post("/", (req, res) => {
    let newBike = new Bike(req.body);
    newBike.save((err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(201).send({ message: "Item Successfully Posted", data});
    })
});

bikeRouter.get("/", (req, res) => {
    Bike.find(req.query, (err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(200).send({ message: "Items Successfully Retrieved", data});
    })
});

bikeRouter.get("/:id", (req, res) => {
    Bike.findOne({"_id": req.params.id}, (err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(200).send({ message: "Item Successfully Retrieved", data});
    })
});

bikeRouter.put("/:id", (req, res) => {
    Bike.findByIdAndUpdate({"_id": req.params.id}, req.body, {new: true}, (err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(200).send({ message: "Item Successfully Updated", data});
    })
});

bikeRouter.delete("/:id", (req, res) => {
    Bike.findByIdAndRemove({"_id": req.params.id}, (err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(200).send({ message: "Item Successfully Removed", data});
    })
});


module.exports = bikeRouter;