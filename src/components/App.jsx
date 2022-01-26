import logo from '../images/logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter.jsx';
import { TodoSearch } from './TodoSearch/TodoSearch.jsx';
import { TodoList } from './TodoList/TodoList.jsx';
import { TodoItem } from './TodoItem/TodoItem.jsx';
import './App.css';
import { useLocalStorage } from '../customHooks/useLocalStorage.jsx'
// import background from "../images/fondo.png";
// import background from "../images/react-background_xs.jpeg";





function App() {
  const {
    item:todos,
    saveItem:saveTodos,
    dataStatus,
  } = useLocalStorage('TODOS_V1',[]);


  const [searchValue, setSearchValue] = React.useState('');
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed ).length;
  const todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  const toggleCompleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id == id);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  function deleteTodov2(id){
    const newTodos = todos.filter(todo=>todo.id !== id)
    saveTodos(newTodos)
  }


  return (
    <>
      <div className='maindiv'>


      <img src={logo} className="App-logo center" alt="logo" />
      <p className='icon-html'>&#128203; App de Tareas &#9997; </p>
      <p className='text-dc' title="Proximamente..." >DC Software Factory</p>
      
      <TodoCounter
        loading={dataStatus}
        total = {totalTodos}
        completed = {completedTodos}
      />
      
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />


      
      <TodoList
      loading = {dataStatus.loading}
      error = {dataStatus.error}
      >

      {dataStatus.error && <p>hubo un error.</p>}
      {(dataStatus.loading && !dataStatus.error) && <p>cargando...</p>}
      {(!dataStatus.loading) && <p>crear tarea...</p>}
      

        {todosFiltered.map(todo => (
          <TodoItem 
            key={todo.id} 
            id={todo.id} 
            text={todo.text} 
            priority={todo.priority}
            completed={todo.completed}
            onComplete={()=>toggleCompleteTodo(todo.id)}
            onDelete={()=>deleteTodov2(todo.id)}
          />
        ))}  
      </TodoList>

      </div>
      
    </>
  );
}

export  { App };
