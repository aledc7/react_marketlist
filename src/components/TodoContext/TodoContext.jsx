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
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    const todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    const toggleCompleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id == id);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    function deleteTodo(id) {
        const newTodos = todos.filter(todo => todo.id !== id)
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
                toggleCompleteTodo,
                deleteTodo,
                todosFiltered
            }}
        >

            {props.children}
        </TodoContext.Provider>
    );

}

export { TodoContext, TodoProvider };