import {useState} from  'react';
import './EmployeeForm.css'
const ExpenseForm = () => {
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
    
    return (
        <form className="employee-form">
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
                <button className="button" type='submit'>Add Employee</button>
            </div>
            <br/>
        </form>

    );

 }
 export default  ExpenseForm; 