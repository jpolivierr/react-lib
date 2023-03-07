import { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

const Layout = (props) =>{

    const {id, children, column, row, elementStyle, Class, Style} = props


    useLayoutEffect(()=>{
         
        if(!document.querySelector("#compStyle")){
            const el = document.createElement("style")
            el.id = "compStyle"
            document.head.appendChild(el)
        }else{
            console.log("already Exist")
        }

        generateClass()

    },[])


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
                .${id} div:nth-child(${key}){
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
        

        if(document.querySelector("#compStyle")){


            console.log(style)
             const mainElement = document.querySelector("#compStyle")
             mainElement.innerHTML += style
            //  const style = document.createElement("style")
            // style.innerHTML = style
            // mainElement.innerText = style
        }

        // return ReactDOM.createPortal(
        //     <style>
        //         {style}
        //     </style>, document.body
        // )
        }
       

    }


   
    return(
        <>
        <section className={`${id} ${Class}`}>
             {
               children.length > 0 &&

                  children.map((element, index) =>(
                    <div 
                             key={index}  
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