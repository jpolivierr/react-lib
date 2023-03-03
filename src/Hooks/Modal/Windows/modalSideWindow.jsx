

const ModalSideWindow = (props) =>{

    const {handleClick, context, time, motion} = props
    const appElement = document.querySelector(".App")

    const style = ` <p>Helo</p>
    `

    const styleEl = document.createElement("style")
    styleEl.innerHTML = style

    appElement.appendChild(styleEl)

    return(
        <>
        <div className={`modal-window ${motion}`}>
            <div style={{cursor : "pointer"}} className="close-btn" onClick={handleClick}><span>+</span>
            </div>
                {context}
        </div>
        </>
        
    
    )
}

export default ModalSideWindow