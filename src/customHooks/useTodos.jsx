import React from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage.jsx';
import Swal from 'sweetalert2';


function useTodos() {
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
    const [isUpdate, setIsUpdate] = React.useState(false);

    // nuevo para editar
    const [dataEdit, setDataEdit] = React.useState("");

    // genera id numerico autoincremental desde el 1
    const generateId = () => {
        let id;
        if (todos.length > 0) {
            id = todos[todos.length - 1].id + 1;
        } else {
            id = 1
        }
        return id
    }


    // genera id Alfanumerico   kjncoiybweriuv
    const generateId_ = () => {
        let id = Math.random().toString(36).slice(2)
        return id
    }



    const addTodo = (text) => {

        // valido que no venga vacio el input de nueva tarea
        if (!text.trim()) {
            Swal.fire(
                'Campo en blanco?',
                'no escribiste nada...'
            );
            return;
        }
        const newTodos = [...todos];
        const id = generateId();

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
            id: id,
            text,
            completed: false,
        });

        // borro cualquier valor en el input de agregar
        // asi la proxima aparece en blanco.
        setNewTodoValue('');

        saveTodos(newTodos);
    };


    const toggleCompleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    function deleteTodo(id) {
        Swal.fire({
            title: 'Borrar Tarea?',
            text: "No podrás deshacer esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrala!'
        }).then((result) => {
            if (result.isConfirmed) {
                const newTodos = todos.filter(todo => todo.id !== id)
                saveTodos(newTodos)
                Swal.fire(
                    'Listo!',
                    'Tarea borrada.',
                    'success'
                )
            }
        })

    }

    const orderTodo = (num) => {
        const newTodos = [...todos]
        if (num === 1) {
            newTodos.sort((td1, td2) => {
                return (td1.priority < td2.priority) ? -1 : 1
            })
            saveTodos(newTodos)
        } else {
            newTodos.sort((td1, td2) => {
                return (td1.complete > td2.complete) ? -1 : 1
            })
            saveTodos(newTodos)
        }
    }



    function editTodo(id, text, setOpenModal, setIsUpdate) {
        setIsUpdate(true);

        // abro el modal de creacion de tareas
        setOpenModal(openModal => !openModal);

        // primero borro la tarea a editar
        const newTodos = todos.filter(todo => todo.id !== id)
        saveTodos(newTodos)

        // seteo la tarea clickeada en el nuevo modal
        setNewTodoValue(text);
    }




    return {
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
        isUpdate,
        setIsUpdate,
    }

}

export { useTodos };