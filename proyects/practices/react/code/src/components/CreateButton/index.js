import { useState } from "react";
import { CreateButtonStyled } from "./style.js";

export function CreateButton({ text, setOpenModalItem }){
  const onOpenModal = () => {
    setOpenModalItem(true);
  }

  return (
    <CreateButtonStyled
      onClick={onOpenModal}
    >
      {text}
    </CreateButtonStyled>
  );
}