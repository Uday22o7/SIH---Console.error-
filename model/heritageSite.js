const mongoose = require('mongoose')

const top10heritageschema = new mongoose.Schema({
    name: String,
    location: {
        city: String,
        state: String,
        country: String,
        coordinates: {
            latitude: Number,
            longitude: Number
        }
    },
    imageUrl: String,
    overview: String,
    history: {
        earlyHistory: String,
        architecturalSignificance: String,
        unescoRecognition: String
    },
    visitingHours: {
        openDays: [String],
        timings: {
            from: Number,
            to: Number
        }
    },
    ticketInformation: {
        indianCitizens: Number,
        foreignTourists: Number,
        saarcBimstecCitizens: Number,
        childrenBelow15:String, 
    },
    howToReach: {
        nearestAirport: {
            name: String,
            distanceKm: Number
        },
        distanceFrom: Number
    },
    iframe:{
        map:String,
        streetView:String
    }
}); 


const topIndia = new mongoose.model("topIndia",top10heritageschema);

module.exports = topIndia;