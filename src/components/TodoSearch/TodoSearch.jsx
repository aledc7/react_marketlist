import React from "react";
import './TodoSearch.css'
import '../TodoList/TodoList.css'

function TodoSearch({searchValue,setSearchValue}){


    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    

    return (
        <React.Fragment >
            <div className="centradodc">
                <input 
                    className="TodoSearch" 
                    placeholder='filtrar... 👀 ' 
                    onChange={onSearchValueChange}
                    value={searchValue}
                />
            </div>
        </React.Fragment>
    );
}

export {TodoSearch};