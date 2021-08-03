import CitySearch from "./components/CitySearch";
import Extra from "./components/Extra";
import Info from "./components/Info";
import "./App.scss";
import { useEffect, useState } from "react";
import { getWeatherByCity } from "./apis";

function App() {
  const DEFAULT_CITY_SELECTED = localStorage.getItem("getCity")
    ? localStorage.getItem("getCity")
    : "Bắc Ninh";
  const [citySelected, setCitySelected] = useState(DEFAULT_CITY_SELECTED);
  const [weatherInfo, setWeatherInfo] = useState("");

  const getCity = (city) => {
    setCitySelected(city);
    localStorage.setItem("getCity", city);
  };

  // Lấy thông tin thời tiết từ api
  useEffect(() => {
    if (citySelected) {
      getWeatherByCity(citySelected)
        .then(async (res) => {
          const data = await res.data;
          console.log(data);
          setWeatherInfo(data);
        })
        .catch((err) => console.log(err));
    }
  }, [citySelected]);

  return (
    <div className="container">
      <div className="main-section">
        <CitySearch getCity={getCity} />
        <Info weatherInfo={weatherInfo} />
      </div>
      <Extra weatherInfo={weatherInfo} />
    </div>
  );
}

export default App;
