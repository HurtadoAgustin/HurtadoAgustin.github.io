import { useState, useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { TodoItem } from "../TodoItem";

export function GroupAddMode(){
  const {
    titleValue,
    setTitleValue,
    bgColorValue,
    setBgColorValue,
    txtColorValue,
    setTxtColorValue,
    completedColorValue,
    setCompletedColorValue
  } = useContext(TodoContext);

  const [exampleValue, setExampleValue] = useState(false);

  const onTitleChange = e => setTitleValue(e.target.value);
  const onBgColorChange = e => setBgColorValue(e.target.value);
  const onTxtColorChange = e => setTxtColorValue(e.target.value);
  const onCompletedColorChange = e => setCompletedColorValue(e.target.value);
  const onExampleClick = () => setExampleValue(prevValue => !prevValue);

  return(
    <label
      className="a"
      htmlFor="a"
    >
      <TodoItem
        text="Texto de ejemplo"
        completed={exampleValue}
        onComplete={onExampleClick}
        bgColor={bgColorValue}
        txtColor={txtColorValue}
        completedColor={completedColorValue}
      />
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
          value={bgColorValue}
          onChange={onBgColorChange}
        />
      </section>
      <section>
        <span>Color de texto:</span>
        <input
          type="color"
          value={txtColorValue}
          onChange={onTxtColorChange}
        />
      </section>
      <section>
        <span>Color de completado:</span>
        <input
          type="color"
          value={completedColorValue}
          onChange={onCompletedColorChange}
        />
      </section>
    </label>
  );
}