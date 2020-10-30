import React from "react";
import VideoItem from "../VideoItem/VideoItem";

function VideoList(props) {
  let renderedList = props.noOfVideo.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={props.onVideoSelection}
        data={video}
      />
    );
  });

  return <div className="sub-container">{renderedList}</div>;
}

export default VideoList;
