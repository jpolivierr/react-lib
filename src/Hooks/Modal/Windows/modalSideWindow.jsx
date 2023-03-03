

const ModalSideWindow = (props) =>{

    const {handleClick, context} = props

    return(
        <div className='modal-window'>
            <div style={{cursor : "pointer"}} className="close-btn" onClick={handleClick}><span>+</span>
            </div>
                {context}
        </div>
    
    )
}

export default ModalSideWindow