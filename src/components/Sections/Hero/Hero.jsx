import Layout from "../../../lib/Layout/layout"

const Hero = () =>{

    const layoutStyle = {

        parent : {
                    column: "1fr 1fr",
                    row : "1fr",
                    background: "",
                    padding: "2rem 0rem 6rem"
                },
                1 : {
                    alignSelf: "center",
                    justifySelf: "center",
                    margin : "2rem 0rem 0rem 0rem",
                    background : "Yellow"
                    
                },
                2 : {
                alignSelf: "",
                justifySelf: "flex-end",
                background : "red"
          }

}

    return(
        <Layout
             id="MyHero"
             elementStyle={layoutStyle}
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