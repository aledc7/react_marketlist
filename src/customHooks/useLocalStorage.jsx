import React from "react";


function useLocalStorage(itemName, initalValue) {

    // traemos desde local storage lo que recibamos como parametro en esta funcion
    const localStorageItem = localStorage.getItem(itemName);

    let parseItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initalValue));
        parseItem = [];
    } else {
        parseItem = JSON.parse(localStorageItem);
    }


    const [item, setItem] = React.useState(parseItem);


    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    }

    return [
        item, saveItem
    ];


}

export { useLocalStorage };