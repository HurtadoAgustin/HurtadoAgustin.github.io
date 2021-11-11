import { useContext, useState } from "react";
import { TodoContext } from "../../GlobalContext";
import { FormButtons } from "./FormButtons";
import { ColorSelector } from "./ColorSelector";

export function FormItem(){
  const {
    setOpenModalItem,
    addTodo,
    groups
 } = useContext(TodoContext);

  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoCompleted, setNewTodoCompleted] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("Default");

  const onSubmit = event => {
    event.preventDefault();
    const findGroup = groups.find(groupItem => groupItem.title === selectedGroup);
    console.log(findGroup);
    addTodo({
      text: newTodoText,
      completed: newTodoCompleted,
      group: findGroup
    });
  }

  const onChange = event => {
    setNewTodoText(event.target.value)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="ModalBox"
    >
      <section className="ModalBox--title">
        <span>
          Agrega una tarea!
        </span>
      </section>
      <label
        className="ModalBox--text"
        htmlFor="todo-text"
      >
        <textarea
          value={newTodoText}
          onChange={onChange}
          className="ModalBox--text__input"
          title="Escribe tu nueva tarea"
          id="todo-text"
          required
        />
        <button
          type="button"
          className={`ModalBox--textButton ${newTodoCompleted && 'ModalBox--textButton__active'}`}
          onClick={() => setNewTodoCompleted(prevValue => !prevValue)}
        >
          √
        </button>
      </label>
      <ColorSelector
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <FormButtons
        setOpenModal={setOpenModalItem}
      />
    </form>
  );
}