import { useContext } from "react";
import { TodoContext } from "../GlobalContext";
import "../css/Searcher.css";

export function Searcher(){
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      className="Searcher"
      type="text"
      placeholder="Buscar task"
      value={searchValue}
      onChange={e =>setSearchValue(e.target.value)}
    />
  );
}