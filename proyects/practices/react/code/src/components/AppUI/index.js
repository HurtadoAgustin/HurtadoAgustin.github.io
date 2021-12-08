import { useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { Title } from "../Title";
import { Searcher } from "../Searcher";
import { TodoList } from "../TodoList";
import { CreateButton } from "../CreateButton";
import { ModalItem } from "../Modals/ModalItem";
import { FormItem } from "../Modals/FormItem";
import { ModalGroup } from "../Modals/ModalGroup";
import { FormGroup } from "../Modals/FormGroup";
//ADD CONFIGURATION
import "./style.css";

export function AppUI(){
  const {
    openModalItem,
    setOpenModalItem,
    openModalGroup,
  } = useContext(TodoContext);

  return (
    <main>
      <Title />
      <Searcher />
      <TodoList/>

      {/* MODALS */}
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