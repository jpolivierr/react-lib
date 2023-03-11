export const layoutStyle = {

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
                background: "red",
            },
            2 : {
            alignSelf: "",
            background : "purple"
        
      }

}