import { useState } from "react";
import "../css/CreateButton.css";

export function GroupButton({ openModalGroup, setOpenModalGroup }){
  const onOpenModalGroup = () => {
    setOpenModalGroup(prevState => !prevState);
  }

  return (
    <button
      type="button"
      className="ModalBox--colors__button"
      onClick={onOpenModalGroup}
    >
      Configurar grupos
    </button>
  );
}