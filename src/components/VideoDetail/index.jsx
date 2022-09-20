import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Videos from "../Videos";
import Loader from "../Loader";

import { fetchFromAPI } from "../../utils/fetchFromAPI";

import "./video-detail.css";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <section className='video__section-area'>
      <div className='video__area-left'>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className='react-player'
          controls
        />

        <h1>{title}</h1>

        <div className='channel__title-vd'>
          <Link to={`/channel/${channelId}`}>
            <div style={{ color: "#fff" }}>
              {channelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </div>
          </Link>
        </div>

        <div className='likes__count'>
          <span>{parseInt(viewCount).toLocaleString()} views</span>
          <span sx={{ opacity: 0.7 }}>
            {parseInt(likeCount).toLocaleString()} likes
          </span>
        </div>
      </div>

      <div className='video__area-right'>
        <Videos videos={videos} direction='column' />
      </div>
    </section>
  );
};

export default VideoDetail;
