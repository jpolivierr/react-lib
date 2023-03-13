import SkeletonLoading from "../../../lib/loadingEffect/skeletonLoading/skeletonLoading" 

const Example = () =>{

    return(
        <div style={{position: "relative"}} class="container">
            <SkeletonLoading isShowing={true}/>

        </div>
    )

}

export default Example