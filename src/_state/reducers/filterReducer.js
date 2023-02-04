import { SET_LOCATION } from "../actions/TYPES"

const init = {
    location: "",
    jobs: ""
}

const filterReducer = (state = init, action) =>{
    switch(action.type){
        case SET_LOCATION :
            return {...state, location: action.payload}

    }
}

export default filterReducer