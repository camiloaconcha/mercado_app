import React, { Component } from "react";
import HeaderLogo from "../../components/header/headerLogo";
import HeaderSearch from "../../components/header/headerSearch";
import './header.scss';

class header extends Component {
  render() {
    return (
      <div className='header_container'>
        <HeaderLogo />
        <HeaderSearch />
      </div>
    );
  }
}

export default header;
