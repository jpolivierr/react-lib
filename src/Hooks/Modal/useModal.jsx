
const useModal = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggle = () =>{

        console.log("modal here")
        
        setIsModalOpen(!isModalOpen)

    }

    return {toggle}

}

export default useModal