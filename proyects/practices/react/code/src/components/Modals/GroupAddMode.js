import { useState, useContext } from "react";
import { TodoContext } from "../../GlobalContext";

export function GroupAddMode(){
  const { 
    addGroup,
    titleValue,
    setTitleValue,
    bgcolorValue,
    setBgcolorValue,
    txtcolorValue,
    setTxtcolorValue
  } = useContext(TodoContext);

  const onTitleChange = e => setTitleValue(e.target.value);
  const onBgcolorChange = e => setBgcolorValue(e.target.value);
  const onTxtcolorChange = e => setTxtcolorValue(e.target.value);

  return(
    <label
      className="a"
      htmlFor="a"
    >
      <section 
        className="TodoItem"
        style={`background-color:${bgcolorValue};`}
      >
        <button 
          className="Icon Icon-check"
        >
          √
        </button>
        <span 
          className="TodoItem-p"
          color={txtcolorValue}
        >
          Texto de ejemplo
        </span>
        <button
          type="button"
          className="Icon Icon-delete"
        >
          X
        </button>
      </section>
      <section>
        <span>Nombre del grupo:</span>
        <input
          type="text"
          value={titleValue}
          onChange={onTitleChange}
        />
      </section>
      <section>
        <span>Color del fondo:</span>
        <input
          type="color"
          value={bgcolorValue}
          onChange={onBgcolorChange}
        />
      </section>
      <section>
        <span>Color de texto:</span>
        <input
          type="color"
          value={txtcolorValue}
          onChange={onTxtcolorChange}
        />
      </section>
    </label>
  );
}