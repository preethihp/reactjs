import { createContext } from "react";

export const EmployeeContext = createContext({
    details:[],
    onSaveEmployeeData :()=>{}
});

