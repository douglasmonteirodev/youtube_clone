import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => (
  <div className='loader__bar-area'>
    <div className='loader__bar'>
      <CircularProgress
        className='circular__bar'
        style={{
          position: "block",
          top: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "orangered",
        }}
      />
    </div>
  </div>
);

export default Loader;
