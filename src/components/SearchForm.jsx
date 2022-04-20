import SearchIcon from "@mui/icons-material/Search";
import { SearchContainer, Input } from "./styledComponent";

export const SearchForm = () => {
  //  onKeyDown es el evento que se ejecuta cuando presionamos cualquier letra, en este caso dentro del input. El condicional es para cuando el valor tecleado sea la barra espaciadora que posee el valor de 32
  const handleEvent = (evt) => {
    if (evt.keyCode === 32) evt.preventDefault();
    console.log(evt.keyCode);
  };

  return (
    <SearchContainer>
      <Input onKeyDown={handleEvent} />
      <SearchIcon />
    </SearchContainer>
  );
};

export default SearchForm;
