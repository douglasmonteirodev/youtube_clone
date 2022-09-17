import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import "./feed.css";

const Feed = () => {
  return (
    <div className='feed__area'>
      <div className='feed__column'>
        <Sidebar />
        <footer>Copyright 2022 DMS TECH </footer>
      </div>
    </div>
  );
};

export default Feed;
