import React from "react";
import '../css/TodoCounter.css'

function TodoCounter({total, completed}) {
    return (
        <>
            <h2 className="TodoCounter">Completaste {completed} de {total} Tareas</h2> 

        </> 
        
    );
}

export { TodoCounter };