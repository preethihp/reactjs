import './EmployeeDob.css';
function EmployeeDob(props){

    const month = props.dob.toLocaleString('en-US', { month: 'long'});
    const date = props.dob.toLocaleString('en-US',{ day: '2-digit'});
    const year = props.dob.getFullYear();

    return(
        <div className='employee-dob'>
        <div className='employee-dob__month'>{month}</div>
        <div className='employee-dob__year'>{year}</div>
        <div className='employee-dob__day'>{date}</div>
    </div>

    );
}

export default EmployeeDob;