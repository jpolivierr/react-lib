import Inputs from "./Fields/Inputs";
import { numValidate } from "../../Util/numValidate";
import { useSelector } from "react-redux";

//Action
import { filterAction } from "../../_state/actions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";

const Filter = (props) =>{

      const [submitStatus, setSubmitStatus] = useState(false)
      const requestReducer = useSelector ((state) => state.requestReducer)
      console.log(requestReducer)
      // const filterState = useSelector((state) => state.filterReducer)
      // console.log(filterState)

      const {setLocation, setJobs} = bindActionCreators(filterAction, useDispatch())

      const submit = (e) =>{

            e.preventDefault()
            setSubmitStatus(!submitStatus)   
            console.log("submitted")
        
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