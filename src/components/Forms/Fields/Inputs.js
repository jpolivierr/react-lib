import { useState } from "react";

const Inputs= (props) =>{
    const [inputValue, setInputValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


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
                     placeholder={props.placeHolder} 
                     name={props.name}
                     value={inputValue}
                     onChange={e => handleInput(e)}
                     /> 
            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}         
         </fieldset>
     )
}

export default Inputs;