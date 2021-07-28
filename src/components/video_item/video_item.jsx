import React from "react";

const VideoItem = ({ video }) => {
  return (
    <ul>
      <li>{video.snippet.title}</li>
    </ul>
  );
};

export default VideoItem;
