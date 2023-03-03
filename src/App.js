import './App.css';
import FilterForm from './components/Forms/Form';
import { filterAction } from './_state/actions';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from 'react';
import Lists from './components/List/Lists';
import { emptyField } from './components/Forms/Util/emptyField';
import { numValidate } from './components/Forms/Util/numValidate';
import TopNav from './components/Navigation/topNav';
import useModal from './Hooks/Modal/useModal';
import Modal from './Hooks/Modal/modal';
import Buttons from './components/Buttons/button';
import "./styles/index.js"

// Utility functions


function App() {

  // Action methods
  const {setLocation, setJobs} = bindActionCreators(filterAction, useDispatch())

  const filterState = useSelector((state)=> {return state.filterReducer})
  
  const location = filterState.location  
  const theJob = filterState.jobs 
  
  const {isShowing, toggle, } = useModal();

  const listFunc = (name) =>{
   
    return name + " I'm new here"

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
                        Class: "listStyle",
                        listPreventExit: true
              },
              lists: [
                      {
                        name: "list 1",
                        el: <p>List 1</p>,
                        handleClick: [listFunc],
                        href: [],
                        Class: "listClass"
                      },
                      {
                        name: "list 2",
                        el: <p>List 2</p>,
                        handleClick: listFunc,
                        href: [],
                        Class: "listClass"
                      },
                    ] 
  })

  const [myList2] = useState({
    info: {
              title: "Property Type",
              Class: "listStyle",
    },
    lists: [
            {
              name: "list 1",
              el: <p>List 1</p>,
              handleClick: [listFunc],
              href: [],
              Class: "listClass"
            },
            {
              name: "list 2",
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
      state: {
      
      },
      info : {
                title: "Quick Search",
                Class: "avalon text-left"
             },

      fields : [
                {
                  type : "options",
                  label : "Property",
                  placeHolder : "Search Properties",
                  name : "property",
                  fieldToUpdate : setLocation,
                  icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                  list : myList,
                  defaultValue : location,
                  onSubmitFunc: [emptyField],
                },
                {
                  type : "options",
                  label : "Search Type",
                  placeHolder : "Search Type",
                  name : "search-type",
                  fieldToUpdate : setLocation,
                  icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                  list : myList2,
                  onSubmitFunc: [emptyField],
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
                    defaultValue : theJob
                  }
               ]
  })

  return (
    <div className="App">
         <TopNav Class="top-nav"/>
         <FilterForm setting = {formSetting} />
         <Buttons 
            clickEvent={toggle}
            el="click"
         />
         <Modal
            isShowing={isShowing}
             toggle={toggle}
            />
    </div>
  );
}

export default App;
