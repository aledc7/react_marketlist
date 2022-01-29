import React from "react";
import './TodoItem.css'
import Grid from '@mui/material/Grid';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function TodoItem(props) {



    return (
        <React.Fragment>
            <li className="TodoItem">

                {/* en este caso el operador && se usa como si fuese un if.
                si prop.completed tiene datos, entonces dibuja Icon-check--active */}

                <span className={`Icon Icon-check ${props.completed ? 'Icon-check--active' : 'Icon-check--inactive'}`}


                    onClick={props.onComplete}>

                    {/* {props.completed ? '☑︎' : '☒'} */}

                    {props.completed ? <CheckCircleIcon fontSize="large" /> : <HighlightOffIcon fontSize="large"/>}
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    {props.text}
                </p>





                <span className="Icon Icon-delete" onClick={props.onDelete} >
                    <Grid item >
                        <DeleteForeverTwoToneIcon />
                    </Grid>
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