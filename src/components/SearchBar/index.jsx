import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

import "./search-bar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      className='search__paper'
      sx={{ borderRadius: 20 }}
    >
      <input
        type='text'
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton className='search__icon-btn'>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
