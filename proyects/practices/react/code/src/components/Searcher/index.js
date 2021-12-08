import { useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { SearcherStyled } from "./style.js";

export function Searcher(){
  const {
    searchValue,
    setSearchValue,
    completedFilter,
    changeFilters
  } = useContext(TodoContext);

  const toggleFilterCompletedState = () => {
    switch (completedFilter) {
      case "todo": changeFilters({completedNewFilter: "done"}); break;
      case "done": changeFilters({completedNewFilter: "false"}); break;
      case "false": changeFilters({completedNewFilter: "todo"}); break;
    }
  }
  const toggleFilterGroupState = () => {
    changeFilters();
  }

  return (
    <SearcherStyled
      completed={completedFilter}
    >
      <input
        type="text"
        placeholder="Buscar task"
        value={searchValue}
        onChange={e =>setSearchValue(e.target.value)}
      />
      <button
        id="filter--completed"
        onClick={toggleFilterCompletedState}
      >
        √
      </button>
      <button
        id="filter--group"
        onClick={toggleFilterGroupState}
      >
        *
      </button>
    </SearcherStyled>
  );
}