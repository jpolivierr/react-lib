import { useState } from "react"
import Layout from "../../../lib/Layout/layout"
import Buttons from "../../Buttons/button"


const Hero = () =>{

    const layoutStyle = {

        parent : {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows : "1fr",
                    padding: "2rem 0rem 6rem",
                    mobile : {
                               max_1300 :
                               {
                                   gridTemplateColumns: "1fr",
                                   alignItems: "center",
                                   justifyItems: "flex-start",    
                                   rowGap : "3rem"
                               }
                            }                
                            
                },
                1 : {
                    alignSelf: "center",
                    justifySelf: "center",
                },
                2 : {
                alignSelf: "",
                background : "purple"
            
          }
    
    }
    

    const [style, setStyle] = useState(layoutStyle)

    return(
        <Layout
             id="MyHero"
             elementStyle={style}
             Class="container gridMobile"
          >
                <div>
                   <h1 style={{fontWeight: ""}}>Find your dream home</h1>
                   <p>
                   Our comprehensive platform allows you to search for properties 
                   in your desired location, using filters such as price, 
                   number of bedrooms, and square footage to find the perfect fit.
                   You can also see recently sold homes and get a sense of the
                    market trends in your area.
                   </p>
                   <Buttons 
                     Class ="main-btn"
                     el="FIND MY HOME"
                     href="/home"
                     target={true}
                   />
                   
                </div> 

                <figure>
                    <img style={{width: "100%"}} src="https://www.hometrest.com/static/media/house2.0d83ee330493739c74ac.jpg" />
                </figure>  
          </Layout> 
        
    )
}

export default Hero