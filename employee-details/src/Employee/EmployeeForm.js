import {useState} from  'react';
import './EmployeeForm.css';
import { useContext } from 'react';
import {EmployeeContext} from "./employee-content";
import { useDispatch } from 'react-redux';


const EmployeeForm = (props) => {

    //const {onSaveEmployeeData} = useContext(EmployeeContext);
    const dispatch = useDispatch();

    const[enteredName, setEnteredName]=useState('');
    const [enteredDob,setEnteredDob] = useState('')  ;
    const[enteredYoe, setEnteredYoe]=useState('');

    const NameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const DobChangeHandler = (event) =>{
        setEnteredDob(event.target.value);
    }
    const YoeChangeHandler = (event) =>{
        setEnteredYoe(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();

        const EmployeeData = {
            name : enteredName,
            dob : new Date(enteredDob),
            yoe : enteredYoe

        }
        //console.log(EmployeeData);
        //props.onSaveEmployeeData(EmployeeData);
        //onSaveEmployeeData(EmployeeData);
        dispatch({type:'ADD_EMPLOYEE', payload:EmployeeData});

        setEnteredName('');
        setEnteredDob('');
        setEnteredYoe('');
    }
    
    return (
        <form className="employee-form" onSubmit = {submitHandler}>
            <div className="name">
                <label>Name</label>
                <input type="text" name="name" onChange = {NameChangeHandler} value={enteredName}/><br/>
            </div>
            <br/>
            <div className="dob">
                <label>Date of Birth</label>
                <input  type="date" name="dob" onChange= {DobChangeHandler} value={enteredDob}/><br/>
            </div>
            <br/>
            <div className= "yoe">
                <label>Years of experience </label>
                <input type= "number" min="0" name="experience" onChange={YoeChangeHandler} value={enteredYoe}/><br/>
            </div>
            <br/>
            <div >
                <button className="button" type='submit' >Add Employee</button>
            </div>
            <br/>
        </form>

    );

 }
 export default  EmployeeForm; 