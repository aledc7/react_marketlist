import React from "react";
import Button from '@mui/material/Button';



function CreateTodoButton({setOpenModal,setIsUpdate}) {


    const onClickButton = () => {
        setIsUpdate(false);
        setOpenModal(prevState => !prevState);
    }

    return (
        <Button onClick={onClickButton} variant="contained" color="warning" size="small" sx={{  mb: 5 }}>
            Agregar
        </Button>
    );
}

export { CreateTodoButton };