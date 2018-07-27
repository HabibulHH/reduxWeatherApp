const API_KEY="ff3c11798550e5809702ae0936a34a84";
export const FETCH_WEATHER='FETCH_WEATHER';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
import axios from 'axios';


export function fetchWeather(city)
{
    const url =`${ROOT_URL}&q=${city},us`;
    const request =axios.get(url);
    console.log(request,'request with promise ')
    return {
        type:FETCH_WEATHER,
        payload:request
        
    }
}