const api_key = '3f0dee0b7ef8dc1ddf89dc85bd9bb0f5';

export const urls = {
  // endpoint urls
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=matric`;
  },

  geocode(loca) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${loca}&limit=5`;
  },
};

/**
 *
 * @param {*} url
 * @param {*} callback
 */
const fetchData = function (url, callback) {
  fetch(`${url}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

fetchData(urls.geocode('london'), function (locations) {
  console.log(locations);
});

// 구조분해 할당
