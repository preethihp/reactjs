import './App.css';
import Employee from './Employee/Employee';
import NewEmployee from './Employee/NewEmployee';

function App() {
  const employees = [
    {id:'e1', name:'Preethi', dob:new Date(2002,4,3), yoe: '2 years'  },
    {id:'e2', name:'Priya', dob:new Date(2001,5,22), yoe:'3 years'  },
    {id:'e2', name:'Anjali', dob:new Date(2000,2,18), yoe:'4 years'  }
  ]

  const addEmployeeHandler = employee =>{
    console.log(employee)
  }
  return (
    <div>
        <h1>Employee Details</h1>
        <NewEmployee  onEmployeeAdded = {addEmployeeHandler}/><br/><br/>
        <Employee details = {employees}/>
    </div>
  )
}

export default App;
