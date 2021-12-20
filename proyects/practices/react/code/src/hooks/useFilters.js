import { useState, useEffect } from "react";

export function useFilters( initialValue, items ){
  const [filters, setFilters] = useState( initialValue );
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    let newItems = [];
    if(filters.search.length >= 1){
      newItems = items.filter(item => {
        const itemText = item.text;
        const searchText = filters.search;
        return itemText.includes(searchText);
      });
    } else {
      newItems = items;
    }

    (filters.completed && newItems.length >= 1)
    ? newItems = newItems.filter(item => item.completed)
    : newItems = newItems.filter(item => !item.completed);
    
    /*     'GROUPS' FILTER     */

    setFilteredItems(newItems);
  },[filters, items]);

  return {
    filters,
    setFilters,
    filteredItems
  };
};