import { useEffect, useRef } from "react"


const GoogleMaps = (props) =>{
 
    const {Class} = props
    const mapRef = useRef(null)

    console.log(process.env.REACT_APP_MAPS_API_KEY)

    const initMap = () =>{

        const center = {
            lat: 30.3321838,
            lng:  -81.655651
        }

        const view = {
            zoom: 12,
            center
        }

        const map = new window.google.maps.Map(mapRef.current,view)
    }
    useEffect(()=>{

        if(!document.querySelector("#the-map")){
            window.initMap = initMap

            const script = document.createElement("script")
            script.id="the-map"
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&callback=initMap&v=weekly`
            script.defer = true
            script.async = true
            document.body.appendChild(script)

        }
        

    },[])

    return(
        <>
            <div id="map" className={Class} ref={mapRef}>

            </div>
        </>
    )

}

export default GoogleMaps