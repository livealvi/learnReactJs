import React, { useState } from "react";

// import ExpenseForm from "../NewExpense/ExpenseForm";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import "./ExpenseDate.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //react's hook

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Chane Title</button>
    </Card>
  );
};

export default ExpenseItem;
