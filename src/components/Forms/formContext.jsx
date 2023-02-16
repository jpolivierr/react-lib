import { createContext, useState } from "react";
import Form from "./Form";

const FormContext = createContext()

export const FormProvider = ({children}) => {

        return(
            <FormContext.Provider value={{item: 1}}>
                {children}
            </FormContext.Provider>
        )
}

export default FormContext