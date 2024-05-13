const api_key = '3f0dee0b7ef8dc1ddf89dc85bd9bb0f5';

export const url = {
  // endpoint urls
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  },

  geocode(loca) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${loca}&limit=5`;
  },

  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=matric`;
  },
};

/**
 *
 * @param {string} url
 * @param {function} callback
 */

export const fetchData = function (url, callback) {
  fetch(`${url}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};
