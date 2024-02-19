import { useDispatch } from 'react-redux';
import './EmployeeDetails.css';
import EmployeeDob from './EmployeeDob';
import { useState } from 'react';
import { employeeActions } from '../Store';

const EmployeeDetails = (props) => {
    const [name, setName] = useState(props.name);
    const [isDeleted, setIsDeleted] = useState(false);
    const dispatch = useDispatch();
    const clickHandler = (EmployeeData) => {
        dispatch(employeeActions.removeEmployee(EmployeeData));
        setIsDeleted(true);
        console.log(EmployeeData);
        props.setRefresh(prev => !prev);
    };
    
    return (
        <div className={`employee-details ${isDeleted ? 'deleted' : ''}`}>
            {isDeleted ? (
                <div className="employee-deleted-message">Employee {name} deleted</div>
            ) : (
                <>
                    <EmployeeDob dob={props.dob} />
                    <div className="employee-details__description">
                        <h2>{props.name}</h2>
                        <div className="employee-yoe">{props.yoe}</div>
                        <button className='employee-delete' onClick={() => clickHandler(props)}>Delete</button>
                    </div>
                </>
            )}
            <br/>
        </div>
    );
};
export default EmployeeDetails;