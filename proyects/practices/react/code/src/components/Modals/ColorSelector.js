import React, { useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { GroupButton } from "../GroupButton/index.js";

export function ColorSelector() {
  const {
    groups,
    setOpenModalGroup,
    newTodo,
    setNewTodo,
 } = useContext(TodoContext);

  const handleSelectGroup = e => {
    setNewTodo({ ...newTodo, group: e.target.value })
  }

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
        value={newTodo.group}
        onChange={handleSelectGroup}
        required
      >
        <option
          value=""
          defaultValue
          hidden
        >
          Color
        </option>
        {groups.map(groupItem => (
          <option
            key={groupItem.title}
            value={groupItem.title}
          >
            {groupItem.title}
          </option>
        ))}
      </select>
      <GroupButton
          setOpenModalGroup={setOpenModalGroup}
        />
    </label>
  );
}