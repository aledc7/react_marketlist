import React from "react";
import '../css/CreateTodoButton.css'

function CreateTodoButton(props){

    // defino una constante y le guardo una arrow funcion que recibe unas propiedades que luego la funcion lanza en un alert
    const onClickButton = (msg) =>{
        alert(msg);
    }

    return (

        // este es un elemento que tiene el evento onclick y ejecuta la funcion creada arriba y se le pasa como propiedad un texto.
        // tiene que estar envuelta en una arrow funcion porque sino se ejecuta al leer el código en vez de ejecutarse con el evento onclick
        <button className="CreateTodoButton" onClick={()=>onClickButton('create todo boton, cambiar')}>
            &#10133;
        </button>
    );
}

export {CreateTodoButton};