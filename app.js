const express = require("express");
const path = require('path')
const ejsMate = require("ejs-mate")
const app = express();
const port = 8000;

// mongoose.connect(dburl)
//     .then(() => {
//         console.log('mongo Connection is successful');
//     })
//     .catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     });

app.set('view engine', 'ejs')
app.engine('ejs', ejsMate)
app.use(express.static(path.join(__dirname, 'public')))
// Home page
app.get("/",(req,res)=>{
    res.render("./home.ejs")
});

// Explore page
app.get("/explore",(req,res)=>{
    res.render("./explore.ejs")
});

// Show page
app.get("/:id",(req,res)=>{
    res.render("./show.ejs")
});

app.listen(port,(req,res)=>{
    console.log("Server is live on port 8000.")
});