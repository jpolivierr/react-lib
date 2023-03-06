
const Layout = (props) =>{

    const {children, column, row, elementStyle, Class, Style} = props


    const getChildStyle = (index) =>{

        const style = {
            gridColumn: null,
            gridRow : null,
            alignSelf : null,
            justifySelf : null,
            textAlign : null,
            padding : null,
            margin : null,
            background: null
        }


        for(const key in elementStyle){

            if(Number(key) === index + 1){

                style.gridColumn = elementStyle[key].column
                style.gridRow = elementStyle[key].row
                style.alignSelf = elementStyle[key].alignSelf
                style.justifySelf = elementStyle[key].justifySelf
                style.textAlign = elementStyle[key].textAlign
                style.padding = elementStyle[key].padding
                style.margin = elementStyle[key].margin
                style.background = elementStyle[key].background

            }
        }

        return style
    }

    const getParentStyle = () =>{

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
                layoutGrid.textAlign = elementStyle[key].textAlign
                layoutGrid.padding = elementStyle[key].padding
                layoutGrid.margin = elementStyle[key].margin
                layoutGrid.background = elementStyle[key].background

            }
        }

        return layoutGrid

    }

   
    return(
        <section className={Class} style={{...getParentStyle(), ...Style}}>
             {
               children.length > 0 &&

                  children.map((element, index) =>(
                    <div 
                             key={index}  
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