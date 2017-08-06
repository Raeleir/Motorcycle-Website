const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const sportRouter = require("./routes/index.js");

const port = process.env.PORT || 8080;
const app = express();
mongoose.connect("mongodb://localhost:27017/sports");

app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/sport", sportRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});