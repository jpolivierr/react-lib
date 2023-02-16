import Inputs from "./Fields/Inputs";
import Options from "./Options/Options";
import fieldTypes from "./VARS/fieldType";

//Action
import { useState } from "react";


const Form = (props) =>{

     const {fields,config, info} = props.setting


     const setFormOptions = () =>{
               let formOptions = {}

            fields.forEach((form)=>{

                  if(form.type === fieldTypes.OPTIONS){
                     formOptions[form.name] = false
                  }
                  
            })

            return formOptions
     }

     const myFormFieds = () => {
            let formFields = {}

            fields.forEach((field)=>{
            
               if(field.name){
                  formFields[field.name] = ""
               }
         })
         return formFields
     }

     const fieldsErrors = () =>{
               let fieldsErrors = {}

               fields.forEach((field)=>{

                  if(field.name){
                     fieldsErrors[field.name] = false
                  }
                  
            })
            return fieldsErrors
     }
      
      const [submitStatus, setSubmitStatus] = useState(false)
      const [formError, setFormError] = useState(fieldsErrors)
      const [options, setOptions] = useState(setFormOptions)
      const [formFields, setFormFields] = useState(myFormFieds)

      const updateError = (key, value) =>{
         if((key in formError)){
               console.log(formError)
               const formErrorCopy = {...formError}
               formErrorCopy[key] = value
               console.log(formErrorCopy)
               setFormError(formErrorCopy)
         }
      }

      const updateFormField = (key, value) =>{

         if((key in formFields)){
               const formFieldCopy = {...formFields}
               formFieldCopy[key] = value
               setFormFields(formFieldCopy)
         }
      }

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

      const validateFields = (formFields) =>{
         
         const formErrorCopy = {...formError}

         fields.forEach((field)=>{

                const fieldData = formFields[field.name]
               
                 if(field.onSubmitFunc && field.name){
                      
                     const func = field.onSubmitFunc
                     
                     for(let i = 0; i < func.length; i++){
                       
                        const call = func[i]
                       
                        const funcResult = call(field.name, fieldData)

                        if(funcResult){
                           // console.log(funcResult)
                           // updateError(field.name, funcResult)
                           formErrorCopy[field.name] = funcResult
                           break
                        }else{
                           formErrorCopy[field.name] = false

                        }

                     }
                 }

         })

         setFormError(formErrorCopy)

      }

      const submit = (e) =>{

                          e.preventDefault()
                          validateFields(formFields)
              
                        // setSubmitStatus(!submitStatus)   
                  
                        // const url = config.url
                        // const method = config.method
                        // const data = config.data
                        // const callBackFunc = updateJobs
                        // console.log(formError)
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
                                       updateFormField = {updateFormField}
                                       updateError = {updateError}
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
                                    updateFormField = {updateFormField}
                                    updateError = {updateError}
                                 />
                           )

                        default :
                              return null
                     }
                
            
               
               
      }


     return(
      // <FormProvider data={{num: 5}}>
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
      // </FormProvider>
        
     )
}

export default Form;