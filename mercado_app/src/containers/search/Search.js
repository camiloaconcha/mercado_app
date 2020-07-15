import React, { useState } from "react";
import HeaderLogo from "../../components/header/headerLogo";
import HeaderSearch from "../../components/header/headerSearch";
import { Link } from "react-router-dom";
import "./search.scss";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const location = {
      pathname: "/items",
      state: { fromDashboard: true },
      search: `?q=${searchTerm}`,
    };
    props.history.push(location);
  };

  return (
    <div>
      <div className="header_container">
        <Link to={`/`}>
          <HeaderLogo />
        </Link>

        <HeaderSearch
          onSubmitHandler={onSubmitHandler}
          onInputChange={onInputChange}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default Search;
