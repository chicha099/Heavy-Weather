import { GET_NEXY_WEATHER } from './const';
import axios from 'axios';

export default function getNextWeather(lat, lon){
    return async function(dispatch){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=4ed91553e8521732e806aee7a1072022&units=metric`)
        dispatch({
            type: GET_NEXY_WEATHER,
            payload: response.data
        })
    }
}