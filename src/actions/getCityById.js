import axios from "axios"
import { GET_CITY_BY_ID} from "./const"

export default function getCityById(id){
    return async function(dispatch){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
        dispatch({
            type: GET_CITY_BY_ID,
            payload: response.data
        })
    }
}
