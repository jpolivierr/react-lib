export const numValidate = (value) =>{
    console.log(isNaN(Number(value)))
    try {
        if(value && isNaN(Number(value))){
           return "Not a number"
        }else{
            return ""
        }
    } catch (error) {
        console.log(error.message())
    }
}