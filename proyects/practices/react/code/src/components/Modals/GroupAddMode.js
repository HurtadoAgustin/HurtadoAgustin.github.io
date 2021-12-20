import { useState, useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { TodoItem } from "../TodoItem";

export function GroupAddMode(){
  const {
    formValues,
    setFormValues
  } = useContext(TodoContext);

  const [exampleValue, setExampleValue] = useState(false);

  const handleTitle = e => {
    setFormValues({ ...formValues, title: e.target.value});
  }
  const handleBgColor = e => {
    setFormValues({ ...formValues, bgColor: e.target.value});
  }
  const handleTxtColor = e => {
    setFormValues({ ...formValues, txtColor: e.target.value});
  }
  const handleCompletedColor = e => {
    setFormValues({ ...formValues, completedColor: e.target.value});
  }
  const handleExampleValue = () => setExampleValue(prevValue => !prevValue);

  return(
    <label
      className="a"
      htmlFor="a"
    >
      <TodoItem
        text="Texto de ejemplo"
        completed={exampleValue}
        onComplete={handleExampleValue}
        bgColor={formValues.bgColor}
        txtColor={formValues.txtColor}
        completedColor={formValues.completedColor}
      />
      <section>
        <span>Nombre del grupo:</span>
        <input
          type="text"
          value={formValues.title}
          onChange={handleTitle}
        />
      </section>
      <section>
        <span>Color del fondo:</span>
        <input
          type="color"
          value={formValues.bgColor}
          onChange={handleBgColor}
        />
      </section>
      <section>
        <span>Color de texto:</span>
        <input
          type="color"
          value={formValues.txtColor}
          onChange={handleTxtColor}
        />
      </section>
      <section>
        <span>Color de completado:</span>
        <input
          type="color"
          value={formValues.completedColor}
          onChange={handleCompletedColor}
        />
      </section>
    </label>
  );
}