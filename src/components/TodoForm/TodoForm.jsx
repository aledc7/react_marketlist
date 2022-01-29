import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext.jsx';
import '../TodoForm/TodoForm.css';
import Button from '@mui/material/Button';



function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>escriba tarea...</label>

            <textarea
                value={newTodoValue}
                onChange={onChange}

                placeholder='escriba tarea a crear..' />

            <div className='TodoForm-buttonContainer'>

                <Button  onClick={onCancel} type='button' variant="contained" color="error">
                    Cancelar
                </Button>

                <Button onClick={onSubmit} type='submit' variant="contained" color="success">
                    Agregar
                </Button>






            </div>

        </form>
    );
}


export { TodoForm };