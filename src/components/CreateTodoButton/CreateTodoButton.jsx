import React from "react";
import './CreateTodoButton.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import Button from '@mui/material/Button';


const MySwal = withReactContent(Swal)


function CreateTodoButton(props) {

    const onClickButton = (msg) => {
        // Swal.fire({
        //     title: 'Login Form',
        //     html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        //     <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        //     confirmButtonText: 'Sign in',
        //     focusConfirm: false,
        //     preConfirm: () => {
        //         const login = Swal.getPopup().querySelector('#login').value
        //         const password = Swal.getPopup().querySelector('#password').value
        //         if (!login || !password) {
        //             Swal.showValidationMessage(`Please enter login and password`)
        //         }
        //         return { login: login, password: password }
        //     }
        // }).then((result) => {
        //     Swal.fire(`
        //         Login: ${result.value.login}
        //         Password: ${result.value.password}
        //     `.trim())
        // })




        props.setOpenModal(prevState => !prevState);

    }

    return (
        <Button onClick={onClickButton} variant="contained" color="info" size="small" align="right">
            Agregar
        </Button>


    );
}

export { CreateTodoButton };