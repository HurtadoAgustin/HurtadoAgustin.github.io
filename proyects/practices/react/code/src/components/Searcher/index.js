import { useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { SearcherStyled } from "./style.js";

export function Searcher(){
  const {
    filters,
    setFilters,
  } = useContext(TodoContext);

  const handleSearch = e => {
    setFilters({...filters, search: e.target.value});
  }

  const handleFilterCompleted = () => {
    setFilters(prevValue => (
      {...filters, completed: !prevValue.completed}
  ))}

  const handleFilterGroup = () => {
    // setFilters()
    alert("grupo cambiado");
  }

  return (
    <SearcherStyled
      completed={filters.completed}
    >
      <input
        type="text"
        placeholder="Buscar task"
        value={filters.search}
        onChange={handleSearch}
      />
      <button
        id="filter--completed"
        onClick={handleFilterCompleted}
      >
        √
      </button>
      <button
        id="filter--group"
        onClick={handleFilterGroup}
      >
        *
      </button>
    </SearcherStyled>
  );
}