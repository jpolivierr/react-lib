import { SET_LOCATION, SET_JOBS } from "./TYPES"

export const setLocation = (data) =>{
    return{
        type: SET_LOCATION,
        payload: data
    }
}

export const setJobs = (data) =>{
    return{
        type: SET_JOBS,
        payload: data
    }
}