import React from 'react';
import './ExpenseFilter.css'
 const ExpenseFilter = (props) =>
{

    const onchangeHandler = (e) =>{
        const {value} =e.target
        props.onChangeyear(value)

    }
    
return (
  <div className="expenses-filter">
    <div className="expenses-filter__control">
      <label>Filter by year</label>
      <select value={props.selectedYear} onChange={onchangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  </div>
);
}
export default ExpenseFilter;