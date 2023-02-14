import './App.css';
import FilterForm from './components/Forms/Form';
import { numValidate } from './Util/numValidate';
import { filterAction } from './_state/actions';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from 'react';
import avalonForm from "./styles/forms/Avalon/avalon.css"
import "./styles/utility.css"

// Utility functions


function App() {

  // Action methods
  const {setLocation, setJobs} = bindActionCreators(filterAction, useDispatch())

  // Form Settings
  const [formSetting, setFormSetting] = useState({

      config : {
                 url: "https://jsonplaceholder.typicode.com/posts",
                 method: "GET",
                 data : null,
                 buttonLabel: "Submit",
      },

      info : {
                title: "Quick Search",
                Class: "avalon text-left"
             },

      fields : [
                  {
                    type : "input",
                    label : "Location",
                    placeHolder : "Enter city or Zip",
                    name : "location",
                    onChangefunc : numValidate,
                    fieldToUpdate : setLocation,
                    required : true,
                    icon : <i className="fa-solid fa-location-dot"></i>
                  },
                  {
                    type : "Jobs",
                    label : "Jobs",
                    placeHolder : "Enter city or Zip",
                    name : "location",
                    fieldToUpdate : setLocation,
                    // required : true
                  },
                  // {
                  //   type : "Number",
                  //   label : "phone",
                  //   placeHolder : "Enter Phone Number",
                  //   name : "phone",
                  //   // required : true
                  // }
               ]
  })

  return (
    <div className="App">
         <FilterForm setting = {formSetting} />
    </div>
  );
}

export default App;
