const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=aa9ad7795d4dc6b0b8dac49f214e4f61&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

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
