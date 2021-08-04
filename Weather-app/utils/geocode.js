const axios = require('axios');

const getGeocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibW9pbnVsaG9zc2Fpbm1haGltIiwiYSI6ImNrcnU0b2s3ZzM0ZnAyb285d3A1ZWFyaHcifQ.Gs4jCDpFjF93KV_hoHLdfQ&limit=1`;
  if (address) {
    axios(url)
      .then(({ data }) => {
        callback(undefined, {
          latitude: data.features[0].center[1],
          longitude: data.features[0].center[0],
          location: data.features[0].place_name,
        });
      })
      .catch((error) => {
        callback('Unable to connect location services!', undefined);
      });
  } else {
    callback('Please provide an address.', undefined);
  }
};

module.exports = getGeocode;
