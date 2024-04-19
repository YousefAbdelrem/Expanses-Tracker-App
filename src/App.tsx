import Button from "./Components/Button/Button";
import Alert from "./Alert";
import ListGroup from "./Components/ListGroup";
import { useState } from "react";
import Expandable from "./Expandable";
import Form from "./Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpensesForm from "./expense-tracker/components/ExpensesForm";
import categories from "./expense-tracker/categories";

function App() {
  const [SelectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpense] = useState([
    { id: 1, Description: "joe", Amount: 11, Category: "Utilities" },
    { id: 2, Description: "aaa", Amount: 12, Category: "Utilities" },
    { id: 3, Description: "bb", Amount: 34, Category: "Groceries" },
    { id: 4, Description: "ccc", Amount: 233, Category: "Entertainment" },
  ]);

  const visibleExpanses = SelectedCategory
    ? expenses.filter((e) => e.Category === SelectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpensesForm onSubmit= {(expense) => setExpense([...expenses, {...expense, id: expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(Category) => setSelectedCategory(Category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpanses}
        onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
