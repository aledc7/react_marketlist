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
    const [idEditado, setIdEditado] = React.useState(false);


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




    // le paso isUpdate para ver si viene por edicion
    const addTodo = (text, isUpdate, idEditado) => {
        
        // valido que no venga vacio el input del nuevo item
        if (!text.trim()) {
            Swal.fire({
                title: 'Campo en blanco?',
                text: 'no escribiste nada...',
                width: '370',
            });
            return;
        }

        // si viene por update, actualizo el texto de ese registro
        if (isUpdate) {

            // clono el array de todos
            const newTodos = [...todos];

            // busco el indice que recibo en esta funcion para saber cual tengo que editar
            const todoIndex = todos.findIndex(todo => todo.id === idEditado);
            
            // reeplazo el texto por el nuevo que el usuario modifico
            newTodos[todoIndex].text = text;
        
            // pongo el mismo id que el usuario edito
            newTodos[todoIndex].id = idEditado;
        
            // guardo el array de todos
            saveTodos(newTodos)

        } 
        
        // Si no es UPDATE, entonces es INSERT,
        else {
            // clono el array de todos
            const newTodos = [...todos];
            
            // genero el id incremental
            const id = generateId();

            // valido que el Item no esté repetido
            for (let i = 0; i < newTodos.length; i++) {
                if (newTodos[i].text === text) {
                    Swal.fire({
                        title: 'Item Repetido!',
                        text: 'al parecer ya existe un Item con ese nombre...',
                        width: '370',
                    });
                    return;
                }
            }

            // creo el array de todos con el id nuevo y el texto que escribió el usuario.
            // la propiedad complete se la pongo en false, ya que recien crea el Item.
            newTodos.push({
                id: id,
                text,
                completed: false,
            });

            // borro cualquier valor en el input de agregar
            // asi la proxima aparece en blanco.
            setNewTodoValue('');

            saveTodos(newTodos);


        }

    };


    const toggleCompleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    function deleteTodo(id) {
        Swal.fire({
            title: 'Borrar Item?',
            text: "No podrás deshacer esta acción",
            icon: 'warning',
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrala!'
        }).then((result) => {
            if (result.isConfirmed) {
                const newTodos = todos.filter(todo => todo.id !== id)
                saveTodos(newTodos)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Item eliminado',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    }


    function editTodo(id, text, setOpenModal, setIsUpdate, setIdEditado) {

        // seteo el estado de que es un EDIT, para que lo reciba  'addTodo' y sepa que NO es un insert.
        setIsUpdate(true);
        
        // seteo el estado del Id que el usuario quiere editar para que lo use 'addTodo'.
        setIdEditado(id);

        // abro el modal de creacion de tareas
        setOpenModal(openModal => !openModal);

        
        // seteo el Item clickeada en el modal para que el usuario la edite.  
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
        idEditado,
        setIdEditado,
    }

}

export { useTodos };