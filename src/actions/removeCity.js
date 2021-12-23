import { REMOVE_CITY } from './const'

export default function removeCity(id){
    return {
        type: REMOVE_CITY,
        payload: id
    }
}