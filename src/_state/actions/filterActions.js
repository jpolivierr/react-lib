import { SET_LOCATION } from "./TYPES"

export const setLocation = (data) =>{
    return{
        type: SET_LOCATION,
        payload: data
    }
}