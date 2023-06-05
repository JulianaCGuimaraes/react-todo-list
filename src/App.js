import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="todo-app">
      <h1>To Do List</h1>
      <TodoForm/>
    </div>
  );
}

export default App;
