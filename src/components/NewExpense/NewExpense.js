import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = (event) => {
    setIsEditing((prevState) => {
      return setIsEditing(!prevState);
    });
  };

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          displayFormHandler={startEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
