import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [isEditing, setIsEditng] = useState(false);

  const startEditingHandler = () => {
    setIsEditng(true);
  }

  const cancelHandler = () => {
    setIsEditng(false);
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button type="button" onClick={startEditingHandler}>Add New Expense.</button>}
      {isEditing && <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
