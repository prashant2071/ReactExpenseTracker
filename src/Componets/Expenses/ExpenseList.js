import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const  ExpenseList = (props) => {


        if(props.FilterDate.length === 0) {
           return (
             <h2 className="expenses-list__fallback">Expense Not Found</h2>
           );
        
        }

    return (
        <ul className="expenses-list">
       {props.FilterDate.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.expenseAmount}
        />      
       ))}
          </ul>
    );
       };
    
export default ExpenseList;