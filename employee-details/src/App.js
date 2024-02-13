import './App.css';
import Employee from './Employee';

function App() {
  const employees = [
    {id:'e1', name:'Preethi', dob:new Date(2002,4,3), yoe: '2 years'  },
    {id:'e2', name:'Priya', dob:new Date(2001,5,22), yoe:'3 years'  },
    {id:'e2', name:'Anjali', dob:new Date(2000,2,18), yoe:'4 years'  }
  ]
  return (
    <div>
        <h1>Let's get started</h1>
        <Employee details = {employees}/>
    </div>
  )
}

export default App;
