import logo from '../images/logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter.jsx';
import { TodoSearch } from './TodoSearch/TodoSearch.jsx';
import { TodoList } from './TodoList/TodoList.jsx';
import { TodoItem } from './TodoItem/TodoItem.jsx';
import './App.css';
import { TodoProvider, TodoContext } from './TodoContext/TodoContext.jsx';
// import background from "../images/fondo.png";
// import background from "../images/react-background_xs.jpeg";





function App() {


  return (
    <React.Fragment>
      <TodoProvider>
        <div className='maindiv'>


          <img src={logo} className="App-logo center" alt="logo" />
          <p className='icon-html'>&#128203; App de Tareas &#9997; </p>
          <p className='text-dc' title="Proximamente..." >DC Software Factory</p>

          <TodoCounter />

          <TodoSearch />

          <TodoContext.Consumer>
            {({ dataStatus, todosFiltered, toggleCompleteTodo, deleteTodov2 }) => (
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
                    onDelete={() => deleteTodov2(todo.id)}
                  />
                ))}
              </TodoList>

            )}
          </TodoContext.Consumer>

        </div>

      </TodoProvider>
    </React.Fragment>
  );
}

export { App };
