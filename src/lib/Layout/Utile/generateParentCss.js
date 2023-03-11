import { convertKey } from "./convertKey"



export const generateParentCss = (key, id, props) =>{

 if(key === "parent"){
            return `
                            .${id}{
                                ${props}
                            }
                        `
    }else{
        return ""
    }

}

export const generateChildCss = (key, id, props) =>{


    if(typeof Number(key) === "number" && Number(key) > 0){
    
        return `
                 .${id} div:nth-child(${key}){
                    ${props}
                 }
                 `
            
     }else{
        return ""
     }

}

export const generateMobileStyle = (id, mobile) =>{

    
    
       if(mobile){
        let mobileStyle = ""

            for(let key in mobile){
                const split = key.split("_")
                const minMax = split[0]
                const pixels = split[1]
             mobileStyle += `@media(${minMax}-width: ${pixels}px){
                                ${mobileProps(id, mobile[key])}
                            }
                            `
            }
        
            return mobileStyle
       }else{

              return ""

       }
        
   

}

const mobileProps = (id, elementStyle) =>{

    if(elementStyle){
        let props = ""
        for(let parentKey in elementStyle){
        
            props += !elementStyle[parentKey] ? "" :  `${convertKey(parentKey)} : ${elementStyle[parentKey]}; `
        
    }

    return `
          .${id}{
             ${props}
          }
    `  
    }            
    

}


export const generateCssProps = (elementStyle) =>{

    let props = ""
                
                for(let parentKey in elementStyle){
                    
                    if(parentKey !== "mobile"){
                        props += !elementStyle[parentKey] ? "" :  `${convertKey(parentKey)} : ${elementStyle[parentKey]}; `
                    }
                    
                }

      return props         
}