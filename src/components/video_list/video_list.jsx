import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos }) => {
  console.log(videos, "ddddd");
  return (
    <>
      {videos && videos.map((item) => <VideoItem video={item} key={item.id} />)}
    </>
  );
};
export default VideoList;
