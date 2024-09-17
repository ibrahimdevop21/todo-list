//Next is to keep the data at the reboot
import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodosValue] = useState('');

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }

  function handleEditeTodo(index) {
    const valueToBeEdited = todos[index]; // Get the todo that needs editing
    setTodosValue(valueToBeEdited); // Set it as the current input value
    handleDeleteTodo(index); // Optionally delete the old todo
  }

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodosValue={setTodosValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditeTodo={handleEditeTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
