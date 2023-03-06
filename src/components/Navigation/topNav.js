import Buttons from "../Buttons/button"
import  useModal  from "../../lib/Modal/useModal"
import  useModal2  from "../../lib/Modal/useModal"
import Modal from "../../lib/Modal/modal"
import Modal2 from "../../lib/Modal/modal"
import SlideWindow from "../../lib/Modal/Windows/slideWindow"
import FoatingWindow from "../../lib/Modal/Windows/floatWindow"
import ModalOverlay from "../../lib/Modal/Overlays/modalOverlay"
import { Ulist, List } from "../List/MyLists"
import Layout from "../../lib/Layout/layout"


const TopNav = (props) =>{

    const {logo, Class, lists} = props

    const {isShowing, toggle, motion } = useModal();

    const modal2 = useModal2();

    const layoutStyle = {
            parent : {
                         column: "max-content 1fr max-content max-content"
                        
                        },
                        1 :{
                            alignSelf: "center",
                            justifySelf : "center"
                        },

                        2 :{
                            alignSelf: "center",
                            justifySelf : "flex-end",
                            margin : "0rem 3rem 0rem 0rem"
                        },
                        3 :{
                            alignSelf: "center",
                            justifySelf : "center",
                            margin : "0rem 1rem 0rem 0rem"
                        },
                        4 :{
                            alignSelf: "center",
                            justifySelf : "center"
                        }
    }

    return(

        <>

        <Layout 
            Class="container"
             elementStyle={layoutStyle}
             Style={{padding: "2rem 0rem"}}
            >

                <figure>
                    LOGO HERE
                </figure>

               <ul style={{display: "Flex", gap: "2rem"}}>
                    <li>Home</li>
                    <li>about</li>
                    <li>team</li>
                    <li>contact</li>
               </ul>

                <Buttons
                        clickEvent = {toggle}
                        el="Submit"
                        Class="main-btn"
                    />

                <Buttons
                        clickEvent = {modal2.toggle}
                        el="sign up"
                        Class="main-btn"
                    />

        </Layout>
        

      
            <Modal
                    isShowing={isShowing}
                >
                    <ModalOverlay
                        toggle={toggle}
                        animated={{time: 300, motion}}
                        motionType="fade"
                        seconds=""
                        from="0"
                        to="1"
                    />
                    <FoatingWindow 
                            toggle={toggle}
                            Class="float-window"
                            animated={{time: 300, motion}}
                            motionType="float"
                            seconds=""
                            from="-300px"
                            to="50px"
                        >

                        </FoatingWindow>
                </Modal>


                <Modal2
                    isShowing={modal2.isShowing}
                >
                    <ModalOverlay
                        toggle={modal2.toggle}
                        animated={{time: 300, motion: modal2.motion}}
                        motionType="fade"
                        seconds=".3s"
                        from="0"
                        to="1"
                    />
                    <SlideWindow 
                            toggle={modal2.toggle}
                            Class=""
                            animated={{time: 300, motion: modal2.motion}}
                            motionType="slide-left"
                            seconds=".2s"
                            from="-300px"
                            to="0px"
                        >
                            <Ulist
                                Class="listStyle"
                                title="My List"
                            >
                                <List
                                element="list 1"
                                handleClick={()=>modal2.toggle(300)}
                                />
                                <List
                                element="list 2"
                                handleClick={()=>modal2.toggle(300)}
                                />
                                <List
                                element="list 3"
                                handleClick={()=>modal2.toggle(300)}
                                target={true}
                                />
                                <List
                                element="list 4"
                                handleClick={()=>modal2.toggle(300)}
                                />
                            </Ulist>

                        </SlideWindow>
                </Modal2>
        </>
        
    )
}

export default TopNav