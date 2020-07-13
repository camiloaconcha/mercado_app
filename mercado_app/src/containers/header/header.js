import React, { Component } from "react";
import HeaderLogo from "../../components/header/headerLogo";
import HeaderSearch from "../../components/header/headerSearch";
import "./header.scss";
import { Link } from "react-router-dom";

class header extends Component {
  render() {
    return (
      <div className="header_container">
        <Link to={`/`}>
          <HeaderLogo />
        </Link>

        <HeaderSearch />
      </div>
    );
  }
}

export default header;
