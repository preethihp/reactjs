import EmployeeDetails from "./EmployeeDetails";
import './Employee.css';
function Employee(props){
    
    return(
        <div className="employee">
            <EmployeeDetails name={props.details[0].name}dob={props.details[0].dob}yoe={props.details[0].yoe}></EmployeeDetails><br/>
            <EmployeeDetails name={props.details[1].name}dob={props.details[1].dob}yoe={props.details[1].yoe}></EmployeeDetails><br/>
            <EmployeeDetails name={props.details[2].name}dob={props.details[2].dob}yoe={props.details[2].yoe}></EmployeeDetails><br/>
        </div>
    );

}
export default Employee;