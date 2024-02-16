import { createContext, useReducer, useState } from "react";

export const EmployeeContext = createContext({
    details:[],
    onSaveEmployeeData :()=>{}
});

function employeeReducer(state, action){
    const updatedEmployee = [...state]
    if(action.type === 'ADD_EMPLOYEE'){
        const EmployeeData ={
            ...action.payload,
            id: Math.random().toString()
        };
    
    //setEmployees((previousEmployee) => {
    //return [EmployeeData, ...previousEmployee ];
    //});

    updatedEmployee.push(EmployeeData)
    }
    return  updatedEmployee; 

}

export default function EmployeeContextProvider({children}) {
    const DUMP_EMPLOYEES = [
        {id:'e1', name:'Preethi', dob:new Date(2002,4,3), yoe: '2 years'  },
        {id:'e2', name:'Priya', dob:new Date(2001,5,22), yoe:'3 years'  },
        {id:'e2', name:'Anjali', dob:new Date(2000,2,18), yoe:'4 years'  },
    ];
    
    const[employees , dispatch] = useReducer(employeeReducer, DUMP_EMPLOYEES);
    //const[employees, setEmployees] = useState(DUMP_EMPLOYEES);
  
    const addEmployeeHandler = employees => {
        dispatch(
            {
                type: "ADD_EMPLOYEE",
                payload: employees
            }
        );
    }


    const contextValue = {
        details : employees,
        onSaveEmployeeData : addEmployeeHandler
    };
    return <EmployeeContext.Provider value={contextValue}>
        {children}
        </EmployeeContext.Provider>



    
}

