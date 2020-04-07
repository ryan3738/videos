import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <dvi>Loading...</dvi>;
  }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
