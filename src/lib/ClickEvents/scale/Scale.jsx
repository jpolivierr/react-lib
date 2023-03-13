import { useState } from "react"

const useScale = () =>{

    const [animation, setAnimation] = useState("")

        const scaleAnimation = () =>{

            setAnimation("buttonClick")
            setTimeout(()=>{
                setAnimation("")
            }, 90)
    }

    return{
        animation,
        scaleAnimation
    }
    
}

export default useScale