import { Link } from "react-router-dom";
import { CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./video-card.css";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <div className='video__card'>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        className='video__card-tumb'
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "325px" }, height: 180 }}
      />
    </Link>

    <div className='video__card-content'>
      <Link to={videoId && `/video/${videoId}`}>
        <h3 variant='subtitle1' fontWeight='bold' color='#FFF'>
          {snippet?.title.slice(0, 50)} ...
        </h3>
      </Link>
      <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
        <div className='video__card-nameChannel'>
          {snippet?.channelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </div>
      </Link>
    </div>
  </div>
);

export default VideoCard;
