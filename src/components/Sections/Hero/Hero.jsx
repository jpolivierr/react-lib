import Layout from "../../../lib/Layout/layout"

const Hero = () =>{

    const layoutStyle = {

        parent : {
                    column: "1fr 1fr",
                    // row : "1fr 1fr",
                    background: "silver",
                },
            1 : {
                alignSelf: "center",
                justifySelf: "center",
                textAlign : "center"
            },
            2 : {
              alignSelf: "center",
              justifySelf: "center",
              textAlign : "center"
          }

}

    return(
        <Layout
             elementStyle={layoutStyle}
             Style={{background: "silver", padding : "5rem 0rem"}}
             Class="container"
          >
                <div>
                   <h1>Hello World</h1>
                   <p>
                   The Citi Simplicity® Card, from our partner Citi, offers a full 0% for 21 months on Balance Transfers. That's the longest interest-free period available on the market today, which is the most important factor you'll need to consider.
                   </p>
                   
                </div> 

                <figure>
                    Layout 2
                  </figure>  
          </Layout> 
    )
}

export default Hero