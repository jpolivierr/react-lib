import './App.css';
import FilterForm from './components/Forms/Form';
import { numValidate } from './components/Forms/Util/numValidate';
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
                  type : "options",
                  label : "Property",
                  placeHolder : "Search Type",
                  name : "property",
                  fieldToUpdate : setLocation,
                  icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                  comp : <h1>Index</h1>
                },
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
                    type : "input",
                    label : "Jobs",
                    placeHolder : "Enter city or Zip",
                    name : "location",
                    fieldToUpdate : setLocation,
                  },
                  {
                    type : "options",
                    label : "Search Type",
                    placeHolder : "Search Type",
                    name : "search-type",
                    fieldToUpdate : setLocation,
                    icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                    comp : <h1>Hellothere</h1>
                  },
               ]
  })

  return (
    <div className="App">
         <FilterForm setting = {formSetting} />
    </div>
  );
}

export default App;
