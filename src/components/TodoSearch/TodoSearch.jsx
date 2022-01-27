import React from "react";
import './TodoSearch.css'
import '../TodoList/TodoList.css'
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    

    return (
        <React.Fragment >
            <div className="centradodc">
                <input 
                    className="TodoSearch" 
                    placeholder='Buscar... 👀 &#128270;' 
                    onChange={onSearchValueChange}
                    value={searchValue}
                />
            </div>
        </React.Fragment>
    );
}

export {TodoSearch};