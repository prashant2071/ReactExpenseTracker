import "./expenses.css";
import Card from "./../UI/Card";
import ExpenseFilter from '../FilterExpense/ExpenseFilter'
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {

  const [filteryear,setfilteryear] =useState('2019')
const dataHandler= (year) =>{
  setfilteryear(year)
  console.log(year)

}
  const FilterDate=props.expense.filter((item,index)=>{
  if((item.date).getFullYear().toString()===filteryear){
    return true
  }})

// console.log("expense data from props ",props.expense)

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={filteryear} onChangeyear={dataHandler} />
        {FilterDate.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.expenseAmount}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expense;
