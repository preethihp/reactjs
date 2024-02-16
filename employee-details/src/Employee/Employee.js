import EmployeeDetails from "./EmployeeDetails";
import './Employee.css';
import EmployeeFilter from "./EmployeeFilter";
import { useState } from "react";
import EmployeeList  from "./EmployeeList";
const  Employee = (props) =>{


    const[FilteredYear, setFilteredYear] = useState('2000');

    const filterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
     const filteredEmployees =props.details.filter(employee=>{
        return employee.dob.getFullYear().toString() === FilteredYear;
     });


    
    return(
        <div className="employee">
            <EmployeeFilter selected={FilteredYear} onChangeFilter={filterHandler}/><br/>
            <EmployeeList details= {filteredEmployees} />

             </div>
    );

}
export default Employee;