import React from "react";
import "./VideoDetail.css";

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div className="box">
      <div>
        <iframe
          title="video frame"
          height="600"
          width="100%"
          src={videoSrc + "?autoplay=1"}
        ></iframe>

        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3ChgRbqGi-E"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </div>
      <h1>{props.video.snippet.title}</h1>
      <br />
      <p>{props.video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
