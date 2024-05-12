import React from "react";
import { getCurrentWeather } from "../../../utils/getCurrentWeather";

const OpenWeather = async () => {
  const temp = await getCurrentWeather();

  return (
    <div>
      <div className='flex flex-row'>
        <img
          src='https://www.creativefabrica.com/wp-content/uploads/2021/03/31/weather-icon-illustration03-Graphics-10205167-1-580x375.jpg'
          alt=''
          style={{
            mixBlendMode: "multiply",
            width: "50px",
            height: "30px",
          }}
        />

        <div className="font-bold text-[#151D48]">İzmir: {(temp.main.temp - 273).toFixed(0)}°</div>
      </div>
    </div>
  );
};

export default OpenWeather;
