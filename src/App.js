import { useState } from 'react';
import Expense from './Componets/Expenses/Expense'
import NewExpense from './Componets/NewExpense/NewExpense'

const App = () =>  {
  var DummyExpense = [
    {
      id: 1,
      date: new Date(2021, 4, 27),
      title: "Blue Book Renew",
      expenseAmount: 6400,
    },
    {
      id: 2,
      date: new Date(2020, 2, 18),
      title: "buy table ",
      expenseAmount: 1200,
    },
    {
      id: 3,
      date: new Date(2021, 5, 27),
      title: "Go watch Movie",
      expenseAmount: 5500,
    },

    {
      id: 4,
      date: new Date(2022, 7, 22),
      title: "Buy Comfortable chair",
      expenseAmount: 500,
    },
  ];
   const [expense, setExpense] = useState(DummyExpense);

 const addExpenseHandler = (expense) =>{
   console.log('expeseData Comming')
   console.log(expense)
   setExpense(prevStateExpenses =>{
     return [
       ...prevStateExpenses,
       expense
     ]
   })
 }
  return (

    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expense={expense}/>
     </div>
  );
}

export default App;
