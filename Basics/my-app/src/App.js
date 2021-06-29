//import "./App.css";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses.js";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.67,
      date: new Date(2021, 3, 28),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 794.67,
      date: new Date(2021, 3, 29),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 3, 29),
    },
    {
      id: "e4",
      title: "Mew Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 3, 30),
    },
  ];

  return (
    <div>
      <h1>Lets Start!</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
