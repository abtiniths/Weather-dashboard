import React from "react";
import Clock from "../../components/clock/Clock";
import Sidebar from "../../components/sidebar/Sidebar";
//import Weather from "../../components/weather/Weather";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Clock />

      <div className="homeContainer">container</div>
    </div>
  );
}

export default Home;
