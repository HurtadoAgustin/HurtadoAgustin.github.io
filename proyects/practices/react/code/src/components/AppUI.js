import { useContext } from "react";
import { TodoContext } from "../GlobalContext";
import { Title } from "./Title";
import { Searcher } from "./Searcher";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateButton } from "./CreateButton";
import { ModalItem } from "./Modals/ModalItem";
import { FormItem } from "./Modals/FormItem";
import { ModalGroup } from "./Modals/ModalGroup";
import { FormGroup } from "./Modals/FormGroup";
import "../css/App.css";

export function AppUI(){
  const {
    error,
    loading,
    filteredTodos,
    completeTodo,
    deleteTodo,
    total,
    openModalItem,
    setOpenModalItem,
    openModalGroup,
    setOpenModalGroup,
  } = useContext(TodoContext);

  return (
    <main>
      <Title />
      <Searcher />
      <TodoList>
        {error && 
          <p className="TodoList--error">
            Hubo un error en la carga de las tareas, por favor reinicie el navegador
          </p>
        }
        {loading && <p className="TodoList--loading">Cargando...</p>}
        {(!error && !loading && total===0) && 
          <p className="TodoList--empty">
            Agrega una tarea con el<b> + </b>
          </p>
        }

        {filteredTodos.map(item => (
          <TodoItem 
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={() => completeTodo(item.text)}
            onDelete={() => deleteTodo(item.text)}
          />
        ))}
      </TodoList>
      {!!openModalItem && (
        <ModalItem>
          <FormItem />
        </ModalItem>
      )}
      {!!openModalGroup && (
        <ModalGroup>
          <FormGroup />
        </ModalGroup>
      )}
      {! (openModalItem || openModalGroup) && (
        <CreateButton 
          text="+"
          setOpenModalItem={setOpenModalItem}
        />
      )}
    </main>
  )
}