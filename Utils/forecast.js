const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    `https://api.weatherstack.com/current?access_key=${process.env.Key_forecast}&query=` +
    latitude +
    `,` +
    longitude +
    `&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect check network ", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Outside is " +
          response.body.current.weather_descriptions[0] +
          ". The temperature is " +
          response.body.current.temperature +
          " degrees out. Feels like " +
          response.body.current.feelslike +
          " degrees"
      );
    }
  });
};

module.exports = forecast;
