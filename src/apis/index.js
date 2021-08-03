import axios from "axios";

const API_KEY = "691789337f8f34549488b5dcaeb859e2";

export const getWeatherByCity = (city) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=vi`
  );
