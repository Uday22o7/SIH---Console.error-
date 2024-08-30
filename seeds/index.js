const mongoose = require("mongoose");
const Heritage = require("../model/heritageSite")

mongoose.connect("mongodb://127.0.0.1:27017/SIH")
    .then(() => {
        console.log('mongo Connection is successful');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const seedDB = async () => {
    const heritageSite = new Heritage({
        name: 'Agra Fort',
        location: {
            city: 'Agra',
            state: 'Uttar Pradesh',
            country: 'India'
        },
        overview: "Agra Fort, a UNESCO World Heritage Site, is a majestic red sandstone fort located on the banks of the Yamuna River in Agra, Uttar Pradesh. Built by Emperor Akbar in 1565, this fort served as the main residence of the Mughal emperors until 1638. The fort is a walled city, housing numerous palaces, halls, and mosques, and offers a fascinating glimpse into the Mughal era's grandeur.",
        history: {
            earlyHistory: "Agra Fort, also known as the Red Fort of Agra, was originally a brick fort known as Badalgarh, held by a Rajput ruler. It came under the control of the Delhi Sultanate after the defeat of the Rajputs in the 11th century.The fort was rebuilt by the Mughal Emperor Akbar in 1565 using red sandstone, transforming it into a fortified palace. Akbar’s grandson, Shah Jahan, further enhanced the fort, adding beautiful marble structures such as the Moti Masjid, Diwan-i-Aam, and Diwan-i-Khas.After Aurangzeb's coup, Shah Jahan was imprisoned in Agra Fort, where he spent his last days gazing at the Taj Mahal, the mausoleum of his beloved wife, Mumtaz Mahal.",
            architecturalSignificance: "Agra Fort is a blend of Islamic and Hindu architectural styles, with intricate carvings, inlay work, and exquisite designs. The fort has two main gates, the Delhi Gate and the Amar Singh Gate, with the latter being used as the entrance today.",
            unescoRecognition: ": In 1983, Agra Fort was recognized as a UNESCO World Heritage Site for its historical and architectural significance, standing as a testament to the grandeur of the Mughal Empire"
        },
        visitingHours: {
            openDays: "All days of the week",
            timings: {
                from: 6.00,
                to: 18.00
            }
        },
        ticketInformation: {
            indianCitizens: 40,
            foreignTourists: 550,
            saarcBimstecCitizens: 90,
            children: "Children Below 15 years Free",
        },
        howToReach: {
            nearestAirport: {
                name: "Agra Airport."
            },
            distanceFromTajMahal: 2.5
        }
    })
    await heritageSite.save()
}

seedDB()
    .then(() => {
        mongoose.connection.close()
    })