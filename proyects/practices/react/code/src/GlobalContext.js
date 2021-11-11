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
  const [openModalItem, setOpenModalItem] = useState(false); //true true true
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

  const addTodo = ({ text, completed, group }) => {
    const todoIndex = todos.find(todo => todo.text === text);
    if(todoIndex) {

      return alert("Hay dos iguales")
    };
    const newTodos = [...todos];
    newTodos.push({
      completed: completed,
      text: text,
      group: {
        title: group.title,
        bgColor: group.bgColor,
        txtColor: group.txtColor,
        completedColor: group.completedColor
      }
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
  const defaultColors = {
    title: "Default",
    bgColor: "#eeeeee",
    txtColor: "#000000",
    completedColor: "#009900"
  };
  const {item: groups, saveItem: saveGroups} = useLocalStorage("TODOS_GROUPS", [defaultColors]);
  const [openModalGroup, setOpenModalGroup] = useState(false);

  const [titleValue, setTitleValue] = useState('');
  const [bgColorValue, setBgColorValue] = useState('#ffffff');
  const [txtColorValue, setTxtColorValue] = useState("#000000");
  const [completedColorValue, setCompletedColorValue] = useState("#00ff00");

  const addGroup = ({ title, bgColor, txtColor, completedColor }) => {
    const isGroup = groups.find(group => group.title === title);
    if(isGroup) {
      //TODO
      return alert("Hay dos iguales");
    };
    const newGroups = [...groups];
    newGroups.push({
      title: title,
      bgColor: bgColor,
      txtColor: txtColor,
      completedColor: completedColor
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
      loading,
      error,
      openModalItem,
      setOpenModalItem,
      openModalGroup,
      setOpenModalGroup,
      filter,
      //Groups:
      groups,
      addGroup,
      setFilter,
      titleValue,
      setTitleValue,
      bgColorValue,
      setBgColorValue,
      txtColorValue,
      setTxtColorValue,
      completedColorValue,
      setCompletedColorValue
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };