import React from "react";
import Button from '@mui/material/Button';
import { TodoContext } from '../TodoContext/TodoContext.jsx';



function CreateTodoButton(props) {

    const { setIsUpdate } = React.useContext(TodoContext);

    const onClickButton = () => {
        setIsUpdate(false);
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <Button onClick={onClickButton} variant="contained" color="warning" size="small" sx={{  mb: 5 }}>
            Agregar
        </Button>
    );
}

export { CreateTodoButton };