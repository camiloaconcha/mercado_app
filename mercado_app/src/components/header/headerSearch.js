import * as React from "react";
import "./headerComponents.scss";
import * as searchIcon from "./../../assets/ic_Search.png";

const HeaderSearch = (props) => (
  <form  className="headerCp_search">
    <input type="text" placeholder="Nunca pares de buscar" />
    <button type="submit">
      <img src={searchIcon} />
    </button>
  </form >
);

export default HeaderSearch;
