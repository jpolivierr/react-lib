import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ModalSideWindow from './Windows/modalSideWindow';
import Animation from '../../components/Animation/animation';

const Modal = (props) => {

    const {isShowing,toggle, animated, type, children} = props

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
        case "slide-left" :
            return motion ? `slide-left` : motion === false ? `close-slide-left` : null
        default :
            return ""

    }
}

const window = () =>{
     switch(type){

        case "side" :
            return <ModalSideWindow 
                         time={time}
                         motion={getMotion("slide-left")}
                         handleClick={handleClick}
                       />
        default :
            return null

     }
}

const renderModal = () =>{

    return ReactDOM.createPortal(
        <>
          {/* <div ref={modalEl} className={`modal-bk ${getMotion("fade")}`} onClick={handleClick}/> */}
             {/* {window()} */}
             {children}
             {/* <Animation 
                type = "fade"
                seconds = ".4s"
                from = "0"
                to = "1"
              /> */}
        </>, document.querySelector(".App")
      )

}

// const render = () => {
    
//          if(isShowing){

//             return renderModal()

//         }else{

//             return null

//         }
   
// }

return(
       isShowing ? renderModal() : null
)

};

export default Modal;