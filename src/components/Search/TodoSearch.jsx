import React from "react";
import './TodoSearch.css'
import '../List/TodoList.css'

function TodoSearch({searchValue,setSearchValue}){


    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    

    return (
        <>
            <div className="centradodc">
                <input 
                    className="TodoSearch" 
                    placeholder='filtrar... 👀 ' 
                    onChange={onSearchValueChange}
                    value={searchValue}
                />
            </div>
        </>
    );
}

export {TodoSearch};