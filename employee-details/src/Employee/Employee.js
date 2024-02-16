import EmployeeDetails from "./EmployeeDetails";
import './Employee.css';
import EmployeeFilter from "./EmployeeFilter";
import { useState, useContext } from "react";
import EmployeeList from "./EmployeeList";
import { EmployeeContext } from './employee-content';
import { UseSelector, useSelector } from "react-redux";

const Employee = (props) => {

    //const EmployeeCtx = useContext(EmployeeContext)
    const details = useSelector(state => state.details);

    const [FilteredYear, setFilteredYear] = useState('2000');

    const filterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredEmployees =details.filter(employee => {
        if (employee.dob) {
            return employee.dob.getFullYear().toString() === FilteredYear;
        }
        return false;
    });



    return (
        <div className="employee">
            <EmployeeFilter selected={FilteredYear} onChangeFilter={filterHandler} /><br />
            <EmployeeList details={filteredEmployees} />
        </div>
    );

}
export default Employee;
