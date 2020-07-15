import * as React from "react";
import "./headerComponents.scss";
import * as searchIcon from "./../../assets/ic_Search.png";

const HeaderSearch = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => (
  <form className="headerCp_search" onSubmit={onSubmitHandler}>
    <input
      type="text"
      placeholder="Nunca pares de buscar"
      value={searchTerm}
      onChange={onInputChange}
      required
    />

    <button type="submit" className="headerCp_button">
      <img src={searchIcon} alt="search icon" />
    </button>

    {error && <div style={{ color: `red` }}>Backend Error!</div>}
  </form>
);

export default HeaderSearch;
