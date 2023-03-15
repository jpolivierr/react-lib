import Layout from "../../../lib/Layout/layout"

import Hero from "../../Sections/Hero/Hero"
import Team from "../../Sections/Team/team"
import Example from "../../Sections/example/Example"
import Map from "../../Sections/Map/Map"
import Graphs from "../../../lib/Graphs/Graphs"
const Home = () =>{
    return(
        <>

     
           <div style={{display: "flex",gap: "2rem"}}className="container">
                 <Graphs name="colors"/>
                 <Graphs name="map" type="pie"/>
           </div>
           

            <Hero/>
            {/* <Map/> */}
            <Example/>
            {/* <Team/> */}
        </>
            
    )
}

export default Home