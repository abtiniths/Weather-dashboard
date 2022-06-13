import React, { useState } from "react";
import getFormattedWeatherData from "./api/openWeather";

import Home from "./pages/home/Home";

function App() {
  const [weather, setWeather] = useState();
  const [net, setNet] = useState("online");
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "stockholm" });
    setWeather(data);
    console.logI(data);
    localStorage.setItem("Weather", JSON.stringify(data));
  };
  fetchWeather();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
