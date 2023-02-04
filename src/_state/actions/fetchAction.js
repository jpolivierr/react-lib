export const SET_LOADING = "SET_LOADING"


export const makeRequest = (method, url, data, callBackFunc) =>{

         
         return async (dispatch) =>{

            let request
            let status

            const dispatchResult = {
                status : null,
                errorMessage : null,
                dispatchType : null,
                responseData : null,
            }


            //Set loading to true
            dispatch({
                type: SET_LOADING,
                payload: true
            })

            const config = {
                method: method,
            }

            switch(method){

                    case "GET" :
                         request = await fetch(url)
                         status = request.status
                         break
                    case "POST" :
                         if(data){
                            config.body = data
                            request = await fetch(url,config)          
                            status = request.status
                         }         
                         break
                    default :
                        request = await fetch(url) 
                          
             }

             switch(status){

                case 200 :
                        dispatchResult.status = status
                        dispatchResult.dispatchType = 'fetchAccount'
                        dispatchResult.responseData = await request.json()
                        break
                default :
                        return dispatchResult
        
             }


            
         if(callBackFunc){

            await callBackFunc(dispatchResult.responseData)

         }else{

                dispatch({
                        type: dispatchResult.dispatchType,
                        payload: dispatchResult.responseData 
                    })

         }
             

             //Set loading to true
             dispatch({
                type: SET_LOADING,
                payload: false
            })

            
          }

    
}