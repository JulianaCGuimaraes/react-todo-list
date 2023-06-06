// BASICAMENTE O TODOFORMS SÓ VAI FUNCIONAR, SE ELE SEGUIR A REGRA NO TODOLIST
import React, {useState} from 'react'
import TodoForm from './TodoForm'

export default function TodoList() {
const [todos, setTodos] = useState([])

const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
};

  return (
    <div>
        <h1>what's the Plan for today</h1>
        <TodoForm onSubmit ={addTodo}/>
    </div>
  )
}
