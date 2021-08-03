import moment from "moment";
import React from "react";
import "./Extra.scss";

export default function Extra({ weatherInfo }) {
  const DEFAULT_VALUE = "--";
  const sunrise = weatherInfo
    ? moment.unix(weatherInfo.sys.sunrise).format("HH:mm")
    : DEFAULT_VALUE;
  const sunset = weatherInfo
    ? moment.unix(weatherInfo.sys.sunset).format("HH:mm")
    : DEFAULT_VALUE;
  const humidity = weatherInfo ? weatherInfo.main.humidity : DEFAULT_VALUE;
  const windSpeed = weatherInfo
    ? (weatherInfo.wind.speed * 3.6).toFixed(2)
    : DEFAULT_VALUE;

  return (
    <div className="additional-section">
      <div className="row">
        <div className="item">
          <label>MT mọc</label>
          <p>{sunrise}</p>
        </div>

        <div className="item">
          <label>MT mọc</label>
          <p>{sunset}</p>
        </div>
      </div>

      <div className="row">
        <div className="item">
          <label>Độ ẩm</label>
          <p>{humidity} %</p>
        </div>

        <div className="item">
          <label>Gió</label>
          <p>{windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
}
