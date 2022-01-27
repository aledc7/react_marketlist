import logo from '../../images/logo.svg';
import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter.jsx';
import { TodoSearch } from '../TodoSearch/TodoSearch.jsx';
import { TodoList } from '../TodoList/TodoList.jsx';
import { TodoItem } from '../TodoItem/TodoItem.jsx';
import './App.css';
import { TodoContext } from '../TodoContext/TodoContext.jsx';
// import background from "../images/fondo.png";
// import background from "../images/react-background_xs.jpeg";





function AppUI() {

  const {dataStatus, todosFiltered, toggleCompleteTodo, deleteTodo} = React.useContext(TodoContext);


  return (
    <React.Fragment>
        <div className='maindiv'>


          <img src={logo} className="App-logo center" alt="logo" />
          <p className='icon-html'>&#128203; App de Tareas &#9997; </p>
          <p className='text-dc' title="Proximamente..." >DC Software Factory</p>

          <TodoCounter />

          <TodoSearch />

          
          <TodoList>

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
                onComplete={() => toggleCompleteTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))}
          </TodoList>

        </div>

    </React.Fragment>
  );
}

export { AppUI };
