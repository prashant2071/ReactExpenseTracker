import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(ExpenseData);
    props.onAddExpense(ExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />
    </div>
  );
};
export default NewExpense;
