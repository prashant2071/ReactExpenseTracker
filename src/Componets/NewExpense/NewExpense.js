import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseForm,setexpenseForm]=useState(false)
  const NewExpenseHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(ExpenseData);
    props.onAddExpense(ExpenseData);
    // setexpenseForm(false)
  };
    const cancelForm = () => {
      setexpenseForm(false);
    };
  const showform= () =>{
    setexpenseForm(true);
  }
 

  return (
    <div className="new-expense">
      {!expenseForm &&    
       <div >
      <button onClick={showform}>New Expense</button>
    </div> }
      {expenseForm &&
        <ExpenseForm
          cancelForm={cancelForm}
          onSaveExpenseData={NewExpenseHandler}
        />
      }
    </div>
  );
};
export default NewExpense;
