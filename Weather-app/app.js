const axios = require('axios');
const key = '256911a62854d1cbf4497059aaa264d7';
const url =
  'api.openweathermap.org/data/2.5/weather?lat=35{lat}&lon={lon}&appid={API key}';

axios(
  `http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}&units=metric`
)
  .then((response) => {
    console.log(`It is currently ${response?.data?.main?.temp} degrees out.`);
  })
  .catch((error) => console.log('Unable to connect weather services!'));

// axios(
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibW9pbnVsaG9zc2Fpbm1haGltIiwiYSI6ImNrcnU0b2s3ZzM0ZnAyb285d3A1ZWFyaHcifQ.Gs4jCDpFjF93KV_hoHLdfQ&limit=1'
// )
//   .then((response) => {
//     const latitude = response.data.features[0].center[1];
//     const longitude = response.data.features[0].center[0];
//     console.log(latitude, longitude);
//   })
//   .catch((error) => console.log(error));
