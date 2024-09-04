const mongoose = require("mongoose")

const cultureSchema = new mongoose.Schema({
    name: String,
    overview: String,
    imageUrl:[String],
    history: {
        origin: String,
        significance: String
    },
    celebrationType: [String],
    popularPlace: [String],
    map: String
})

const Culture = new mongoose.model("Culture",cultureSchema);
module.exports = Culture;