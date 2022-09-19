import React from "react";
import { CircularProgress } from "@mui/material";

import "./loader.css";

const Loader = () => (
  <div className='loader__bar-area'>
    <div className='loader__bar'>
      <CircularProgress />
    </div>
  </div>
);

export default Loader;
