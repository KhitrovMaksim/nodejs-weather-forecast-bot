const openWeatherMapApiUrlBuilder = (apiKey, latitude, longitude) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

module.exports = openWeatherMapApiUrlBuilder;
