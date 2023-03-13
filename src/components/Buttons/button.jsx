import useScale from "../../lib/ClickEvents/scale/Scale"
import useRipple from "../../lib/ClickEvents/ripple/ripple"

const Buttons = (props) =>{

  const {animation,scaleAnimation} = useScale()
  const {rippleClass, rippleAnimation} = useRipple()

const {target, href,Class,el,clickEvent,type} = props

    return(
           <a href={href && href} target={target && "_blank"}>
                <button 
                  style={{cursor: "pointer",position: "relative"}} 
                  type={type} onClick={(e)=>{scaleAnimation();rippleAnimation(e); clickEvent(e)}} 
                  className={`${Class} ${animation} ${rippleClass}`}>
                    {el}
                </button>
           </a>
    )
}

export default Buttons