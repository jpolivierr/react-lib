import Inputs from "./Fields/Inputs";
import { numValidate } from "../../Util/numValidate";
import { useSelector } from "react-redux";

//Action
import { filterAction } from "../../_state/actions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const Filter = (props) =>{

      const filterState = useSelector((state) => state.filterReducer)
      console.log(filterState)

      const {setLocation, setJobs} = bindActionCreators(filterAction, useDispatch())

     return(
        <form className={props.Class}>
            {props.title && <h2>{props.title}</h2>}
             <Inputs 
                     label="Location"
                     placeHolder="Enter city or Zip"
                     name = "location"
                     func = {numValidate}
                     stateValue = {setLocation}
              />
               <Inputs 
                     label="Jobs"
                     placeHolder="Job"
                     name = "job"
                     stateValue = {setJobs}
              />
        </form>
     )
}

export default Filter;