import React from "react";
import './TodoCounter.css'

function TodoCounter({total, completed}) {
    return (
        <React.Fragment>
            <h2 className="TodoCounter">Completaste {completed} de {total} Tareas</h2> 

        </React.Fragment> 
        
    );
}

export { TodoCounter };