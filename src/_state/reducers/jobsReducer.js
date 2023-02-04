
const init = {}

const jobsReducer = (state = init, action) =>{
    switch(action.type){
        case "UPDATE" :
            return state = action.payload
        default :
            return state
    }
}

export default jobsReducer