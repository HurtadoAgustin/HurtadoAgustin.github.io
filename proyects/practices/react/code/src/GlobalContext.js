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

  const {item: groups, saveItem: saveGroups} = useLocalStorage("TODOS_GROUPS", []);
  
  const [searchValue, setSearchValue] = useState("");
  const [openModalItem, setOpenModalItem] = useState(false); //true true true
  const [openModalGroup, setOpenModalGroup] = useState(false);
  const [filter, setFilter] = useState(["false",{}]);

  const completed = todos.filter(todo => !!todo.completed).length;
  const total = todos.length;

  let filteredTodos = [];
  if (!searchValue.length >= 1){
    switch (filter[0]) {
      case "green": filteredTodos = todos.filter(todo => todo.completed); break; 
      case "black": filteredTodos = todos.filter(todo => !todo.completed); break;
      default: filteredTodos = todos; 
    }
  } else {
    filteredTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
    if(filter[0] === "green") filteredTodos = filteredTodos.filter(todo => todo.completed)
    if(filter[0] === "black") filteredTodos = filteredTodos.filter(todo => !todo.completed)
  }

  const addTodo = ( text, completed ) => {
    const todoIndex = todos.find(todo => todo.text === text);
    if(todoIndex) {
      
      return alert("Hay dos iguales")
    };
    const newTodos = [...todos];
    newTodos.push({
      completed: completed,
      text: text
    });
    saveTodos(newTodos);
    setOpenModalItem(false);
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

  /* GROUPS */
  
  const [titleValue, setTitleValue] = useState('');
  const [bgcolorValue, setBgcolorValue] = useState('#ffffff');
  const [txtcolorValue, setTxtcolorValue] = useState("#000000");

  const addGroup = ({ title, bgcolor, txtcolor }) => {
    const isGroup = groups.find(group => group.title === title);
    if(isGroup) {

      return alert("Hay dos iguales")
    };
    const newGroups = [...groups];
    newGroups.push({
      title: title,
      bgcolor: bgcolor,
      txtcolor: txtcolor
    });
    saveGroups(newGroups);
    setOpenModalGroup(false);
  }
  
  return(
    <TodoContext.Provider value={{
      todos,
      saveTodos,
      total,
      completed,
      searchValue,
      setSearchValue,
      filteredTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      addGroup,
      loading,
      error,
      openModalItem,
      setOpenModalItem,
      openModalGroup,
      setOpenModalGroup,
      filter,
      //Groups:
      setFilter,
      titleValue,
      setTitleValue,
      bgcolorValue,
      setBgcolorValue,
      txtcolorValue,
      setTxtcolorValue
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };