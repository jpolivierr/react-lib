import { useEffect, useRef, useState } from "react";
import { emptyField } from "../../../Util/emptyField";

const Inputs= (props) =>{

    const [inputValue, setInputValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const inputElement = useRef();

    const {required, setFormError, formError, formStatus} = props

    useEffect(()=>{
            
    },[formStatus])
   
    // useEffect(()=>{
    //          if(props.required){

    //             const err = emptyField(props.label, inputElement.current.value)

                
    //             if( err !== null){
    //                  console.log(err)
    //                 setErrorMessage(err)
    //                 setFormError(true)
    //             }
                
    //          }        
    // },[props.formStatus])


    

    const handleInput = (e) =>{

            const value = e.target.value

            props.onChangefunc && setErrorMessage(props.onChangefunc(value)) 

            setInputValue(value)

            props.fieldToUpdatee && props.fieldToUpdate(value) 

    }

    const handleBlur = () =>{
      
    }

   
    
    

     return(
        <fieldset>
        {props.label && <label>{props.label}</label>}
        <div className="input-container">
             <input 
                     ref={inputElement}
                     placeholder={props.placeHolder} 
                     name={props.name}
                     value={inputValue}
                     onChange={e => handleInput(e)}
                     onBlur={()=>{handleBlur()}}
                     style={props.icon && {paddingLeft: "2.3rem"}}
                     />
                     {props.icon && props.icon}
        </div>
            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}         
         </fieldset>
     )
}

export default Inputs;