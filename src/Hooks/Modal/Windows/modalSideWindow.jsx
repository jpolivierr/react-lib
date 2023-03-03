import Animation from "../../../components/Animation/animation"
import getMotion from "../Util/getMotion"

const ModalSideWindow = (props) =>{

    const {toggle,
           context,
           motionType,
           animated,
           seconds,
           from,
           to
        } = props

        let time = null

        let motion = null
    
        if(animated){
    
            time = !animated.time ? -1 : animated.time
    
            motion = animated.motion ? true : animated.motion === false ? false : null
    
        }

    const handleClick = () =>{

        toggle(time)
    
    } 

    return(
        <>
        
        <div className={`modal-window ${getMotion(motionType, motion)}`}>
            <div style={{cursor : "pointer"}} className="close-btn" onClick={handleClick}><span>+</span>
            </div>
                {context}
        </div>

        <Animation 
           type = {motionType}
           seconds = {seconds}
           from = {from}
           to = {to}
        />
        
        </>
        
    
    )
}

export default ModalSideWindow