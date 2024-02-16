import EmployeeDetails from "./EmployeeDetails";
const EmployeeList = props => {

    if(props.details.length === 0){
        return <h2>Found No Employees</h2>
    }
    return(
        <ul>
            {
                 props.details.map((employee, index) => (<EmployeeDetails 
                    key={employee.id} 
                    name = {employee.name} 
                    dob={employee.dob} 
                    yoe= {employee.yoe} />))
            }

        </ul>

    )

}
export default EmployeeList;