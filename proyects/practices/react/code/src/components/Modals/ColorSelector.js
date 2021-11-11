import { useContext, useState } from "react";
import { TodoContext } from "../../GlobalContext";
import { GroupButton } from "../GroupButton/index.js";

export function ColorSelector({ selectedGroup, setSelectedGroup }) {
  const {
    groups,
    setOpenModalGroup,
 } = useContext(TodoContext);

  const onSelectGroup = (e) => {setSelectedGroup(e.target.value)};

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
        value={selectedGroup}
        onChange={onSelectGroup}
        required
      >
        <option
          value=""
          selected
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