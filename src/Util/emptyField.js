export const emptyField = (name, value) =>{
    try {
        if(!value){
            return name + " is required"
        }else{
            return null;
        }
    } catch (error) {
        console.log(error)
    }
}