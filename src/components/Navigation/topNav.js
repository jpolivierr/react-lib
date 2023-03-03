import Buttons from "../Buttons/button"
import useModal from "../../Hooks/Modal/useModal"
import Modal from "../../Hooks/Modal/modal"


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
                
            />
        </header>
    )
}

export default TopNav