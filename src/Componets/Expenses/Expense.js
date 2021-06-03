import ExpenseItems from "./ExpenseItem";
import "./expenses.css";
import Card from "./../UI/Card";

const Expense = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItems
        title={props.expense[0].title}
        amount={props.expense[0].expenseAmount}
        date={props.expense[0].date}
      />
      <ExpenseItems
        title={props.expense[1].title}
        amount={props.expense[1].expenseAmount}
        date={props.expense[1].date}
      />
      <ExpenseItems
        title={props.expense[2].title}
        amount={props.expense[2].expenseAmount}
        date={props.expense[2].date}
      />
      <ExpenseItems
        title={props.expense[3].title}
        amount={props.expense[3].expenseAmount}
        date={props.expense[3].date}
      />
    </Card>
  );
};
export default Expense;
