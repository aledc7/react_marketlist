import React from "react";


function useLocalStorage(itemName, initalValue) {

    // creo un estado y le
    const [dataStatus,setDataStatus] = React.useState({loading:true, error:false});
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initalValue);

    React.useEffect(()=>{
        try {
            setTimeout(()=>{
                const localStorageItem = localStorage.getItem(itemName);
                let parseItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initalValue));
                    parseItem = [];
                } else {
                    parseItem = JSON.parse(localStorageItem);
                }
    
                setItem(parseItem);
                setDataStatus({...dataStatus,loading:false})
                //setLoading(false);
    
            }, 1000);
        } catch (error) {
            //setError(error);
            setDataStatus({...dataStatus,error:error})
        }
    }, []);

    // traemos desde local storage lo que recibamos como parametro en esta funcion
    

    


    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            //setError(error);
            setDataStatus({...dataStatus,error:error})
        }
        
    }

    return {
        item, 
        saveItem,
        dataStatus,
        setDataStatus,
    };


}

export { useLocalStorage };