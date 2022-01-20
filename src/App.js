import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

// Creo un array para usar como prueba
const todos = [
  {id:1, text: 'Seguir Aprendiendo React', completed:false, priority:'alta'},
  {id:2,text: 'Aprender JSX', completed:false, priority:'media'},
  {id:3,text: 'Aprender MongoDB', completed:false, priority:'baja'},
]
// Este es el componente PADRE que contendrá a todos los demas
function App() {
  return (
    <>

      Este es un elemento
      <img src={logo} className="App-logo" alt="logo" />


      <h1>Este es otro elemento</h1>


      <TodoCounter/>
      
      <TodoSearch/>
      <CreateTodoButton/>
      
      <TodoList>
        esto equivale a un foreach, necesita obligatoriamente un índice unico.
        {todos.map(todo => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} priority={todo.priority}  />
        ))}  
      </TodoList>
      
    </>
  );
}

export default App;
