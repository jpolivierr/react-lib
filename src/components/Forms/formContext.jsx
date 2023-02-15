import { createContext, useState } from "react";

const FormContext = createContext()

export const FormProvider = ({children}) => {

        return(
            <FormContext.Provider value={{item: 1}}>
                {children}
            </FormContext.Provider>
        )
}

export default FormContext