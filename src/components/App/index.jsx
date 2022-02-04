import React from 'react';
import logo from '../../images/logo.svg';
import { useTodos } from '../../customHooks/useTodos.jsx';
import { TodoCounter } from '../Counter/TodoCounter.jsx';
import { TodoSearch } from '../Search/TodoSearch.jsx';
import { TodoList } from '../List/TodoList.jsx';
import { TodoItem } from '../Item/TodoItem.jsx';
import './App.css';
import Box from '@mui/material/Box';
import { TodoForm } from '../Form/TodoForm.jsx';
import { SiReact, SiGithub } from "react-icons/si";
import { CreateTodoButton } from "../CreateButton/CreateTodoButton";
import { Modal } from '../Modal/Modal.jsx';



function App() {

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
        idEditado, 
        setIdEditado,
    } = useTodos();


    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    return (
        <>
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


                <CreateTodoButton
                    setOpenModal={setOpenModal}
                    setIsUpdate={setIsUpdate}
                    setNewTodoValue={setNewTodoValue}
                    
                />





                <TodoList>

                    {dataStatus.error && <p>hubo un error.</p>}
                    {(dataStatus.loading && !dataStatus.error) && <p>cargando...</p>}
                    {/* {(!dataStatus.loading) && <p>crear tarea...</p>} */}


                    {todosFiltered.map(todo => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            priority={todo.priority}
                            completed={todo.completed}
                            onComplete={() => toggleCompleteTodo(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                            
                            onEdit={() => editTodo(todo.id, todo.text,  setOpenModal, setIsUpdate, setIdEditado)}
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
                            idEditado={idEditado}
                        />
                    </Modal>
                )}

                <p className='version'>Ver 1.6</p>
            </Box>




            <p className='text-dc' title="Click me..." onClick={() => openInNewTab('https://stackoverflow.com/users/10220740/ale-dc')}>
                <SiReact className='logofooter' />
                Ale DC Profile ➳
            </p>

            <p className='text-dc' title="Click me..." onClick={() => openInNewTab('https://github.com/aledc7/react_todo')}>
                <SiGithub className='github' />
                Clone on Github
            </p>

        </>
    );
}

export { App };
