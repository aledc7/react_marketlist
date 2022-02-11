import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function CreateTodoButton({ setOpenModal, setIsUpdate, setNewTodoValue }) {


    const onClickButton = () => {
        setIsUpdate(false);
        setOpenModal(prevState => !prevState);
        setNewTodoValue('');
    }

    return (


        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                mb: 5
            }}
        >
            <Button
            style={{
                //borderRadius: 35,
                backgroundColor: "#D4483D",
                //padding: "18px 36px",
                //fontSize: "18px"
            }}
                onClick={onClickButton}
                variant="contained"
                color="warning"
                size="small"
            >
                Agregar
            </Button>
        </Box>




    );
}

export { CreateTodoButton };