import React from 'react';

export default function TodoCard({ children }) {
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <i className='fa-solid fa-pen-to-square'></i> {/* Edit icon */}
        <i className='fa-solid fa-trash'></i> {/* Delete icon */}
      </div>
    </li>
  );
}
