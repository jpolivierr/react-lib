const UPDATE = "UPDATE"

export const updateJobs = (data) => {

    return async (dispatch) => {
        
        dispatch({
            type : UPDATE,
            payload: data
        })
        
    }

}

