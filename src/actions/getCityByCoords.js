import axios from 'axios'
import {GET_BY_COORD} from './const'


export default function getCityByCoords(lon, lat){
    return async function(dispatch){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
        console.log('action')
        dispatch({
            type: GET_BY_COORD,
            payload: response.data
        })
    }
}
