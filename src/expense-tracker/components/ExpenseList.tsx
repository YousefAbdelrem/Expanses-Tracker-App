import React from "react";

interface Expense {
  id: number;
  Description: string;
  Amount: number;
  Category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0 ) return null;
  return (
    // select values 
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.Description}</td>
            <td>{expense.Amount}</td>
            <td>{expense.Category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete 
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${expenses.reduce((acc, expense) => expense.Amount + acc, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
