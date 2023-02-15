import Inputs from "./Fields/Inputs";
import Options from "./Options/Options";
import { useSelector } from "react-redux";
import { FormProvider } from "./formContext";
import fieldTypes from "./VARS/fieldType";

//Action
import { filterAction, fetchAction } from "../../_state/actions";
import { jobsAction } from "../../_state/actions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";


const Form = (props) =>{

     const {fields,config, info} = props.setting

     let formOptions = {}

     fields.forEach((form)=>{

          if(form.type === fieldTypes.OPTIONS){
            formOptions[form.name] = false
          }
         
     })

      const [submitStatus, setSubmitStatus] = useState(false)
      const [formError, setFormError] = useState(false)
      const [options, setOptions] = useState(formOptions)

      //Action methods
      const {makeRequest} = bindActionCreators(fetchAction, useDispatch())
      const {updateJobs} = bindActionCreators(jobsAction, useDispatch())

      const handleOptions = (name) =>{

          if(Object.keys(options) !== 0){

               const optionsCopy = {...options}

               for (const options in optionsCopy){

                  
                  if(options === name){
                     optionsCopy[name] = !optionsCopy[name]
                  }else{
                     optionsCopy[options] = false
                  }
                  

               }

               
               setOptions(optionsCopy)

          }

      }


      const submit = (e) =>{
          
                         e.preventDefault()
                        setFormError(false)
                        setSubmitStatus(!submitStatus)   
                  
                        const url = config.url
                        const method = config.method
                        const data = config.data
                        const callBackFunc = updateJobs
                        console.log(formError)
            //  if(!formError){
            //    // makeRequest(method,url,data,callBackFunc)
            //    console.log("success")
            //  }
                 
      }

      const getFields = (field,index) =>{
         
                     switch(field.type){
                        
                        case fieldTypes.INPUT :
                              return (
                                    <Inputs 
                                       key={index}
                                       label={field.label}
                                       placeHolder={field.placeHolder}
                                       name = {field.name}
                                       onChangefunc = {field.onChangefunc}
                                       fieldToUpdate = {field.fieldToUpdate}
                                       formStatus={submitStatus}
                                       required = {field.required}
                                       formError = {formError}
                                       setFormError = {setFormError}
                                       icon = {field.icon}
                                    />
                              )
                        case fieldTypes.OPTIONS :
                           return (
                                 <Options 
                                    key={index}
                                    label={field.label}
                                    placeHolder={field.placeHolder}
                                    name = {field.name}
                                    onChangefunc = {field.onChangefunc}
                                    fieldToUpdate = {field.fieldToUpdate}
                                    formStatus={submitStatus}
                                    required = {field.required}
                                    formError = {formError}
                                    setFormError = {setFormError}
                                    icon = {field.icon}
                                    comp = {field.comp}
                                    handleClick = {handleOptions}
                                    dropdown = {options}
                                 />
                           )

                        default :
                              return null
                     }
                
            
               
               
      }


     return(
      <FormProvider data={{num: 5}}>
         <form className={info.Class} onSubmit={e => submit(e)}>
            {info.title && <h2>{info.title}</h2>}
           
             
             {
            
              fields.map((field, index) => 
              getFields(field, index)

              )
             }

         
            <button type="submit">
                     {config.buttonLabel}
            </button>
        </form>
      </FormProvider>
        
     )
}

export default Form;