import "../../styles/Lists/Lists.css"

const Lists = ({list}) =>{

    const {info, lists} = list

    return(
        <ul className={info.Class && info.Class}>

            {info.title && <h3>{info.title}</h3>}

            {
            lists.map((li,index) =>(

                <li 
                     key={index} 
                     className={li.Class}
                     onClick={(e) => li.handleClick(e)}
                     >

                    {
                    li.href && li.href[0] && li.href[1] && 
                    <a href={li.href[0]} target="_blank">
                        {li.el}
                    </a>
                    }

                    {
                    li.href && li.href[0] && !li.href[1] && 
                    <a href={li.href[0]}>
                        {li.el}
                    </a>
                    } 

                    {
                    !li.href[0] && !li.href[1] && li.el
                    }   
                     

                </li>

            ))
            } 

        </ul>
    )
}

export default Lists