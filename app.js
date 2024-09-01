const express = require("express");
const path = require('path')
const ejsMate = require("ejs-mate")
const mongoose = require("mongoose");
const topIndia = require("./model/heritageSite")
const allSites = require("./model/all_heritageSite")
const bodyParser = require("body-parser")
const app = express();
const port = 8000;


mongoose.connect("mongodb://127.0.0.1:27017/SIH")
    .then(() => {
        console.log('mongo Connection is successful');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.set('view engine', 'ejs')
app.engine('ejs', ejsMate)
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", async (req, res) => {
    // const heritageSite = await topIndia.find({})
    // console.log(heritageSite)
    res.render("./home.ejs")
});

app.post("/", async (req, res) => {
    const { state } = req.body;

    try {
        if (state === "india") {
            const heritageSite = await topIndia.find({}).limit(4);
            console.log(heritageSite);
            res.json(heritageSite);
        } else {
            const heritageSite = await allSites.find({ 'location.state': state }).limit(4);
            console.log(heritageSite);
            res.json(heritageSite);
        }
    } catch (err) {
        console.error("Error fetching heritage sites:", err);
        res.status(500).send("Server error");
    }
});



// Explore page
app.get("/explore", (req, res) => {
    res.render("./explore.ejs")
});

// Show page
app.get("/:id", (req, res) => {
    res.render("./show.ejs")
});

app.listen(port, (req, res) => {
    console.log("Server is live on port 8000.")
});