const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database Connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 6; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground ({
            author: '61c089b334130306ca811494',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            geometry:{
                type: 'Point',
                coordinates: [-113.1331, 47.0202]
            },
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore, accusamus provident quidem minima magnam aut vero eveniet voluptate nulla cum. Soluta sunt officiis illo inventore alias ullam consequatur error!',
            price,
            images: [
                {
                  url: 'https://res.cloudinary.com/dutmy2j89/image/upload/v1640233717/YelpCamp/vi1ake0okuvvlziaycda.jpg',
                  filename: 'YelpCamp/vi1ake0okuvvlziaycda',
                },
              ]
        }) 
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})