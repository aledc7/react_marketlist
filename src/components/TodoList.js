import React from "react";
import '../css/TodoList.css';
import { CreateTodoButton } from './CreateTodoButton';


function TodoList(props){
    return (
        <div className="centradodc">
            <section>
                <ul> {props.children} </ul>
            </section>
                <CreateTodoButton/>
        </div>
    );
}

export {TodoList};