# Weather App

This is a simple command-line weather application that fetches and displays weather information based on a provided location. It uses the **Geocode API** from [MapTiler](https://www.maptiler.com/) to retrieve latitude and longitude and the **Forecast API** from [Weatherstack](https://weatherstack.com/) to get weather details.

## Features

- Fetch current weather data for any location.
- Uses Geocode API to determine the latitude and longitude of the location.
- Retrieves weather information using the Forecast API.

## Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine.
- **API Keys**:
  - [MapTiler Geocode API Key](https://www.maptiler.com/)
  - [Weatherstack Forecast API Key](https://weatherstack.com/)

## Example

1. Run the application with a location name as the argument:
   ```bash
   node app.js "Location Name"
   
   node app.js "CoxBazar"