import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ModalSideWindow from './Windows/modalSideWindow';

const Modal = (props) => {

    const {isShowing,toggle, animated, type} = props

    const modalEl = useRef(null)

   let time = null

    let motion = null

    if(animated){
        time = !animated.time ? -1 : animated.time
        motion = animated.motion ? true : animated.motion === false ? false : null
    }

    

    useEffect(()=>{
        
    },[isShowing])



const handleClick = () =>{

    toggle(time)

}    

const getMotion = (type) =>{


    switch(type){

        case "fade" :
            return motion ? `fadeIn` : motion === false ? `fadeOut` : null
        default :
            return ""

    }
}

const window = () =>{
     switch(type){

        case "side" :
            return <ModalSideWindow 
                         time={time}
                         motion={motion}
                         handleClick={handleClick}
                       />
        default :
            return null

     }
}

const renderModal = () =>{

    return ReactDOM.createPortal(
        <>
          <div ref={modalEl} className={`modal-bk ${getMotion("fade")}`} onClick={handleClick}/>

             {window()}

        </>, document.querySelector(".App")
      )

}

const render = () => {
    
         if(isShowing){
            return renderModal()
        }else{
            return null
        }
   
}

return(
       render()
)

};

export default Modal;