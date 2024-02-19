import './EmployeeList.css';
import EmployeeDetails from "./EmployeeDetails";
import { useState } from 'react';
const EmployeeList = props => {
    
    const [refresh, setRefresh] = useState(false);

    if(props.details.length === 0){
        return <h2>Found No Employees</h2>
    }
    return(
        <ul>
            {
                 props.details.map((employee, index) => (<EmployeeDetails 
                    key={employee.id} 
                    name={employee.name} 
                    dob={employee.dob} 
                    yoe={employee.yoe}
                    setRefresh={setRefresh} />))
            }
             
        </ul>
       

    )

}
export default EmployeeList;
