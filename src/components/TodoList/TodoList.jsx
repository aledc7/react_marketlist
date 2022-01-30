import React from "react";
import './TodoList.css';


function TodoList(props){
    return (
        <div className="centradodc">
            <section>
                <ul> {props.children} </ul>
            </section>
        </div>
    );
}

export {TodoList};