import React from "react";
import './TodoItem.css'
import Grid from '@mui/material/Grid';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';


function TodoItem(props) {



    return (
        <React.Fragment>
            <li className="TodoItem">


                <span className={`Icon Icon-check ${props.completed ? 'Icon-check--active' : 'Icon-check--inactive'}`}
                    onClick={props.onComplete}>
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


                <span className="Icon Icon-edit" onClick={props.onEdit} >
                    <Grid>
                        <EditIcon/>
                    </Grid>
                </span>
            </li>


            <br />
        </React.Fragment>
    );
}

export { TodoItem };