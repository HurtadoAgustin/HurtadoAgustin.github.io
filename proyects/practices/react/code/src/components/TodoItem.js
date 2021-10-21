import "../css/TodoItem.css";

export function TodoItem({ text, completed, onComplete, onDelete }){
  return (
    <li className="TodoItem">
      <button 
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </button>
      <span className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>
        {text}
      </span>
      <button
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </button>
    </li>
  );
}