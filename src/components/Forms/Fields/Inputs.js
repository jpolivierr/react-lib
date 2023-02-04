import { useEffect, useRef, useState } from "react";
import { emptyField } from "../../../Util/emptyField";

const Inputs= (props) =>{

    const [inputValue, setInputValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const inputElement = useRef();

    useEffect(()=>{
             if(props.required){
                console.log("handle error")
                        const err = emptyField(props.label, inputElement.current.value)
                        setErrorMessage(err)
             }        
    },[props.formStatus])

    

    const handleInput = (e) =>{

            const value = e.target.value

            props.func && setErrorMessage(props.func(value)) 

            setInputValue(value)

            props.stateValue && props.stateValue(value) 

    }

   
    
    

     return(
        <fieldset>
        {props.label && <label>{props.label}</label>}
            <input 
                     ref={inputElement}
                     placeholder={props.placeHolder} 
                     name={props.name}
                     value={inputValue}
                     onChange={e => handleInput(e)}
                     /> 
            {/* {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}          */}
         </fieldset>
     )
}

export default Inputs;