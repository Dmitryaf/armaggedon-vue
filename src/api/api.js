import axios from "axios";

import { convertApiData, covertDateFormat } from "@/utils/utils";

const API_KEY = 'JdZrMyQiNT5Zg1vwjiY2H2UCEWw8K7ZnTQdm8rww';

export const getAsteroids = async (startDate, endDate) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  startDate = startDate ? startDate : covertDateFormat(currentDate, '-');
  endDate = endDate ? endDate : covertDateFormat(currentDate.setDate(currentDay + 7), '-');
  try {
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
    const asteroidsInfo = await axios.get(apiUrl);
    return convertApiData(asteroidsInfo?.data?.near_earth_objects);
    
  } catch ( { message } ) {
      console.error(message);
  }
}