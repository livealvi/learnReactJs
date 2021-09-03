import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import "./ExpenseDate.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate dateX={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <input value="wejnlcwj"></input> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
