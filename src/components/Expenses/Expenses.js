import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const onFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredByYearExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={selectedYear}
        onFilterHandler={onFilterHandler}
      />
      <ExpensesChart expenses={filteredByYearExpenses} />
      <ExpensesList expenses={filteredByYearExpenses} />
    </Card>
  );
};

export default Expenses;
