import Expense from './Componets/Expenses/Expense'
import NewExpense from './Componets/NewExpense/NewExpense'

function App() {
  var expense=[
  { 
  id:1,
  date : new Date(2021, 4, 27),
  title : "Blue Book Renew",
  expenseAmount :6400
},
  {
    id:2,
    date : new Date(2021, 2, 18),
  title : "buy table ",
  expenseAmount : 1200
  },
   {
   id:3,
   date : new Date(2021, 5, 27),
  title : "Buy Comfortable chair",
  expenseAmount : 5500
  }
  ,
  {
    id:4,
 date : new Date(2021, 7, 22),
 title : "Go watch Movie",
 expenseAmount : 500
 },]

 const addExpenseHandler = (expenseData) =>{
   console.log('expeseData Comming')
   console.log(expenseData)
 }
  return (

    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expense={expense}/>
     </div>
  );
}

export default App;
