import { useContext, useState } from "react";
import { TodoContext } from "../../GlobalContext";
import { GroupButton } from "../GroupButton";

export function ColorSelector() {
  const {
    todos,
    setOpenModalGroup,
 } = useContext(TodoContext);

  return (
    <label
      className="ModalBox--colors"
      htmlFor="todo-colors"  
    >
      <p className="ModalBox--colors__text">
        Elige un color:
      </p>
      <select
        className="ModalBox--colors__input"
        id="todo-colors"
      >
        {todos.map((item, index) => (
          <option>
            {index}
          </option>  
        ))}
      </select>
      <GroupButton 
          setOpenModalGroup={setOpenModalGroup}
        />
    </label>
  );
}