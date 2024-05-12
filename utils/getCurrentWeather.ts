import { WeatherResponse } from "@/types/weatherResponse";

const openWeather =
  "https://api.openweathermap.org/data/2.5/weather?lat=38.4224548&lon=27.1310699&appid=" +
  process.env.OPENWEATHER_API_KEY;

export const getCurrentWeather = async () => {
  const response = await fetch(openWeather, {
    cache: "no-cache",
  });
  const data = (await response.json()) as WeatherResponse;
  return data;
};
