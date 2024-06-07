/*
import { useId } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

import css from "./SearchBox.module.css";
import "./SearchWithClear.css";

const SearchBox = ({ searchText, onSearch }) => {
  const clearSearch = () => {
    onSearch("");
  };

  const serarchTextid = "searchTextId" + useId();

  return (
    <form className={css.form} id="searchBox">
      <label className={css.label}>Search by name</label>
      <div className={css["input-container"]}>
        {// <FaSearch className={css["icon"]} /> //}
        <input
          type="text"
          id={serarchTextid}
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Typo name"
        />
        <FaSearch className="icon search-icon" />
        {searchText && (
          <FaTimes className="icon clear-icon" onClick={clearSearch} />
        )}
      </div>
    </form>
  );
};
export default SearchBox;
*/
// import React from "react";
import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { FaSearch, FaTimes } from "react-icons/fa";
import { changeFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";
import "./SearchWithClear.css";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const serarchTextid = "searchTextId" + useId();

  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    dispatch(changeFilter(value));
  };

  const clearSearch = () => {
    const value = "";
    setSearchText("");
    dispatch(changeFilter(value));
  };

  return (
    <>
      {/* <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Search contacts"
      /> */}
      <form className={css.form} id="searchBox">
        <label className={css.label}>Search Contacts (by name)</label>
        <div className={css["input-container"]}>
          {/* <FaSearch className={css["icon"]} /> */}
          <input
            type="text"
            id={serarchTextid}
            value={searchText}
            onChange={handleFilterChange}
            placeholder="Enter name ..."
          />
          <FaSearch className="icon search-icon" />
          {searchText && (
            <FaTimes className="icon clear-icon" onClick={clearSearch} />
          )}
        </div>
      </form>
    </>
  );
};

export default SearchBox;
