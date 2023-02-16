import {useEffect, useRef, useState } from "react";

const Options = (props) =>{

    const state = props.dropdown[props.name]
    const [inputValue, setInputValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [optionState, setOptionState] = useState(state)
    const inputElement = useRef();

    const {required, 
           setFormError, 
           formError, 
           formStatus,
           handleClick
            } = props


    useEffect(()=>{

    },[])


    const handleInput = (e) =>{

            const value = e.target.value

            props.onChangefunc && props.onChangefunc(value)

            setInputValue(value)

            props.fieldToUpdatee && props.fieldToUpdate(value) 

    }

    const handleBlur = () =>{
      
    }

   
    
    const showStyle = state ? "show" : "hide"

     return(
        <fieldset className="options">
        {props.label && <label>{props.label}</label>}
        <div className="input-container" 
                 onClick={()=>{handleClick(props.name)}}>
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
            <div className={`options-window ${showStyle}`  }>
                   {props.comp}
            </div>      
         </fieldset>
     )
}

export default Options;