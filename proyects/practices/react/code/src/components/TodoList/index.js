import React, { useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { TodoItem } from "../TodoItem";
import { TodoListStyled } from "./style.js";

export function TodoList(){
  const {
    error,
    loading,
    filteredTodos,
    completeTodo,
    deleteTodo,
    total
  } = useContext(TodoContext);

  return (
    <TodoListStyled error={error}>
      {error &&
        <p>
          Hubo un error en la carga de las tareas, por favor reinicie el navegador
        </p>
      }
      {loading &&
        <p>
          Cargando...
        </p>
      }
      {(!error && !loading && total===0) &&
        <p>
          Agrega una tarea con el<b> + </b>
        </p>
      }

      {filteredTodos.map(item => (
        <TodoItem
          key={item.text}
          text={item.text}
          completed={item.completed}
          bgColor={item.group.bgColor}
          txtColor={item.group.txtColor}
          completedColor={item.group.completedColor}
          onComplete={() => completeTodo(item.text)}
          onDelete={() => deleteTodo(item.text)}
        />
      ))}
    </TodoListStyled>
  );
};