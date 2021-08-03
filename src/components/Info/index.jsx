import React from "react";
import "./Info.scss";

export default function Info({ weatherInfo }) {
  const DEFAULT_VALUE = "--";
  const name = weatherInfo ? weatherInfo.name : DEFAULT_VALUE;
  const description = weatherInfo
    ? weatherInfo.weather[0].description
    : DEFAULT_VALUE;
  const icon = weatherInfo ? weatherInfo.weather[0].icon : "10d";
  const temperature = weatherInfo ? Math.round(weatherInfo.main.temp) : DEFAULT_VALUE;
  const feelLike = weatherInfo ? Math.round(weatherInfo.main.feels_like) : DEFAULT_VALUE

  return (
    <div className="info-wrapper">
      <p className="city-name">{name}</p>
      <p className="weather-state">{description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
        className="weather-icon"
      />
      <p className="temperature">{temperature}</p>
      <p className="feel-like">Cảm giác như {feelLike}</p>
    </div>
  );
}
