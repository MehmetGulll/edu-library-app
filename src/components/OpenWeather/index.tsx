import React from "react";
import { getCurrentWeather } from "../../../utils/getCurrentWeather";

const OpenWeather = async () => {
  const temp = await getCurrentWeather();

  return (
    <div className='absolute right-4 top-4 text-sm font-bold text-[#151D48]'>
      İzmir: {(temp.main.temp - 273).toFixed(0)}°
    </div>
  );
};

export default OpenWeather;
