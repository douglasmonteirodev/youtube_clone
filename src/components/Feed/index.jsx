import React, { useState, useEffect } from "react";

import Sidebar from "../Sidebar";
import Videos from "../Videos";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

import MenuIcon from "@mui/icons-material/Menu";

import "./feed.css";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className='feed__area'>
      <MenuIcon
        className='menu__bar'
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      {showMenu && (
        <section className='feed__left'>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </section>
      )}
      <section className='feed__right'>
        <div className='feed__right-name'>
          {selectedCategory}
          <span>videos</span>
        </div>
        <Videos videos={videos} />
      </section>
    </div>
  );
};

export default Feed;
