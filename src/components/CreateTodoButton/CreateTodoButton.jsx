import React from "react";
import './CreateTodoButton.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal)


function CreateTodoButton(props) {

    const onClickButton = (msg) => {

        props.setOpenModal(prevState => !prevState);

    }

    return (
        <button className="CreateTodoButton" onClick={onClickButton}>
            &#10133;
        </button>
    );
}

export { CreateTodoButton };