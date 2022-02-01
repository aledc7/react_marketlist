import logo from '../../images/logo.svg';
import React from 'react';
import { TodoCounter } from '../Counter/TodoCounter.jsx';
import { TodoSearch } from '../Search/TodoSearch.jsx';
import { TodoList } from '../List/TodoList.jsx';
import { TodoItem } from '../Item/TodoItem.jsx';
import './App.css';
import { TodoContext } from '../Context/TodoContext.jsx';
import { Modal } from '../Modal/Modal.jsx';
import { CreateTodoButton } from "../CreateButton/CreateTodoButton";
import { TodoForm } from '../Form/TodoForm.jsx';
import Box from '@mui/material/Box';
import { SiReact, SiGithub } from "react-icons/si";




function AppUI() {

  const {
    dataStatus,
    todosFiltered,
    toggleCompleteTodo,
    deleteTodo,
    editTodo,
    openModal,
    setOpenModal,
    setIsUpdate,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    newTodoValue,
    setNewTodoValue,
    isUpdate,
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


        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />

        <div className='addbutton'>
          <CreateTodoButton
            setOpenModal={setOpenModal}
            setIsUpdate={setIsUpdate}
          />
        </div>




        <TodoList>

          {dataStatus.error && <p>hubo un error.</p>}
          {(dataStatus.loading && !dataStatus.error) && <p>cargando...</p>}
          {/* {(!dataStatus.loading) && <p>crear tarea...</p>} */}


          {todosFiltered.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              priority={todo.priority}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              onEdit={() => editTodo(todo.text, setOpenModal, setIsUpdate)}
            />
          ))}

        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm 
              addTodo={addTodo}
              setOpenModal={setOpenModal} 
              newTodoValue={newTodoValue} 
              setNewTodoValue={setNewTodoValue} 
              isUpdate={isUpdate}
            />
          </Modal>
        )}

          <p className='version'>Ver 1.4</p>
      </Box>


      

      <p className='text-dc' title="Click me..." onClick={() => openInNewTab('https://stackoverflow.com/users/10220740/ale-dc')}>
        <SiReact className='logofooter' />
        Ale DC Profile ➳
      </p>

      <p className='text-dc' title="Click me..." onClick={() => openInNewTab('https://github.com/aledc7/react_todo')}>
        <SiGithub className='github' />
        Clone on Github 
      </p>

    </React.Fragment>
  );
}

export { AppUI };
