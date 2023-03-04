export const emptyField = (name, value) =>{
    try {
        if(!value){
            return name + " is required"
        }else{
            return false;
        }
    } catch (error) {
        console.log(error)
    }
}