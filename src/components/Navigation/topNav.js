import Buttons from "../Buttons/button"

const TopNav = (props) =>{

    const {logo, Class, lists} = props
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

             el ="Submit"
             Class="main-btn"
          />
            </section>

            
            
        </header>
    )
}

export default TopNav