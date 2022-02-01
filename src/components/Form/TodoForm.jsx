import React from 'react';
import '../Form/TodoForm.css';
import Button from '@mui/material/Button';



function TodoForm({
    addTodo, 
    setOpenModal, 
    newTodoValue, 
    setNewTodoValue, 
    isUpdate
}) {


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

            {isUpdate ? <p className='titleform'>Editar Tarea</p> : <p className='titleform'>Nueva Tarea</p>}


            <textarea

                // si apreta enter graba la tarea
                onKeyPress={(ev) => {
                    console.log(`Tecla Apretada:  ${ev.key}`);
                    if (ev.key === 'Enter') {
                        { onSubmit(ev) }
                        ev.preventDefault();
                    }
                }}


                // para poner el foco en el input.
                autoFocus

                value={newTodoValue}
                onChange={onChange}

                placeholder='escriba Tarea..'

                // este onfocus selecciona el texto del input
                // onFocus={e => e.currentTarget.select()} 

                // este onfocus pone el cursor al final del input
                onFocus={
                    function (e) {
                        var val = e.target.value;
                        e.target.value = '';
                        e.target.value = val;
                    }
                }

            />


            <div className='TodoForm-buttonContainer'>

            {/* si NO es update muestro el boton de Cancelar */}
            {!isUpdate && 
                <Button onClick={onCancel} type='button' variant="contained" color="error" sx={{ m: 0.1 }}>
                    Cancel
                </Button>
            }
                
            <Button onClick={onSubmit} type='submit' variant="contained" color="success" sx={{ m: 0.1 }}>
                OK
            </Button>
                
            </div>

        </form>
    );
}


export { TodoForm };