import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useFilters } from "./hooks/useFilters";

const TodoContext = React.createContext();

function TodoProvider(props){
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
  
  const [openModalItem, setOpenModalItem] = useState(false);

  const completed = todos.filter(todo => !!todo.completed).length;
  const total = todos.length;

  const initialFilters = {
    search: "",
    completed: false, //cambiarlo a 3 opciones
    group: false,
  };

  const {
    filteredItems: filteredTodos,
    filters,
    setFilters,
  } = useFilters(initialFilters, todos);

  const addTodo = ({ text, completed, group }) => {
    const todoIndex = todos.find(todo => todo.text === text);
    if(todoIndex) {

      return alert("Hay dos iguales")
    };
    const newTodos = [...todos];
    newTodos.push({
      completed: completed,
      text: text,
      group: { //hacer que no haga falta todo este objeto
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

  const [newTodo, setNewTodo] = useState({
    text: "",
    completed: false,
    group: "Default"
  })

  /* GROUPS */
  const defaultColors = {
    title: "Default",
    bgColor: "#eeeeee",  //pasarlo a un archivo independiente
    txtColor: "#000000",
    completedColor: "#009900"
  };
  const [formValues, setFormValues] = useState(defaultColors);
  const {item: groups, saveItem: saveGroups} = useLocalStorage("TODOS_GROUPS", [defaultColors]);
  const [openModalGroup, setOpenModalGroup] = useState(false);

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
      addTodo,
      completeTodo,
      deleteTodo,
      loading,
      error, //cambiarlo por const status
      openModalItem,
      setOpenModalItem,
      openModalGroup,
      setOpenModalGroup,
      //Filters:
      filteredTodos,
      filters,
      setFilters,
      //Forms:
      newTodo,
      setNewTodo,
      //Groups:
      groups,
      addGroup,
      formValues,
      setFormValues
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };