import React from "react";
import '../css/TodoList.css'

function TodoList(props){
    return (

        // este es un elemento (si fuese un componente empezaría con mayúscula)
        <section>

            {/* este es otro elemento, que recibe las propiedades y usa el children (ver capitulo 4 min 11:10 - children -> min 13:55 ) */}
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};