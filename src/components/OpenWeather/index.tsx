"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "@/APIs/OpenWeatherAPI";

const OpenWeather = () => {
  const [cityName, setCityName] = useState("İzmir");
  const [cityLat, setCityLat] = useState();
  const [cityLon, setCityLon] = useState();
  const [temp,setTemp] = useState("");
  useEffect(() => {
    console.log("selam abi");
    const fetchCityLocation = async () => {
      try {
        const response = await axios.get(
          `${config.findLocation}${cityName}&limit=5&appid=${config.apikey}`
        );
        setCityLat(response.data[0].lat);
        setCityLon(response.data[0].lon);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchCityLocation();
  }, [cityName]);

  useEffect(() => {
    if (cityLat && cityLon) {
      const openWeather = async () => {
        try {
            console.log(cityLat);
            console.log(cityLon);
          const response = await axios.get(
            `${config.openWeather}${cityLat}&lon=${cityLon}&appid=${config.apikey}`
          );
          console.log(response.data);
          let centigrade = (response.data.main.temp - 273).toFixed(0);
          setTemp(centigrade);
        } catch (error) {
          console.log("Error", error);
        }
      };
      openWeather();
    }
  }, [cityLat, cityLon]);
  return (
    <div className="flex justify-end">
      <div>İzmir: {temp}°</div>
    </div>
  );
};

export default OpenWeather;
