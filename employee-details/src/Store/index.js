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
    reducers: {
        addEmployee(state, action){
            const employeeData = {
                ...action.payload,
                id: Math.random().toString() 
            };
            state.details.push(employeeData);
        },
        removeEmployee(state, action) {
            const idToRemove = action.payload;
            state.details = state.details.filter(employee => employee.id !== idToRemove);
        }
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
    if (action.type === 'REMOVE_EMPLOYEE') {
        const updatedEmployees = updatedEmployee.filter(employee => employee.id !== action.payload.id);
        return { details: updatedEmployees };
    }
    return  state; 


}
export const sendEmployeeData = (EmployeeData) => {

    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await  fetch('https://employeedata-93a1f-default-rtdb.firebaseio.com/employee.json', {
                method: 'PUT',
                body: JSON.stringify(EmployeeData),
              });

              if(!response.ok) {
                throw new Error("Sending expense data failed!");
              }
        };

        try {
            await sendRequest();
        }catch (error) {
            console.log(error);
        }
    };
    
}
export const removeEmployee = (EmployeeData) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(`https://employeedata-93a1f-default-rtdb.firebaseio.com/employee/${EmployeeData.id}.json`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error("Deleting employee failed!");
            }
        };

        try {
            await sendRequest();
            dispatch({
                type: 'REMOVE_EMPLOYEE',
                payload: EmployeeData
            });
        } catch (error) {
            console.log(error);
        }
    };
};


//const employeeStore = createStore(employeeReducer);
const employeeStore = configureStore({
    reducer: employeeSlice.reducer
});

export default employeeStore;
export const employeeActions = employeeSlice.actions