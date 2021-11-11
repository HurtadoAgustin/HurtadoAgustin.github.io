import { useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { TitleStyled } from "./style.js";

export function Title(){
  const { completed, total } = useContext(TodoContext);

  return (
    <TitleStyled>
      <h1>TO-DO List</h1>
      <h2>
        Has completado <b>{completed}</b> de <b>{total}</b> tareas
      </h2>
    </TitleStyled>
  );
}