require('dotenv').config()
const request = require("request");

const geocoding = (address, callback) => {
  const url =
    `https://api.maptiler.com/geocoding/` +
    address +
    `.json?key=${process.env.Key_geocode}&limit=2`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to get data check network", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].geometry.coordinates[1],
        longitude: response.body.features[0].geometry.coordinates[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

// operation input will taken from the below and it will return throung call back
// geocoding('Bangladesh Dhaka' , (error , data) => {
//   console.log('error' , error);
//   console.log(data);
// })

module.exports = geocoding;
