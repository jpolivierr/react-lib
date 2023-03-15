import { useState } from "react"
import GoogleMaps from "../../../lib/Map/GoogleMaps"
import "./style.css"


const Map = () =>{

    const [zoom, setZoom] = useState(13)
    const [position, setPosition] = useState({
        lat: 30.3321838,
        lng: -81.655651
    })

    const view = {
        zoom: zoom,
        center : position
    }
    

    return(
        <GoogleMaps view={view}/>
    )

}

export default Map