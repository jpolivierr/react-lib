import Inputs from "./Fields/Inputs";
import { numValidate } from "../../Util/numValidate";

const Filter = () =>{

     return(
        <form>
            <h2>Filter form</h2>
             <Inputs 
                     label="Location"
                     placeHolder="Enter city or Zip"
                     name = "location"
                     func = {numValidate}
              />
               <Inputs 
                     label="Jobs"
                     placeHolder="Job"
                     name = "job"
              />
        </form>
     )
}

export default Filter;