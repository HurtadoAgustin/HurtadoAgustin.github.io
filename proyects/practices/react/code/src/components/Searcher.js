import { useContext } from "react";
import { TodoContext } from "../GlobalContext";
import "../css/Searcher.css";

export function Searcher(){
  const { 
    searchValue, 
    setSearchValue,
    filter, 
    setFilter
  } = useContext(TodoContext);

  const toggleFilterState = () => {
    switch (filter[0]) {
      case "black": setFilter(["green",{}]); break;
      case "green": setFilter(["false",{}]); break; 
      default: setFilter(["black",{}]);
    }
  }

  return (
    <div className="Searcher">
      <input
        className="Searcher--input"
        type="text"
        placeholder="Buscar task"
        value={searchValue}
        onChange={e =>setSearchValue(e.target.value)}
      />
      <button
        className={`Searcher--filter Searcher--filter__${filter[0]}`}
        onClick={toggleFilterState}
      >
        √
      </button>
    </div>
  );
}