
const ModalAnimation = (props) =>{

    const {type, seconds, from, to} = props

    const slideLeft = `

          .slide-left{
            animation: slideLeft ${seconds} forwards;
          }

          @keyframes slideLeft {
                    from{
                        right: ${from};
                    }to{
                        right: ${to};
                    }
            }


            .close-slide-left{
                animation: closeSlideLeft ${seconds} forwards;
            }
            
            @keyframes closeSlideLeft {
                from{
                    right: ${to};
                }to{
                    right: ${from};
                }
            }

    `

    const fade = `
                .fadeIn{
                    animation: fadeIn ${seconds}  forwards;
                }
                
                @keyframes fadeIn {
                    from{
                        opacity: ${from};
                    }to{
                        opacity: ${to};
                    }
                }
                
                .fadeOut{
                    animation: fadeOut ${seconds} forwards;
                }
                
                @keyframes fadeOut {
                    from{
                        opacity: ${to};
                    }to{
                        opacity: ${from};
                    }
                }
    `

    const renderStyle = () =>{

        switch(type){
            case "slide-left" :
                return slideLeft

            case "fade" :
                return fade

            default :
                return null
        }

    }

    return(
        <style>
            {renderStyle()}
        </style>
    )
}

export default ModalAnimation