import { useState } from "react"
import Layout from "../../../lib/Layout/layout"
import { layoutStyle } from "./heroStyle"

const Hero = () =>{
    

    const [style, setStyle] = useState(layoutStyle)

    return(
        <Layout
             id="MyHero"
             elementStyle={style}
             Class="container gridMobile"
          >
                <div>
                   <h1>Hello World</h1>
                   <p>
                   The Citi Simplicity® Card, from our partner Citi, offers a full 0% for 21 months on Balance Transfers. That's the longest interest-free period available on the market today, which is the most important factor you'll need to consider.
                   </p>
                   
                </div> 

                <figure>
                    <img style={{maxWidth: "600px"}} src="https://www.hometrest.com/static/media/house2.0d83ee330493739c74ac.jpg" />
                </figure>  
          </Layout> 
        
    )
}

export default Hero