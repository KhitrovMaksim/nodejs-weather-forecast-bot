const openWeatherMapApiResponseParser = (response) => {
  if (Object.prototype.hasOwnProperty.call(response, 'error')) return { error: response.error };

  const { weather, main, name, sys } = response;
  const { description } = weather[0];
  const { country } = sys;
  const { temp } = main;

  return {
    error: null,
    weather: [
      { Country: country },
      { Place: name },
      { Temperature: temp },
      { Description: description },
    ],
  };
};

module.exports = openWeatherMapApiResponseParser;
