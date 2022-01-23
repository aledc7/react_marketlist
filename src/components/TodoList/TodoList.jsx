import React from "react";
import './TodoList.css';
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";



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