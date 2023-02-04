import { SET_LOCATION, SET_JOBS} from "../actions/TYPES"

const init = {
    location: "",
    jobs: ""
}

const filterReducer = (state = init, action) =>{
    switch(action.type){
        case SET_LOCATION :
            return {...state, location: action.payload}
        case SET_JOBS :
            return {...state, jobs: action.payload}
        default :
            return state

    }
}

export default filterReducer