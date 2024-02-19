import { useEffect, useState } from 'react';
import './App.css';
import Employee from './Employee/Employee';
import NewEmployee from './Employee/NewEmployee';
import {EmployeeContext} from './Employee/employee-content';
import EmployeeContextProvider from './Employee/employee-content';
import EmployeeForm from  "./Employee/EmployeeForm";
import { useDispatch, useSelector } from 'react-redux';
import { sendEmployeeData } from './Store';


function App() {

  const details = useSelector(state => state.details);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(sendEmployeeData(details))
    },
    [details, dispatch]
  );
  
  return (
    <EmployeeContextProvider>
    <div>
        <h1>Employee Details</h1>
        <NewEmployee>
          <EmployeeForm /><br></br><br></br>
        </NewEmployee>
        <Employee />
    </div>
    </EmployeeContextProvider>
  )
}

export default App;
