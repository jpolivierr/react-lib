import useScale from "../../lib/ClickEvents/scale/Scale"
import useRipple from "../../lib/ClickEvents/ripple/ripple"
import Loading from "../../lib/loadingEffect/loading/dualRing"

const Buttons = (props) =>{

  const {animation,scaleAnimation} = useScale()
  const {rippleClass, rippleAnimation} = useRipple()

const {target, href,Class,el,clickEvent,type} = props

    return(
           <a href={href && href} target={target && "_blank"}>
                <button 
                  style={{cursor: "pointer",position: "relative", overflow: "hidden"}} 
                  type={type} onClick={(e)=>{scaleAnimation();rippleAnimation(e); clickEvent(e)}} 
                  className={`${Class} ${animation} ${rippleClass}`}>
                    <Loading isShowing={true} />
                    {el}
                </button>
           </a>
    )
}

export default Buttons