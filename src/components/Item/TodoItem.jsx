import React from "react";
import './TodoItem.css'
import Grid from '@mui/material/Grid';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';


function TodoItem({
    completed,
    onComplete,
    text,
    onDelete,
    onEdit
}) {



    return (
        <React.Fragment>
            <li className="TodoItem">


                <span className={`Icon Icon-check ${completed ? 'Icon-check--active' : 'Icon-check--inactive'}`}
                    onClick={onComplete}>
                    {completed ? <CheckCircleIcon fontSize="large" /> : <HighlightOffIcon fontSize="large"/>}
                </span>

                
                <p onClick={onComplete} className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                    {text}
                </p>

                
                <span className="Icon Icon-delete" onClick={onDelete} >
                    <Grid item >
                        <DeleteForeverTwoToneIcon />
                    </Grid>
                </span>


                <span className="Icon Icon-edit" onClick={onEdit} >
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