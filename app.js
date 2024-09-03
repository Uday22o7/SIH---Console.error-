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
            const heritageSite = await topIndia.find({}).limit(6);
            res.json(heritageSite);
        } else {
            const heritageSite = await allSites.find({ 'location.state': state }).limit(6);
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

app.get("/explore/site", async (req, res) => {
    const { title } = req.query;
    if (title === "unescoRecognition") {
        const heritageSite = await topIndia.find({}).limit(8);
        return res.render("./explore2.ejs", { heritageSite });
    } else {
        const heritageSite = await allSites.find({ category: title });
        return res.render("./explore2.ejs", { heritageSite });
    }
});

// Show page
app.get("/explore/site/:id", async (req, res) => {
    const { id } = req.params
    const heritageSite = await topIndia.find({ _id: id });
    if (!heritageSite.length) {
        const heritageSite = await allSites.find({ _id: id });
        return res.render("./show.ejs", { heritageSite })
    }
    res.render("./show.ejs", { heritageSite })
});

app.listen(port, (req, res) => {
    console.log("Server is live on port 8000.")
});