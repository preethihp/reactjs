import { useEffect, useState } from 'react';
import './App.css';
import Employee from './Employee/Employee';
import NewEmployee from './Employee/NewEmployee';
import {EmployeeContext} from './Employee/employee-content';
import EmployeeContextProvider from './Employee/employee-content';
import EmployeeForm from  "./Employee/EmployeeForm";
import { useSelector } from 'react-redux';



function App() {

  const details= useSelector(state => state.details);
  useEffect(
    () => {
      fetch('https://employeedata-93a1f-default-rtdb.firebaseio.com/emplyoee.json',{
        method:'PUT',
        body:JSON.stringify(details)
      })
    },
    [details]
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
