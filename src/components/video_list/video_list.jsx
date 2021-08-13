import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, getDetailData, isDetail }) => {
  // console.log(videos, "ddddd");

  return (
    <ul className={isDetail ? styles.detail_on : styles.detail_off}>
      {videos &&
        videos.map((video) => (
          <VideoItem
            video={video}
            key={
              video.id

              // ? video.id.videoId
              // ? video.id.videoId && video.id.channelId
            }
            isDetail={isDetail}
            getDetailData={getDetailData}
          />
        ))}
    </ul>
  );
};
export default VideoList;
