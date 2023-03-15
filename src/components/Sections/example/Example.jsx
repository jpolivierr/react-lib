import SkeletonLoading from "../../../lib/loadingEffect/skeletonLoading/skeletonLoading" 

const Example = () =>{

    return(
        <div style={{position: "relative"}} className="container">
            <SkeletonLoading isShowing={true}/>

        </div>
    )

}

export default Example