import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoCounter.css'
import Typography from '@mui/material/Typography';

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom color="white" textAlign='center'>
            Completaste {completedTodos} de {totalTodos} Tareas
            </Typography>
        </React.Fragment> 
        
    );
}

export { TodoCounter };