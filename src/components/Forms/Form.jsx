import Inputs from "./Fields/Inputs";
import Options from "./Options/Options";
import { useSelector } from "react-redux";

//Action
import { filterAction, fetchAction } from "../../_state/actions";
import { jobsAction } from "../../_state/actions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";

const Filter = (props) =>{

      const [submitStatus, setSubmitStatus] = useState(false)
      const [formError, setFormError] = useState(false)
      // const requestReducer = useSelector ((state) => state.requestReducer)
      //  console.log(requestReducer)
      // const filterState = useSelector((state) => state.filterReducer)
      // console.log(filterState)
      //Reducers methods
      // const jobsState = useSelector((state) => state.jobsReducer)



      //Action methods
      const {makeRequest} = bindActionCreators(fetchAction, useDispatch())

      const {setLocation, setJobs} = bindActionCreators(filterAction, useDispatch())

      const {updateJobs} = bindActionCreators(jobsAction, useDispatch())

      const {fields,config, info} = props.setting

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
                        
                        case "input" :
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
                        case "options" :
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
                                 />
                           )

                        default :
                              return null
                     }
                
            
               
               
      }


     return(
        <form className={info.Class} onSubmit={e => submit(e)}>
            {info.title && <h2>{info.title}</h2>}
           
             
             {
            
              fields.map((field, index) => 
              getFields(field, index)
               //   <Inputs 
               //          key={index}
               //          label={el.label}
               //          placeHolder={el.placeHolder}
               //          name = {el.name}
               //          onChangefunc = {el.onChangefunc}
               //          fieldToUpdate = {el.fieldToUpdate}
               //          formStatus={submitStatus}
               //          required = {el.required}
               //          formError = {formError}
               //          setFormError = {setFormError}
               //          icon = {el.icon}
               //   />
              )
             }

         
            <button type="submit">
                     {config.buttonLabel}
            </button>
        </form>
     )
}

export default Filter;