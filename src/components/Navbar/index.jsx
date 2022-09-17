import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar";

import { logo } from "../../utils/constants";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar__btn'>
        <img src={logo} alt='logoYT' />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
