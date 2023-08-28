import axios from "axios";

const API_KEY = 'JdZrMyQiNT5Zg1vwjiY2H2UCEWw8K7ZnTQdm8rww';
const API_URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;

export const getAsteroids = async () => {
  try {
    const result = await axios.get(API_URL);
    console.log("🚀 ~ file: api.js:8 ~ getAsteroids ~ result:", result)
    
  } catch ( {message} ) {
    // this.$log.error(message)
  }
}