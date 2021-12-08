import { useState } from "react";

export function useFilters( todos, searchValue ){ //add initialFilter
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [completedFilter, setCompletedFilter] = useState("false");
  const [groupFilter, setGroupFilter] = useState("Default");

  //filter with initialFilter, useEffect

  const changeFilters = ({
    completedNewFilter = completedFilter,
    groupNewFilter = groupFilter
  }) => {
    setCompletedFilter(completedNewFilter);
    setGroupFilter(groupNewFilter);

    /*     'COMPLETED' FILTER     */
    if (!searchValue.length >= 1) {
      if (completedNewFilter === "done") setFilteredTodos(todos.filter(todo => todo.completed));
      if (completedNewFilter === "todo") setFilteredTodos(todos.filter(todo => !todo.completed));
      if (completedNewFilter === "false") setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      }));
      if (completedNewFilter === "done") setFilteredTodos(todos.filter(todo => todo.completed));
      if (completedNewFilter === "todo") setFilteredTodos(todos.filter(todo => !todo.completed));;
    }
    /*     'GROUPS' FILTER     */

  }
  return {
    filteredTodos,
    changeFilters,
    completedFilter,
    groupFilter
  };
}