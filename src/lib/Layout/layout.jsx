import ReactDOM from 'react-dom';

const Layout = (props) =>{

    const {id, children, column, row, elementStyle, Class, Style} = props


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

    const generateClass = () =>{

        if(id){

        let styleString = ""
        let parentStyle = ""

        for(const key in elementStyle){
   
            if(key === "parent"){

                parentStyle = `
                .${id}{
                    display : grid;
                ${
                    !elementStyle[key].background ? 
                    "" : 
                    "background: " + elementStyle[key].background +";"
                }
                ${
                    !elementStyle[key].column? 
                    "" : 
                    "grid-template-columns: " + elementStyle[key].column +";"
                }
                ${
                    !elementStyle[key].row ? 
                    "" : 
                    "grid-template-rows: " + elementStyle[key].row +";"
                }
                ${
                    !elementStyle[key].alignSelf ? 
                    "" : 
                    "align-self: " + elementStyle[key].alignSelf +";"
                }
                ${
                    !elementStyle[key].justifySelf ? 
                    "" : 
                    "justify-self: " + elementStyle[key].justifySelf +";"
                }
                ${
                    !elementStyle[key].textAlign ? 
                    "" : 
                    "text-align: " + elementStyle[key].textAlign +";"
                }
                ${
                    !elementStyle[key].margin ? 
                    "" : 
                    "margin: " + elementStyle[key].margin +";"
                }

                ${
                    !elementStyle[key].padding ? 
                    "" : 
                    "padding: " + elementStyle[key].padding +";"
                }
                
                }
                `

            }if(typeof Number(key) === "number" && Number(key) > 0){

                styleString += `
                .${id} div:nthChild(${key}){
                ${
                    !elementStyle[key].background ? 
                    "" : 
                    "background: " + elementStyle[key].background +";"
                }
                ${
                    !elementStyle[key].column? 
                    "" : 
                    "grid-template-columns: " + elementStyle[key].column +";"
                }
                ${
                    !elementStyle[key].row ? 
                    "" : 
                    "grid-template-rows: " + elementStyle[key].row +";"
                }
                ${
                    !elementStyle[key].alignSelf ? 
                    "" : 
                    "align-self: " + elementStyle[key].alignSelf +";"
                }
                ${
                    !elementStyle[key].justifySelf ? 
                    "" : 
                    "justify-self: " + elementStyle[key].justifySelf +";"
                }
                ${
                    !elementStyle[key].textAlign ? 
                    "" : 
                    "text-align: " + elementStyle[key].textAlign +";"
                }
                ${
                    !elementStyle[key].margin ? 
                    "" : 
                    "margin: " + elementStyle[key].margin +";"
                }

                ${
                    !elementStyle[key].padding ? 
                    "" : 
                    "padding: " + elementStyle[key].padding +";"
                }
                
                }
                `
            }
        }

        const style = `

            ${parentStyle}
             ${styleString}

        `

        return ReactDOM.createPortal(
            <style>
                {style}
            </style>, document.body
        )
        }
       

    }


   
    return(
        <>
         {generateClass()}
        <section className={`${id} ${Class}`}>
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
        </>
        
    )
}

export default Layout