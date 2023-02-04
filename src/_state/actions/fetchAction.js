export const SET_LOADING = "SET_LOADING"

const handleRequestStatus = (request) =>{
    
    const dispatchResult = {
        status : null,
        errorMessage : null,
        dispatchType : null,
        responseData : null,
    }

    switch(request.status){

        case 200 :
                dispatchResult.status = request.status
                dispatchResult.dispatchType = 'fetchAccount'
                dispatchResult.responseData = request.json()
                break
        default :
                return dispatchResult

     }

     return dispatchResult
}



const getRequest = async (url) =>{

    const request = await fetch("https://jsonplaceholder.typicode.com/posts")
    return handleRequestStatus(request)

}


export const makeRequest = (method, url, data, callBackFunc) =>{

         
         return async (dispatch) =>{

            //Set loading to true
            dispatch({
                type: SET_LOADING,
                payload: true
            })
           
            let result

            switch(method){

                    case "GET" :
                        result = await getRequest(url)
                        break

                    default :
                        result = await getRequest(url)   
         }


            dispatch({
                    type: result.dispatchType,
                    payload: {status: result.responseData }
                })


             //Set loading to true
             dispatch({
                type: SET_LOADING,
                payload: false
            })

            
          }

    
}