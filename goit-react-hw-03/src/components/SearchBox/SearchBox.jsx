import React from 'react';
import style from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={style.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        className={style.input}
      />
    </div>
  );
};

export default SearchBox;