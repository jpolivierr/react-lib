import { useEffect, useRef, useState } from "react";
import { emptyField } from "../../../Util/emptyField";

const Options = (props) =>{

    const [inputValue, setInputValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const inputElement = useRef();

    const {required, setFormError, formError, formStatus} = props

    const handleInput = (e) =>{

            const value = e.target.value

            props.onChangefunc && setErrorMessage(props.onChangefunc(value)) 

            setInputValue(value)

            props.fieldToUpdatee && props.fieldToUpdate(value) 

    }

    const handleBlur = () =>{
      
    }

   
    
    

     return(
        <fieldset className="options">
        {props.label && <label>{props.label}</label>}
        <div className="input-container">
             <input 
                     ref={inputElement}
                     placeholder={props.placeHolder} 
                     name={props.name}
                     value={inputValue}
                     onChange={e => handleInput(e)}
                     onBlur={()=>{handleBlur()}}
                     style={props.icon && {paddingRight: "2.3rem"}}
                     readOnly={true}
                     />
                     {props.icon && props.icon}
        </div>
            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}   

            <div className="options-window">
                   {props.comp}
            </div>      
         </fieldset>
     )
}

export default Options;