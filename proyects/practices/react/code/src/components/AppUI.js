import { useContext } from "react";
import { TodoContext } from "../GlobalContext";
import { Title } from "./Title";
import { Searcher } from "./Searcher";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateButton } from "./CreateButton";
import { ButtonModal } from "./ButtonModal";
import "../css/App.css";

export function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    total,
    openModal,
    setOpenModal
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
        {(!error && !loading && total==0) && 
          <p className="TodoList--empty">
            Agrega una tarea con el<b> + </b>
          </p>
        }

        {searchedTodos.map(item => (
          <TodoItem 
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={() => completeTodo(item.text)}
            onDelete={() => deleteTodo(item.text)}
          />
        ))}
      </TodoList>
      {!!openModal && 
        <ButtonModal>
          <p>aaaaaaaa</p>
        </ButtonModal>
      }
      <CreateButton 
        setOpenModal={setOpenModal}
      />
    </main>
  )
}