import React from "react";
import './TodoCounter.css'
import Typography from '@mui/material/Typography';

function TodoCounter({totalTodos, completedTodos}) {

    return (
        <>
            <Typography variant="h5" gutterBottom color="white" textAlign='center'>
            tienes {completedTodos} de {totalTodos} productos...
            </Typography>
        </> 
        
    );
}

export { TodoCounter };