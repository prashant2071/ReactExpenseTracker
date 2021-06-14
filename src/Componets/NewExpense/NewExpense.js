import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const NewExpenseHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(ExpenseData);
    props.onAddExpense(ExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={NewExpenseHandler} />
    </div>
  );
};
export default NewExpense;
