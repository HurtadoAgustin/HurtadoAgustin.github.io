import { ItemStyled } from "./style.js";

export function TodoItem({
  text,
  completed,
  onComplete,
  onDelete,
  bgColor,
  txtColor,
  completedColor
}){
  return (
    <ItemStyled
      completed={completed}
      bgColor={bgColor}
      txtColor={txtColor}
      completedColor={completedColor}
    >
      <button
        type="button"
        onClick={onComplete}
      >
        √
      </button>
      <span>
        {text}
      </span>
      <button
        type="button"
        onClick={onDelete}
      >
        X
      </button>
    </ItemStyled>
  );
}