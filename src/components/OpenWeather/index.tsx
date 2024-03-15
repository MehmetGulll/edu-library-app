import React from 'react';
import { getCurrentWeather } from '../../../utils/getCurrentWeather';

const OpenWeather = async () => {
  const temp = await getCurrentWeather();

  return (
    <div >
      <div>İzmir: {(temp.main.temp - 273).toFixed(0)}°</div>
    </div>
  );
};

export default OpenWeather;
