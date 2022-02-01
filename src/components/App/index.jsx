import React from 'react';
import { TodoProvider } from '../Context/TodoContext.jsx';
import { AppUI } from './AppUI.jsx';


function App() {
    return (

        // Al envolver al componente principal AppUI en las etiquetas TodoProvider me aseguro de que todo lo que
        // exporte en el TodoContext pueda llegar a cualquier parte de la Applicación.
        <TodoProvider>

            {/* este es el componente principal */}
            <AppUI /> 

        </TodoProvider>
    );
}

export { App };
