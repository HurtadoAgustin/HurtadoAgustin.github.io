import { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue){
  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(()=>{ // API response simulation
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else parsedItem = JSON.parse(localStorageItem);
        
        setItem(parsedItem);
        setLoading(false);
      }catch(error){
        setError(error);
      }

    }, Math.random()*3000)
  });

  const saveItem = newList => {
    try{
      const stringList = JSON.stringify(newList);
      localStorage.setItem(itemName, stringList);
      setItem(newList);
    }catch(error){
      setError(error);
    }
  }
  return { item, saveItem, loading, error };
}