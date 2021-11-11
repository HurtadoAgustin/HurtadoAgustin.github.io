import { useContext } from "react";
import { TodoContext } from "../../GlobalContext";
import { SearcherStyled } from "./style.js";

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
    <SearcherStyled filter={filter[0]}>
      <input
        type="text"
        placeholder="Buscar task"
        value={searchValue}
        onChange={e =>setSearchValue(e.target.value)}
      />
      <button
        onClick={toggleFilterState}
      >
        √
      </button>
    </SearcherStyled>
  );
}