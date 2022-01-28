import React from 'react';
import { useLocalStorage } from '../../customHooks/useLocalStorage.jsx';

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
    
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
        completed: false,
        text,
        key: text,
        });
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
                todosFiltered,
                openModal,
                setOpenModal,
            }}
        >

            {props.children}
        </TodoContext.Provider>
    );

}

export { TodoContext, TodoProvider };