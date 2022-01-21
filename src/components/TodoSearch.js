import React from "react";
import '../css/TodoSearch.css'

function TodoSearch(){
    
    // defino una constante y le gardo una arrow funcion
    // esta arrow funcion recive unas propiedades y luego las mete en el console.log
    const onSearchValueChange = (event)=>console.log(event.target.value);

    return (
        <>
            {/* este es un elemento con una clase, luego le pongo un icono html5 &#128270; */}
            <p className="Icon-search">&#128270;</p>

            {/* est es otro elemento con un evento onchange, que recibe la constante, que dentro tiene una arrow funcion */}
            <input className="TodoSearch" placeholder='Buscar Tarea' onChange={onSearchValueChange}/>
        </>
    );
}

export {TodoSearch};