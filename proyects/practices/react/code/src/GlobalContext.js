import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
  const {
    item: todos,
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completed = todos.filter(todo => !!todo.completed).length;
  const total = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    const newValue = !newTodos[todoIndex].completed;
    newTodos[todoIndex].completed = newValue;
    saveTodos(newTodos);
  }

  const deleteTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  
  return(
    <TodoContext.Provider value={{
      total,
      completed,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };