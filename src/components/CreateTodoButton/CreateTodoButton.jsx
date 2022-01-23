import React from "react";
import './CreateTodoButton.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal)


function CreateTodoButton(props) {

    // defino una constante y le guardo una arrow funcion que recibe unas propiedades que luego la funcion lanza en un alert
    const onClickButton = (msg) => {
        // MySwal.fire({
        //     title: <p>Hello World</p>,
        //     footer: 'Copyright 2018',
        //     didOpen: () => {
        //         MySwal.clickConfirm()
        //     }
        // }).then(() => {
        //     return MySwal.fire(<p>{msg}</p>)
        // })

        MySwal.fire({
            title: "¿Crear nueva Tarea?",
            // background: "#000",
            showCancelButton: true,
            confirmButtonColor: "#31b904",
            cancelButtonColor: "#d30404",
            confirmButtonText: "SÍ",
            cancelButtonText: "NO",
            footer: '𝓓𝓒 Software Factory'
        }).then((result) => {
            if (!!result.value) {
                return MySwal.fire(<p>{msg}</p>)
            }
        })

    }

    return (



        // este es un elemento que tiene el evento onclick y ejecuta la funcion creada arriba y se le pasa como propiedad un texto.
        // tiene que estar envuelta en una arrow funcion porque sino se ejecuta al leer el código en vez de ejecutarse con el evento onclick
        <button className="CreateTodoButton" onClick={() => onClickButton('Tarea Creada !')}>
            &#10133;
        </button>
    );
}

export { CreateTodoButton };