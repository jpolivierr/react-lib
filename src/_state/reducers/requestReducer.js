import { SET_LOADING } from "../actions/fetchAction"

const init = {
    status: null,
    isLoading: false,
    errorMessage: "",
    data: {}
}

const requestReducer = (state = init, action) =>{

    switch(action.type){
        case "fetchAccount" :
            return {...state, data: action.payload}
        case SET_LOADING :
            return {...state, isLoading: action.payload}
        default :
            return state

    }

}

export default requestReducer