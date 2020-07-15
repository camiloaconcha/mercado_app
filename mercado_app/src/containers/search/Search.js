import React, { useState } from "react";
import axios from "axios";
import HeaderLogo from "../../components/header/headerLogo";
import HeaderSearch from "../../components/header/headerSearch";
import "./search.scss";
import { Link } from "react-router-dom";

const API_BASE_URL = `http://localhost:22001/api/items`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_BASE_URL}?q=${searchTerm}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      setResults(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchResults();
  };

  return (
    <div className="header_container">
      <Link to={`/`}>
        <HeaderLogo />
      </Link>

      <HeaderSearch
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error}
      />
    </div>
  );
};

export default Search;
