const express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    bikeRouter = require("./routes/index.js"),
    port = process.env.PORT || 8080,
    app = express(),
    path = require("path");
    settings = require("./config/settings.js");

mongoose.connect(settings.db);

app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/bikes", bikeRouter);
app.use(express.static(path.resolve(__dirname, "..", "user-app", "build")));
app.use(express.static(path.resolve(__dirname, "..", "admin-app", "build")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "user-app", "build", "index.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "admin-app", "build", "index.html"));
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});