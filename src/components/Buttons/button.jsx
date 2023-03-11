
const Buttons = (props) =>{

const {target, href,Class,el,clickEvent,type} = props

    return(
           <a href={href && href} target={target && "_blank"}>
                <button 
                  style={{cursor: "pointer"}} type={type} onClick={(e)=>{clickEvent(e)}} className={Class}>
                    {el}
                </button>
           </a>
    )
}

export default Buttons