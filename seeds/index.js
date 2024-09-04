const mongoose = require("mongoose");
const Culture = require("../model/culture")

mongoose.connect("mongodb://127.0.0.1:27017/SIH")
    .then(() => {
        console.log('mongo Connection is successful');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const seedDB = async () => {
    const cultureSites = new Culture({
        name: "Diwali",
        overview: "Diwali, also known as Deepavali, is one of the most significant and widely celebrated festivals in India, symbolizing the triumph of light over darkness and good over evil. Spanning five days, Diwali is a time of joyous celebration marked by the lighting of oil lamps (diyas), intricate rangoli designs, and vibrant fireworks. Homes, temples, and public spaces are adorned with thousands of lights and colorful decorations, creating a mesmerizing spectacle. The festival is also known for its emphasis on family gatherings, with people exchanging sweets, gifts, and greetings.The festival's grandeur is reflected in its diverse regional practices, but the essence remains the same: celebrating the divine victory and invoking blessings for prosperity, health, and happiness. Diwali is not only a Hindu festival but is also celebrated by Jains, Sikhs, and Buddhists, each adding their unique traditions and customs to the festivities. It is a time of reflection, renewal, and communal harmony, with various cultural events, fairs, and religious ceremonies enriching the festive spirit.",
        history: {
            origin:"Diwali has its roots in several mythological events. It celebrates the return of Lord Rama to his kingdom of Ayodhya after vanquishing the demon king Ravana, as narrated in the Ramayana. The festival also honors the victory of Lord Krishna over the demon Narakasura and the worship of Goddess Lakshmi, the deity of wealth and prosperity.",
            significance:"The festival is a symbol of the triumph of light over darkness and knowledge over ignorance. It encourages people to dispel the shadows of negativity in their lives and embrace positivity and enlightenment. Diwali's significance extends beyond individual celebrations, fostering a sense of unity and joy among communities and families."
        },
        celebrationType: ["Lighting of Diyas: Diwali is characterized by the lighting of oil lamps and candles that illuminate homes and public spaces, creating a festive and radiant atmosphere.","Fireworks and Festivities: The night sky comes alive with vibrant fireworks, and the air is filled with excitement and joy. Community events and gatherings further enhance the celebratory mood.","Pujas and Offerings: Special prayers and offerings are made to Goddess Lakshmi and Lord Ganesha, with families performing rituals to invite prosperity and remove obstacles."],
        popularPlace: ["Varanasi: Known for its spectacular Diwali celebrations along the ghats of the Ganges River, with a grand display of lights and decorations.","Delhi: Features elaborate light displays, festive markets, and cultural events throughout the city.","Mumbai: Celebrated with large-scale events, vibrant fireworks, and intricate decorations that light up the city."],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1376451.789740888!2d72.8054165724175!3d19.076092745975196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b79e9c000001%3A0x8a4e2b3de82b7f45!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1664858922467!5m2!1sen!2sin"
    })
    await cultureSites.save()
}

seedDB()
    .then(() => {
        mongoose.connection.close()
    })