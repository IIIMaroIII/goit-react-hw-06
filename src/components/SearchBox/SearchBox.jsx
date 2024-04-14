import css from './searchBox.module.css';
import { useId } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ value, onFilter }) => {
  const filterId = useId();
  return (
    <div className={css.wrapper}>
      <label htmlFor={filterId} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={filterId}
        className={css.input}
        type="text"
        value={value}
        onChange={e => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default SearchBox;
