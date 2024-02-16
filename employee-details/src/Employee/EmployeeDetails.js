 import './EmployeeDetails.css';
 import EmployeeDob from './EmployeeDob';

function EmployeeDetails(props){

    return(
        <li>
        <div className="employee-details"> 
            <EmployeeDob dob={props.dob}/>
            <div className="employee-details__description">
                
                <h2 >{props.name}</h2>
                <div className="employee-yoe">{props.yoe}</div>
            </div>
        </div>
        </li>
    )
}
export default EmployeeDetails;