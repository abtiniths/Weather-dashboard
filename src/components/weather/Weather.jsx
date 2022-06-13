//import React, { useState } from "react";
// import { fetchWeather } from "../../api/fetchWeather";

import "./weather.css";

import { useEffect, useState } from "react";
//import "../App.css";

function Weather() {
  const [weather, setWeather] = useState();
  const [net, setNet] = useState("online");

  useEffect(() => {
    const API_KEY = "0a9a343c905d32db4e4363b66bcc1e52";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${API_KEY}`;
    fetch(URL)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setWeather(data);
          localStorage.setItem("Weather", JSON.stringify(data));
        });
      })
      .catch((err) => {
        setNet("offline");
        let collection = localStorage.getItem("Weather");
        setWeather(JSON.parse(collection));
      });
  }, []);

  return (
    <div className="main-container">
      {weather && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />{" "}
            <p> {weather.weather[0].description}</p>
          </div>
        </div>
      )}
      <div>
        {net === "offline" ? (
          <p>
            {" "}
            You are now in offline mode, for updated weather information, please
            connect to a network.{" "}
          </p>
        ) : null}
      </div>
    </div>
  );
}
/*
export default Weather;
const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  
  return (
    <div className="main">
      <input
        type="text"
        className="search"
        placeholder="Search ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />{" "}
            <p> {weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
*/
export default Weather;
