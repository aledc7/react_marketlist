import React from "react";
import './CreateTodoButton.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import Button from '@mui/material/Button';


// const MySwal = withReactContent(Swal)


function CreateTodoButton(props) {

    const onClickButton = (msg) => {
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <Button onClick={onClickButton} variant="contained" color="warning" size="small" sx={{  mb: 5 }}>
            Agregar
        </Button>


    );
}

export { CreateTodoButton };