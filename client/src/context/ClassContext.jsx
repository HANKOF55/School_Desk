import { createContext, useState } from "react";
import { classData, classHeadings } from "../components/pages/ManageClass/data";

export const classContext = createContext();

export const classProvider = ({children}) => {

    return(
        <classContext.Provider value = {{classData, classHeadings}}>
            {children}
        </classContext.Provider>
    )
}