import React, { useState, useEffect } from "react";

import Sidebar from "../Sidebar";
import Videos from "../Videos";

import { fetchFromAPI } from "../../utils/fetchFromAPI";

import "./feed.css";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className='feed__area'>
      <section className='feed__left'>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <footer>Copyright 2022 DMS TECH </footer>
      </section>
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
