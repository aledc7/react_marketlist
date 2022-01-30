import React from "react";


function useLocalStorage(itemName, initalValue) {

    const [dataStatus,setDataStatus] = React.useState({loading:true, error:false});
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

            }, 1);
        } catch (error) {
            setDataStatus({...dataStatus,error:error})
        }
    }, []);


    

    


    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
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