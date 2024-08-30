const mongoose = require('mongoose')

const heritageschema = new mongoose.Schema({
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
        children:String, 
    },
    howToReach: {
        nearestAirport: {
            name: String,
            distanceKm: Number
        },
        distanceFromTajMahal: Number
    }
}); 


const Heritage = new mongoose.model("Heritage",heritageschema);

module.exports = Heritage;