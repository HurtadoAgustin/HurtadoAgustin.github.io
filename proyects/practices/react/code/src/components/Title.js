import { useContext } from "react";
import { TodoContext } from "../GlobalContext";
import "../css/Title.css"

export function Title(){
  const { completed, total } = useContext(TodoContext);

  return (
    <div className="Title">
      <h1>TO-DO List</h1>
      <h2 className="Counter">
        Has completado <b>{completed}</b> de <b>{total}</b> tareas
      </h2>
    </div>
  );
}