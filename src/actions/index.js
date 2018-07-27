const API_KEY="ff3c11798550e5809702ae0936a34a84";
export const FETCH_WEATHER='FETCH_WEATHER';
const ROOT_URL=`https://samples.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;


export function fetchWeather(city)
{
    const url =`${ROOT_URL}&q=${city},us`;
    const request =axios.get(url);
    console.log(request)
    return {
        type:FETCH_WEATHER,
        payload:request
        
    }
}