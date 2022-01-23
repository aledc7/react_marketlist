import React from "react";
import '../css/TodoSearch.css'
import '../css/TodoList.css'

function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    

    return (
        < >
            <div className="centradodc">
                <input 
                    className="TodoSearch" 
                    placeholder='Buscar... 👀 &#128270;' 
                    onChange={onSearchValueChange}
                    value={searchValue}
                />
            </div>
        </>
    );
}

export {TodoSearch};