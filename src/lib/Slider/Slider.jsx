import { useLayoutEffect, useEffect, useRef, useState } from "react"
import "./style/index.css"

const Slider = (props) =>{

    const {children} = props

    const[sliderWidth, setSliderWidth] = useState(null)
    const[cardWidth, setCardWidth] = useState(0)
    const[boxCount, setBoxcount] = useState(0)
    const[totalCount, setTotalCount] = useState(0)
    const[totalCard, setTotalCard] = useState(0)
    const[split, setSplit] = useState(4)
    const [count, setCount] = useState(0)

    const sliderElement = useRef(null)
    const cardElement = useRef(null)
    const leftBtn = useRef(null)
    const rightBtn = useRef(null)

    

    useLayoutEffect(()=>{

        const slider = sliderElement.current
        const sliderWidth = slider.clientWidth 
        const totalCard = slider.querySelectorAll(".slider-card").length
        const cardWidth = sliderWidth  / cardSplit(slider.clientWidth)

        setTotalCard(totalCard)

        setTotalCount((cardWidth * totalCard) - slider.clientWidth)

        setSliderWidth(slider.clientWidth)

        setCardWidth(sliderWidth  / cardSplit(slider.clientWidth))

        

        window.addEventListener("resize", ()=>{

            const slider2 = sliderElement.current
            if(slider2){
                const slider2Width = slider2.clientWidth
            const cardWidth2 = slider2Width / cardSplit(slider.clientWidth)
            const totalCount = (cardWidth2 * totalCard) - slider2Width
 
        
            const count = slider2.getAttribute("data-count")
            setSliderWidth(slider2Width)
            setCardWidth(cardWidth2)
            setTotalCount(totalCount)
            cardSplit(slider2Width)
            setBoxcount(cardWidth2 * count)
            }
            

        })

     
    },[])



    const moveLeft = () =>{
        
        if(boxCount <= 0){

            

        }else{
            setBoxcount(boxCount - cardWidth)
            setCount(count - 1)
        }
        
    }

    const moveRight = () =>{
    
         if(totalCount == boxCount || totalCount < boxCount){
         }else{
            setBoxcount( boxCount + cardWidth )
            setCount(count + 1)
         }
         

    }

    const cardSplit = (sliderWidth) =>{

          switch(true){

               case sliderWidth >= 250 && sliderWidth <= 555 :
                    setSplit(2)
                    return 2

                case sliderWidth >= 550 && sliderWidth <= 750 :
                    setSplit(3)
                    return 3

                case sliderWidth >= 750 && sliderWidth <= 1250 :
                    setSplit(4)
                    return 4

                default :
                    setSplit(4)
                    return 4
          }

    }
    const getCardWidth = () =>{
        const cardWidth = sliderWidth / split
        return cardWidth + "px"
    }


    return(
        <section className="slider-container container">
         <div style={{width : "100%"}} ref={sliderElement} className="slider" data-count={count}>
            {
               children.length > 0 &&

                  children.map((element, index) =>(
                    <section 
                             key={index} 
                             ref={cardElement} 
                             style={{
                                      right: boxCount,
                                      minWidth: getCardWidth(),
                                      transition: "right .2s"
                                      }} 
                             className="slider-card"
                             >
                        {element}
                    </section>
                  ))
                    
            }  
             {
                !children.length && children
            }
        </div>
        <span onClick={moveRight} ref={rightBtn} className="slider-btn slider-btn-right">
             <i className="fa-solid fa-chevron-right arrow-icons"></i>
             </span>

             <span onClick={moveLeft} ref={leftBtn} className="slider-btn slider-btn-left">
             <i className="fa-solid fa-chevron-left arrow-icons"></i>
            </span>
        </section>

    )
}

export default Slider