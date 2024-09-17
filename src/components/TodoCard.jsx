import React from 'react';

export default function TodoCard({
  children,
  handleDeleteTodo,
  index,
  handleEditeTodo,
}) {
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button
          onClick={() => {
            handleEditeTodo(index); // Edit button
          }}
        >
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index); // Delete button
          }}
        >
          <i className='fa-regular fa-trash-can'></i>
        </button>
      </div>
    </li>
  );
}
