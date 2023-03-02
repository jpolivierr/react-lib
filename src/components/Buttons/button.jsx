
const Buttons = (props) =>{

const {href,Class,el,clickEvent,type} = props

    return(
           <a>
                <button 
                  style={{cursor: "pointer"}} type={type} onClick={(e)=>{clickEvent(e)}} className={Class}>
                    {el}
                </button>
           </a>
    )
}

export default Buttons