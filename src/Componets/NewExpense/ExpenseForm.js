import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //  const [userInput,setnewUsetInput]= useState({
  //     enteredtitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })

  const changeTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setnewUsetInput({
    //     ...userInput,
    //     enteredtitle=e.target.value
    // })
  };

  const changeAmountHandler = (e) => {
    setEnteredAmount(e.target.value);

    // setnewUsetInput({
    //     ...userInput,
    //     enteredAmount=e.target.value
    // })
  };
  const changeDateHandler = (e) => {
    setEnteredDate(e.target.value);

    // setnewUsetInput({
    //     ...userInput,
    //     enteredDate:e.target.value
    // })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredtitle,
      expenseAmount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    props.cancelForm()

    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };
//  const cancelFormFull = () =>{
//     props.cancelForm()
//   }

  
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            placeholder="Expense Name"
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01 "
            step="0.01"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-01-26"
            max="2022-12-27"
            onChange={changeDateHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={() => props.cancelForm()}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
