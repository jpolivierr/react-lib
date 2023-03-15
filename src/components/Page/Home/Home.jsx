import Layout from "../../../lib/Layout/layout"

import Hero from "../../Sections/Hero/Hero"
import Team from "../../Sections/Team/team"
import Example from "../../Sections/example/Example"
import Map from "../../Sections/Map/Map"

const Home = () =>{
    return(
        <>
            <Hero/>
            <Map/>
            <Example/>
            {/* <Team/> */}
        </>
            
    )
}

export default Home