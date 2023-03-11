export const layoutStyle = {

    parent : {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows : "1fr",
                padding: "2rem 0rem 6rem",
                mobile : {
                           max_1300 :
                           {
                               gridTemplateColumns: "1fr 1fr"        
                           }
                }
                                
                             
                        
            },
            1 : {
                alignSelf: "center",
                justifySelf: "center",
                margin : "2rem 0rem 0rem 0rem",
                background: "red",
            },
            2 : {
            alignSelf: "",
            justifySelf: "flex-end",
            background : "purple"
        
      }

}