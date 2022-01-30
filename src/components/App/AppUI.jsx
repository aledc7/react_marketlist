import logo from '../../images/logo.svg';
import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter.jsx';
import { TodoSearch } from '../TodoSearch/TodoSearch.jsx';
import { TodoList } from '../TodoList/TodoList.jsx';
import { TodoItem } from '../TodoItem/TodoItem.jsx';
import './App.css';
import { TodoContext } from '../TodoContext/TodoContext.jsx';
import { Modal } from '../Modal/Modal.jsx';
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoForm } from '../TodoForm/TodoForm.jsx';
import Box from '@mui/material/Box';
import { SiReact } from "react-icons/si";




function AppUI() {

  const {
    dataStatus,
    todosFiltered,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);



  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  



  return (
    <React.Fragment>
      <Box sx={{
        width: '100%',
        maxWidth: 500,
        margin: 'auto',
        borderRadius: 5,
        backgroundColor: 'primary.light',
        '&:hover': { backgroundColor: 'primary.light' },
        boxShadow: 20,
      }}>

        <img src={logo} className="App-logo center" alt="logo" />

        <p className='icon-html'>&#128203; APP DE TAREAS &#9997; </p>


        <TodoCounter />

        <TodoSearch />

        <div className='addbutton'>
          <CreateTodoButton
            setOpenModal={setOpenModal}

          />
        </div>




        <TodoList>

          {dataStatus.error && <p>hubo un error.</p>}
          {(dataStatus.loading && !dataStatus.error) && <p>cargando...</p>}
          {/* {(!dataStatus.loading) && <p>crear tarea...</p>} */}


          {todosFiltered.map(todo => (
            <TodoItem
              key={todo.text}
              id={todo.text}
              text={todo.text}
              priority={todo.priority}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}

        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}


      </Box>


      

      <p className='text-dc' title="Click me..." onClick={() => openInNewTab('https://stackoverflow.com/users/10220740/ale-dc')}>


        <SiReact className='logofooter' />
        Ale DC Profile
        
        ➳
      </p>

    </React.Fragment>
  );
}

export { AppUI };
