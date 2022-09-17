import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

import "./search-bar.css";

const SearchBar = () => {
  return (
    <Paper
      component='form'
      onSubmit={() => {}}
      className='search__paper'
      sx={{ borderRadius: 20 }}
    >
      <input
        type='text'
        placeholder='Search ...'
        value=''
        onChange={() => {}}
      />
      <IconButton className='search__icon-btn'>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
