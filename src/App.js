import './App.css';
import FilterForm from './components/Forms/Form';
import { filterAction } from './_state/actions';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from 'react';
import Lists from './components/List/Lists';
import "./styles/forms/Avalon/avalon.css"
import { emptyField } from './components/Forms/Util/emptyField';
import { numValidate } from './components/Forms/Util/numValidate';
import "./styles/utility.css"

// Utility functions


function App() {

  // Action methods
  const {setLocation, setJobs} = bindActionCreators(filterAction, useDispatch())

  const listFunc = (e) =>{
    console.log(e.target)
  }

  function func1(data){
    console.log("func1: " + data)
    return false
 }

 function func2(data){
    console.log("func2: " + data)
    return false
 }

 function func3(data){
    console.log("func3: " + data)
    return false
 }

 const arrFunc = [func1,func2,func3]

  const [myList] = useState({
              info: {
                        title: "Property Type",
                        Class: "listStyle"
              },
              lists: [
                      {
                        el: <p>List 1</p>,
                        handleClick: listFunc,
                        href: [],
                        Class: "listClass"
                      },
                      {
                        el: <p>List 2</p>,
                        handleClick: listFunc,
                        href: [],
                        Class: "listClass"
                      },
                    ] 
  })

  // Form Settings
  const [formSetting] = useState({

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
                   comp : <Lists list={myList}/>
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
                  {
                    type : "input",
                    label : "Location",
                    placeHolder : "Enter city or Zip",
                    name : "location",
                    // onChangefunc : numValidate,
                    fieldToUpdate : setLocation,
                    onSubmitFunc: [emptyField, numValidate],
                    required : true,
                    icon : <i className="fa-solid fa-location-dot"></i>
                  },
                  {
                    type : "input",
                    label : "Job",
                    placeHolder : "Enter city or Zip",
                    name : "job",
                    onSubmitFunc: [emptyField],
                    fieldToUpdate : setLocation,
                  }
               ]
  })

  return (
    <div className="App">
         <FilterForm setting = {formSetting} />
    </div>
  );
}

export default App;
