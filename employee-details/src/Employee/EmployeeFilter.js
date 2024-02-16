import './EmployeeFilter.css';

const EmployeeFilter = (props) => {
    const dropDownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control" >
            
                <label>Filter by year: </label>
                <select className='value' value={props.selected} onChange={dropDownChangeHandler}>
                    <option value='2000'>2000</option>
                    <option value='2001'>2001</option>
                    <option value='2002'>2002</option>
                    <option value='2003'>2003</option>
                    <option value='2004'>2004</option>
                </select>
            </div>

        </div>


    )
}
export default EmployeeFilter;