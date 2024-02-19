import { createSlice } from '@reduxjs/toolkit';
import {createStore, configureStore} from '@reduxjs/toolkit';


const DUMP_EMPLOYEES = [
    {id:'e1', name:'Preethi', dob:new Date(2002,4,3), yoe: '2 years'  },
    {id:'e2', name:'Priya', dob:new Date(2001,5,22), yoe:'3 years'  },
    {id:'e2', name:'Anjali', dob:new Date(2000,2,18), yoe:'4 years'  },
];

const initialState = {details:DUMP_EMPLOYEES};
const employeeSlice = createSlice({
    name: "employee",
    initialState:initialState,
    reduces: {
        addEmployee(state, action){
            const employeeData = {
                ...action.payload,
                id: Math.random().toString() 
            };
            state.details.push(employeeData);
        },
        removeEmployee(state,action){}
    }
});

const employeeReducer = (state={details: DUMP_EMPLOYEES}, action) =>{
    const updatedEmployee = [...state.details]
    if(action.type === 'ADD_EMPLOYEE'){
        const EmployeeData ={
            ...action.payload,
            id: Math.random().toString()
        };


    updatedEmployee.push(EmployeeData)
    return {details: updatedEmployee};
    }
    return  state; 


}
//const employeeStore = createStore(employeeReducer);
const employeeStore = configureStore({
    reducer: employeeSlice.reducer
});

export default employeeStore;
export const employeeActions = employeeSlice.actions