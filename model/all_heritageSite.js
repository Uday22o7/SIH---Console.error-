const mongoose = require('mongoose')

const allHeritageSchema = new mongoose.Schema({
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
    iframe:String
}); 


const allSites = new mongoose.model("allSites",allHeritageSchema);

module.exports = allSites;