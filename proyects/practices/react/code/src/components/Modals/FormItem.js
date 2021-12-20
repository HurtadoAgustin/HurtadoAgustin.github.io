import { useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { FormButtons } from "./FormButtons";
import { ColorSelector } from "./ColorSelector";

export function FormItem(){
  const {
    setOpenModalItem,
    addTodo,
    newTodo,
    setNewTodo
    //groups
 } = useContext(TodoContext);

  const onSubmit = e => {
    e.preventDefault();
    /* 
    const findGroup = groups.find(groupItem => groupItem.title === newTodo.group);
    console.log(findGroup); 
    */
    addTodo({
      text: newTodo.text,
      completed: newTodo.completed,
      group: newTodo.group
    });
  }

  const handleTextarea = e => {
    setNewTodo({ ...newTodo, text: e.target.value });
  }

  const handleButtonCompleted = () => {
    setNewTodo({ ...newTodo, completed: !newTodo.completed });
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
          value={newTodo.text}
          onChange={handleTextarea}
          className="ModalBox--text__input"
          title="Escribe tu nueva tarea"
          id="todo-text"
          required
        />
        <button
          type="button"
          className={`ModalBox--textButton ${newTodo.completed && 'ModalBox--textButton__active'}`}
          onClick={handleButtonCompleted}
        >
          √
        </button>
      </label>
      <ColorSelector
        selectedGroup={newTodo.group}
        setSelectedGroup={setNewTodo}
      />
      <FormButtons
        setOpenModal={setOpenModalItem}
      />
    </form>
  );
}