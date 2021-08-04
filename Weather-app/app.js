const getGeocode = require('./utils/geocode');
const getForecast = require('./utils/forecast');
const location = process.argv[2];

getGeocode(location, (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error);
  }
  getForecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(forecastData);
  });
});
