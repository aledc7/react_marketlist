import React from "react";
import '../css/TodoSearch.css'

function TodoSearch(){

    // creo una constante para setear el estado del componente 

    // useState hay que instanciarlo en un array de 2 elementos,
    // los elementos son 2, el 'value' y una 'funcion' que cambia este value.

    const [searchValue, setSearchValue] = React.useState('');
    

    // creo una constanten onSearchValueChange y le asigno una arrow funcion que reciba un evento
    // luego llamo a la funcion setSearchValue que es la funcion del estado que declaré arriba
    // a esta funcion le paso como parámetro lo que el usuario esté escribiendo 'event.target.value'

    // por último  en el input de busqueda esa funcion 'onSearchValueChange' la llamo usando el evento 'onChange'
    // tambien hay que asignarle el 'value' del estado creado arriba


    // finalmente puedo imprimir el value de ese estado en un h1.

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return (
        <>
            {/* este es un elemento con una clase, luego le pongo un icono html5 &#128270; */}
            <p className="Icon-search">&#128270;</p>


            <input 
                className="TodoSearch" 
                placeholder='Buscar Tarea' 
                onChange={onSearchValueChange}
                value={searchValue}
            />

            <h1>{searchValue}</h1>
        </>
    );
}

export {TodoSearch};