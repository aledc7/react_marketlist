import React from "react";

// esto es un componente definir cómo se va a mostrar el array
function TodoItem(props){
    return (
        <>
            <li>
                <p>id: {props.id}</p>
            </li>
            <li>
                <p>Tarea: {props.text}</p>
            </li>
            <li>
                <p>Prioridad: {props.priority}</p>
            </li>

            <br/>
        </>
    );
}

export {TodoItem};