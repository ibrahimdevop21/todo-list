import React, { useState } from 'react';

export default function TodoInput(props) {
  const { handleAddTodos } = props;
  const [todoValue, setTodosValue] = useState('');
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodosValue(e.target.value);
        }}
        placeholder='Enter todo...'
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodosValue('');
        }}
      >
        Add
      </button>
    </header>
  );
}
