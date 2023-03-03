export const List = (props) =>{

    const {
            Class, 
            handleClick,
            href,
            target,
            element
            
        } = props

        const blank = () =>{
            console.log("blank..")
            return
        }

        const renderList = () =>{
            if(href){
                return(
                    <a href={href} target={target && "_blank"}>
                        <li style={{cursor: "pointer"}} onClick={!href ? handleClick : blank} className={Class}>
                            {element}
                        </li>
                    </a>
                )
            }else{
                return(
                    <li style={{cursor: "pointer"}} onClick={!href ? handleClick : blank} className={Class}>
                            {element}
                        </li>
                )
            }
        }

    return(
             renderList()
    )
}

export const Ulist = (props) =>{

    const {
           children,
           Class,
            title
        
        } = props

    return(
        <ul className={Class}>
            {title && <h3>{title}</h3>}
            {children}
        </ul>
    )
}