import React from 'react';
import '../Form/TodoForm.css';
import Button from '@mui/material/Button';



function TodoForm({
    addTodo, 
    setOpenModal, 
    newTodoValue, 
    setNewTodoValue, 
    isUpdate,
    idEditado
}) {


    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    // constante que llamo al dar click al botonn del modal para agregar o editar
    const onSubmit = (event) => {
        event.preventDefault();

        // funcion declarada en useTodos 
        addTodo(newTodoValue, isUpdate, idEditado);
        
        
        // cierro el modal
        setOpenModal(false);
    }


    return (
        <form onSubmit={onSubmit}>

            {isUpdate ? <p className='titleform'>Editar Item</p> : <p className='titleform'>Nuevo Item</p>}


            <textarea

                // si apreta enter graba el item
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

                placeholder='escriba Item..'

                // este onFocus selecciona el texto del input.
                onFocus={e => e.currentTarget.select()} 

                // este onFocus pone el cursor al final del input.
                // onFocus={
                //     function (e) {
                //         var val = e.target.value;
                //         e.target.value = '';
                //         e.target.value = val;
                //     }
                // }

            />


            <div className='TodoForm-buttonContainer'>


            <Button onClick={onCancel} type='button' variant="contained" color="error" sx={{ m: 0.1 }}>
                Cancel
            </Button>

                
                {/* Boton de adentro del modal para agregar editar */}
            <Button onClick={onSubmit} type='submit' variant="contained" color="success" sx={{ m: 0.1 }}>
                OK
            </Button>
                
            </div>

        </form>
    );
}


export { TodoForm };