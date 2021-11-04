import { useState } from "react";
import "../css/CreateButton.css";

export function CreateButton({ text, setOpenModalItem }){
  const onOpenModal = () => {
    setOpenModalItem(true);
  }

  return (
    <button
      className="CreateButton"
      onClick={onOpenModal}
    >
      {text}
    </button>
  );
}