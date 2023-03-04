import Buttons from "../Buttons/button"
import  useModal  from "../../Hooks/Modal/useModal"
import Modal from "../../Hooks/Modal/modal"
import SlideWindow from "../../Hooks/Modal/Windows/slideWindow"
import ModalOverlay from "../../Hooks/Modal/Overlays/modalOverlay"
import { Ulist, List } from "../List/MyLists"


const TopNav = (props) =>{

    const {logo, Class, lists} = props
    const {isShowing, toggle, motion } = useModal();
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
                </section>
 
            </header> 
            
            <Modal
                    isShowing={isShowing}
                >
                    <ModalOverlay
                        toggle={toggle}
                        animated={{time: 300, motion}}
                        motionType="fade"
                        seconds=".3s"
                        from="0"
                        to="1"
                    />
                    <SlideWindow  
                            toggle={toggle}
                            animated={{time: 300, motion}}
                            motionType="slide-left"
                            seconds=".2s"
                            from="-300px"
                            to="0"
                        >
                            <Ulist
                                Class="listStyle"
                                title="My List"
                            >
                                <List
                                element="list 1"
                                handleClick={()=>toggle(300)}
                                />
                                <List
                                element="list 2"
                                handleClick={()=>toggle(300)}
                                />
                                <List
                                element="list 3"
                                handleClick={()=>toggle(300)}
                                target={true}
                                />
                                <List
                                element="list 4"
                                handleClick={()=>toggle(300)}
                                />
                            </Ulist>

                        </SlideWindow>
                </Modal>
        </>
        
    )
}

export default TopNav