import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

import css from "./searchBox.module.css";

const SearchBox = () => {
  const filterId = useId();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.filters);

  const onFilterInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor={filterId} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={filterId}
        className={css.input}
        type="text"
        value={name}
        onChange={onFilterInput}
      />
    </div>
  );
};

export default SearchBox;
