import * as React from "react";
import './headerComponents.scss';
import * as logo from './../../assets/Logo_ML.png';

const HeaderLogo = () => (
  <div className='headerCp_logo'>
    <img
      src={logo}
      alt="Mercado Libre Logo"
    />
  </div>
);

export default HeaderLogo;
