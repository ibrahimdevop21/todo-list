import React from 'react';

export default function TodoInput({
  handleAddTodos,
  todoValue,
  setTodosValue,
}) {
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodosValue(e.target.value); // Update input value on change
        }}
        placeholder='Enter todo...'
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue); // Add the new or edited todo
          setTodosValue(''); // Clear the input field after adding
        }}
      >
        Add
      </button>
    </header>
  );
}
