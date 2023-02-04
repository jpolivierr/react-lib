
export const makeRequest = () =>{

    return (dispatch) => {

         return async () =>{
            // const res = await fetch("http://localhost:8080/process/account")
            console.log("fetching")
            
            setTimeout(()=>{

            },3000)

            dispatch({
                type: 'fetchAccount',
                payload: {status: "success"}
            })
          }

    }
}