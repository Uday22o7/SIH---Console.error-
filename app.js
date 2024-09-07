const express = require("express");
const path = require('path')
const ejsMate = require("ejs-mate")
const mongoose = require("mongoose");
const allSites = require("./model/all_heritageSite")
const Culture = require("./model/culture")
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
        if (state === "India") {
            const heritageSite = await allSites.find({ 'location.country': state }).limit(6);
            res.json(heritageSite);
        } else {
            const heritageSite = await allSites.find({ 'location.state': state }).limit(6);
            res.json(heritageSite);
        }
    
});



// Explore page
app.get("/explore", (req, res) => {
    res.render("./explore.ejs")
});

// Explore/Site
app.get("/explore/site", async (req, res) => {
    const { title } = req.query;
    const result = await allSites.find({
        category: { $in: title }
    });
    return res.render("./explore2.ejs", { result });

});

// Sites Show page
app.get("/explore/site/:id", async (req, res) => {
    const { id } = req.params
    const result = await allSites.find({ _id: id });
    console.log(result)
    res.render("./show.ejs", { result })
});

// Explore/Culture
app.get("/explore/culture", async (req, res) => {
    // const { title } = req.query; for future when we create a culture and tradidtion database for now only culture
    const result = await Culture.find({});
    return res.render("./cultureExplore2.ejs", { result });

});

// Culture Show page
app.get("/explore/culture/:id", async (req, res) => {
    const { id } = req.params
    const result = await Culture.find({ _id: id });
    res.render("./cultureShow.ejs", { result })
});

app.listen(port, (req, res) => {
    console.log("Server is live on port 8000.")
});