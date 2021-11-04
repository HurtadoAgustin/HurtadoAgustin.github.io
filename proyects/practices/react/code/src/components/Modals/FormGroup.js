import { useContext, useState } from "react";
import { TodoContext } from "../../GlobalContext";
import { FormButtons } from "./FormButtons";
import { GroupAddMode } from "./GroupAddMode";
import { GroupEditMode } from "./GroupEditMode";

export function FormGroup(){
  const {
    setOpenModalGroup,
    setFilter,
    titleValue,
    setTitleValue,
    bgcolorValue,
    setBgcolorValue,
    txtcolorValue,
    setTxtcolorValue
  } = useContext(TodoContext);

  const [mode, setMode] = useState(true);

  const onChangeMode = () => {
    setMode(prevValue => !prevValue);
  }

  const onSubmit = () => {
    console.log("submit")
  }

  return (
    <form
      onSubmit={onSubmit} 
      className="ModalBox"
    >
      <section className="ModalBox--title">
        <span>
          Configuracion de grupos
        </span>
      </section>
      <label>
        <span>MODO:</span>
        <button
          type="button"
          onClick={onChangeMode}
        >
          {!!mode ? "Agregar" : "Editar"}
        </button>
      </label>
      {!!mode 
        ? <GroupAddMode />
        : <GroupEditMode />
      }
      <FormButtons 
        setOpenModal={setOpenModalGroup}
      />
    </form>
  );
}