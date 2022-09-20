import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Videos from "../Videos";

import { fetchFromAPI } from "../../utils/fetchFromAPI";

import "../Feed/feed.css";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className='feed__area'>
      <section className='feed__right'>
        <div className='feed__right-name'>
          {searchTerm} Search Results for:
          <span>videos</span>
        </div>
        {"Carregando " && <Videos videos={videos} />}
      </section>
    </div>
  );
};

export default SearchFeed;
