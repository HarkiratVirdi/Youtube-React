import React from "react";
import "./VideoItem.css";

function VideoItem({ data, video }) {
  let Info = data.snippet;
  return (
    <div className="flex-container">
      <div className="right">
        <div className="image">
          <img
            onClick={() => video(data)}
            src={Info.thumbnails.medium.url}
            alt=""
          />
        </div>
      </div>

      <div className="info">
        <p className="down" onClick={() => video(data)}>
          <strong>{Info.title}</strong>
        </p>
        <blockquote className="channel">{Info.channelTitle}</blockquote>
      </div>
    </div>
  );
}

export default VideoItem;
