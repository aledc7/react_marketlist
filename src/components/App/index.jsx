import React from 'react';
import { TodoProvider } from '../TodoContext/TodoContext.jsx';
import { AppUI } from './AppUI.jsx';


function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export { App };
