import Inputs from "./Fields/Inputs";
import { numValidate } from "../../Util/numValidate";
import { useSelector } from "react-redux";

//Action
import { filterAction, fetchAction } from "../../_state/actions";
import { jobsAction } from "../../_state/actions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";

const Filter = (props) =>{

      const [submitStatus, setSubmitStatus] = useState(false)
      // const requestReducer = useSelector ((state) => state.requestReducer)
      //  console.log(requestReducer)
      // const filterState = useSelector((state) => state.filterReducer)
      // console.log(filterState)
      //Reducers methods
      const jobsState = useSelector((state) => state.jobsReducer)
      console.log(jobsState)

      //Action methods
      const {makeRequest} = bindActionCreators(fetchAction, useDispatch())
      const {setLocation, setJobs} = bindActionCreators(filterAction, useDispatch())
      const {updateJobs} = bindActionCreators(jobsAction, useDispatch())

      const submit = (e) =>{

            e.preventDefault()
            setSubmitStatus(!submitStatus)   
            console.log("submitted")

        
             const url = "https://jsonplaceholder.typicode.com/posts"
             const method = "GET"
             const data = null
             const callBackFunc = updateJobs
            

            makeRequest(method,url,data,callBackFunc)
        
      }

     return(
        <form className={props.Class} onSubmit={e => submit(e)}>
            {props.title && <h2>{props.title}</h2>}

             <Inputs 
                     label="Location"
                     placeHolder="Enter city or Zip"
                     name = "location"
                     func = {numValidate}
                     stateValue = {setLocation}
                     formStatus={submitStatus}
                     required = {true}
              />

               <Inputs 
                     label="Jobs"
                     placeHolder="Job"
                     name = "job"
                     stateValue = {setJobs}
                     formStatus={submitStatus}
                     required = {true}
              />

              <Inputs 
                     label="Number"
                     placeHolder="Phone"
                     name = "number"
                     stateValue = {setJobs}
              />

         
            <button type="submit">
                     {props.buttonLabel}
            </button>
        </form>
     )
}

export default Filter;