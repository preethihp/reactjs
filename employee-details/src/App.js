import { useState } from 'react';
import './App.css';
import Employee from './Employee/Employee';
import NewEmployee from './Employee/NewEmployee';
import {EmployeeContext} from './Employee/employee-content';
import EmployeeContextProvider from './Employee/employee-content';
import EmployeeForm from  "./Employee/EmployeeForm";



function App() {

  
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
