const axios = require('axios');

const getForecast = (latitude, longitude, callback) => {
  const forecastURL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=256911a62854d1cbf4497059aaa264d7&units=metric`;
  axios(forecastURL)
    .then(
      ({
        data: {
          main: { temp },
        },
      }) => {
        callback(undefined, `It is currently ${temp} degrees out.`);
      }
    )
    .catch((error) => {
      callback('Unable to connect weather services!', undefined);
    });
};

module.exports = getForecast;
