import React from "react";

import VideoCard from "../VideoCard";
import ChannelCard from "../ChannelCard";
import Loader from "../Loader";

import "./videos.css";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <div className='feed__videos'>
      {videos.map((item, index) => (
        <div key={index} className='feed__video-item'>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
