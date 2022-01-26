import React from "react";
import './CreateTodoButton.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal)


function CreateTodoButton(props) {

    const onClickButton = (msg) => {

        MySwal.fire({
            title: "¿Crear nueva Tarea?",
            // background: "#000",
            showCancelButton: true,
            confirmButtonColor: "#31b904",
            cancelButtonColor: "#d30404",
            confirmButtonText: "SÍ",
            cancelButtonText: "NO",
            footer: 'DC Software Factory'
        }).then((result) => {
            if (!!result.value) {
                return MySwal.fire(<p>{msg}</p>)
            }
        })

    }

    return (
        <button className="CreateTodoButton" onClick={() => onClickButton('Tarea Creada !')}>
            &#10133;
        </button>
    );
}

export { CreateTodoButton };