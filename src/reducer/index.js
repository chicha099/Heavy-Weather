import { GET_CITY, REMOVE_CITY, GET_CITY_BY_ID, GET_NEXY_WEATHER, REMOVE_DETAIL, GET_BY_COORD} from "../actions/const"


const initialState = {
    citiesLoaded: [],
    cityDetails: [],
    nextWeather: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_CITY:
            const filter = state.citiesLoaded.filter(city => city.id === action.payload.id)
            if(filter.length !== 0){
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    citiesLoaded: [...state.citiesLoaded, action.payload]
                }
            }
            
        case REMOVE_CITY:
            const remove = state.citiesLoaded.filter(city => city.id != action.payload)
            return {
                ...state,
                citiesLoaded: remove
            }
        case GET_CITY_BY_ID:
            return {
                ...state,
                cityDetails: action.payload
            }
        case REMOVE_DETAIL:
            console.log('reducer')
            return {
                ...state,
                cityDetails: []
            }
        case GET_NEXY_WEATHER:
            return {
                ...state,
                nextWeather: action.payload
            }
        case GET_BY_COORD:
            return {
                ...state,
                cityDetails: action.payload
            }
        default:
            return state
    }
}