import Buttons from "../Buttons/button"
import  useModal  from "../../Hooks/Modal/useModal"
import  useModal2  from "../../Hooks/Modal/useModal"
import Modal from "../../Hooks/Modal/modal"
import Modal2 from "../../Hooks/Modal/modal"
import SlideWindow from "../../Hooks/Modal/Windows/slideWindow"
import FoatingWindow from "../../Hooks/Modal/Windows/floatWindow"
import ModalOverlay from "../../Hooks/Modal/Overlays/modalOverlay"
import { Ulist, List } from "../List/MyLists"


const TopNav = (props) =>{

    const {logo, Class, lists} = props

    const {isShowing, toggle, motion } = useModal();

    const modal2 = useModal2();

    return(

        <>
            <header className={Class}>

                <section>
                    {
                logo && 
                    <figure>
                        <h2><i class="fa-brands fa-pagelines"></i> HomeTrest</h2>
                    </figure>
            }
                
            
            {
                Array.isArray(lists) && lists.length > 0 && 
                        <ul>
                                {lists.map((list,index)=>{
                                return list.el
                                })}
                        </ul>
            }

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
                </section>
 
            </header> 
            
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