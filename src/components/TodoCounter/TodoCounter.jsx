import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoCounter.css'

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <h2 className="TodoCounter">Completaste {completedTodos} de {totalTodos} Tareas</h2> 

        </React.Fragment> 
        
    );
}

export { TodoCounter };