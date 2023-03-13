import Layout from "../../../lib/Layout/layout"
import Slider from "../../../lib/Slider/Slider"

const Team = () =>{
    return(

            <Slider 
               Class="container"
               gap={8}
             
            >
                 <div style={{background: "red", height: "300px"}}>
                    Card 1
                 </div>
                 <div style={{background: "blue", height: "300px"}}>
                    Card 2
                 </div>
                 <div style={{background: "yellow", height: "300px"}}>
                    Card 3
                 </div>
                 <div style={{background: "green", height: "300px"}}>
                    Card 4
                 </div>
                 <div style={{background: "orange", height: "300px"}}>
                    Card 5
                 </div>
                 <div style={{background: "pink", height: "300px"}}>
                    Card 6
                 </div>
                 <div style={{background: "purple", height: "300px"}}>
                    Card 7
                 </div>
                 <div style={{background: "silver", height: "300px"}}>
                    Card 8
                 </div>
        </Slider> 
   
            
        
    )
}

export default Team