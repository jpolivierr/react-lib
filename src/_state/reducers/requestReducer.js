
const init = {
    status: null,
    errorMessage: "",
    data: {}
}

const requestReducer = (state = init, action) =>{

    switch(action.type){
        case "fetchAccount" :
            return {...state, data: action.payload}
        default :
            return state

    }

}

export default requestReducer