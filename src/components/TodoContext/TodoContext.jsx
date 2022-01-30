import React from 'react';
import { useLocalStorage } from '../../customHooks/useLocalStorage.jsx';
import Swal from 'sweetalert2';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        dataStatus,
    } = useLocalStorage('TODOS_V1', []);


    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    const todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const [newTodoValue, setNewTodoValue] = React.useState('');
    



    const addTodo = (text) => {

        // valido que no venga vacio el input de nueva tarea
        if (!text.trim()) {
            Swal.fire(
                'Campo en blanco?',
                'al parecer no escribió ningúna Tarea...'
            );
            return;
        }
        const newTodos = [...todos];

        // valido que la tarea no esté repetida
        for (let i = 0; i < newTodos.length; i++) {
            if (newTodos[i].text === text) {
                Swal.fire(
                    'Tarea Repetida!',
                    'al parecer ya existe una Tarea con ese nombre...'
                );
                return;
            }
        }
        newTodos.push({
        completed: false,
        text,
        key: text,
        });

        // borro cualquier valor en el input de agregar
        // asi la proxima aparece en blanco.
        setNewTodoValue('');

        saveTodos(newTodos);
    };
    
    
    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    function deleteTodo(text) {
        const newTodos = todos.filter(todo => todo.text !== text)
        saveTodos(newTodos)
    }

    

    function editTodo(text, setOpenModal) {

        // primero borro la tarea a editar
        const newTodos = todos.filter(todo => todo.text !== text)
        saveTodos(newTodos)


        // abro el modal de creacion de tareas
        setOpenModal(openModal => !openModal);
        
        // seteo la tarea clickeada en el nuevo modal
        setNewTodoValue(text);
    }

    


    return (
        // Aca va hacia el componente principal
        <TodoContext.Provider
            value={{
                dataStatus,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                addTodo,
                toggleCompleteTodo,
                deleteTodo,
                editTodo,
                todosFiltered,
                openModal,
                setOpenModal,
                newTodoValue,
                setNewTodoValue,
            }}
        >

            {props.children}
        </TodoContext.Provider>
    );

}

export { TodoContext, TodoProvider };