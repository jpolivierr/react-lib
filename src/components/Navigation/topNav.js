import Buttons from "../Buttons/button"
import useModal from "../../Hooks/Modal/useModal"
import Modal from "../../Hooks/Modal/modal"
import ModalSideWindow from "../../Hooks/Modal/Windows/modalSideWindow"
import ModalOverlay from "../../Hooks/Modal/Overlays/modalOverlay"


const TopNav = (props) =>{

    const {logo, Class, lists} = props
    const {isShowing, toggle, motion } = useModal();
    return(
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

            
            <Modal
                isShowing={isShowing}
                toggle={toggle}
                animated={{time: 300, motion}}
                type="side"
            >
                <ModalOverlay
                    toggle={toggle}
                    animated={{time: 300, motion}}
                    motionType="fade"
                    seconds=".3s"
                    from="0"
                    to="1"
                />
                <ModalSideWindow 
                         toggle={toggle}
                         animated={{time: 300, motion}}
                         motionType="slide-left"
                         seconds=".3s"
                         from="0"
                         to="1"
                       />
            </Modal>
        </header>
    )
}

export default TopNav