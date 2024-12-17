import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); // Оновлюємо фільтр в Redux
  };
  return (
    <input
      type="text"
      placeholder="Пошук"
      value={filter || ""}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
