import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

import "./channel-card.css";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div className='channel__card' style={{ marginTop }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className='channel__card-content'>
          <div className='channel__card-img'>
            <img
              src={channelDetail?.snippet?.thumbnails?.high?.url}
              alt={channelDetail?.snippet?.title}
            />
          </div>

          <div className='channel__card-title'>
            {channelDetail?.snippet?.title}
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "white", ml: "5px" }}
            />

            <div className='channel__card-subs'>
              {channelDetail?.statistics?.subscriberCount && (
                <div
                  className='channel__card-sub'
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  {parseInt(
                    channelDetail?.statistics?.subscriberCount
                  ).toLocaleString("en-US")}
                  Subscribers
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
