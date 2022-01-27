import React from "react";
import './TodoItem.css'

function TodoItem(props) {



    return (
        <React.Fragment>
            <li className="TodoItem">

                {/* en este caso el operador && se usa como si fuese un if.
                si prop.completed tiene datos, entonces dibuja Icon-check--active */}
                
                <span className={`Icon Icon-check ${props.completed ? 'Icon-check--active': 'Icon-check--inactive'}`} 
                

                onClick={props.onComplete}>
                    {/* ⧅ ❐  √ ⚛︎  ☒  ☑︎  */}
                    {props.completed ? '☑︎' : '☒' }
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    {props.text}
                </p>


                <span className="Icon Icon-delete" onClick={props.onDelete} >
                    🚮
                </span>
            </li>
            {/* <li>
                <p>Tarea: {props.text}</p>
            </li>
            <li>
                <p>Prioridad: {props.priority}</p>
            </li> */}

            <br />
        </React.Fragment>
    );
}

export { TodoItem };