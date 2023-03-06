
const Layout = (props) =>{

    const {children, column, row, elementStyle, Class, Style} = props


    const getChildStyle = (index) =>{

        const style = {
            gridColumn: null,
            gridRow : null,
            alignSelf : null,
            justifySelf : null,
            textAlign : null
        }


        for(const key in elementStyle){

            if(Number(key) === index + 1){

                style.gridColumn = elementStyle[key].column
                style.gridRow = elementStyle[key].row
                style.alignSelf = elementStyle[key].alignSelf
                style.justifySelf = elementStyle[key].justifySelf
                style.textAlign = elementStyle[key].textAlign

            }
        }

        return style
    }

    const getParentStyle = () =>{

        const layoutKey = ["gridTemplateColumns",""]

        const layoutGrid = {
            display: "grid",
            gridTemplateColumns: column,
            gridTemplateRows: row,
            gap : null
            
        }

        for(const key in elementStyle){

            if(key === "parent"){

                layoutGrid.gridTemplateColumns = elementStyle[key].column
                layoutGrid.gridTemplateRows = elementStyle[key].row 
                layoutGrid.gap= elementStyle[key].gap 

            }
        }

        return layoutGrid

    }


    const layoutGrid = {
        display: "grid",
        gridTemplateColumns: column,
        gridTemplateRows: row,
        height: "500px"
    }

   
    return(
        <section className={Class} style={{...getParentStyle(), ...Style}}>
             {
               children.length > 0 &&

                  children.map((element, index) =>(
                    <div 
                             key={index}  
                             className={Class}
                             style={getChildStyle(index)}
                             >
                        {element}
                    </div>
                  ))
                    
            } 

            {
                !children.length && children
            }
        </section>
    )
}

export default Layout