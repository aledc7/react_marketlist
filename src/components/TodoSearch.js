import React from "react";
import '../css/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return (
        <>
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