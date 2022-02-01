import React from "react";
import './TodoList.css';


function TodoList({children}){
    return (
        <section className="centradodc">
            <ul> {children} </ul>
        </section>
    );
}

export {TodoList};