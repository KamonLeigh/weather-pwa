import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

async function fetchWeather(query) {

    try {
        const { data } = await axios.get(URL, {
            params: {
                q:query,
                unit: 'metric',
                APPID: API_KEY
            }
        });
        
    
        return data;
    } catch {
        return false;
    }
   
}

export { fetchWeather };
