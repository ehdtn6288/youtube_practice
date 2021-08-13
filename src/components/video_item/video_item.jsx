import React, { memo, useRef } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({
  video,
  video: { snippet: info },
  getDetailData,
  isDetail,
}) => {
  //   const url = `https://www.youtube.com/watch?v=${
  //     video.id.videoId
  //       ? video.id.videoId
  //       : video.id.channelId
  //       ? video.id.channelId
  //       : video.id
  //   }`;
  const videoRef = useRef();

  // const id = video.id.videoId
  //   ? video.id.videoId
  //   : video.id.channelId
  //   ? video.id.channelId
  //   : video.id;

  const handleClick = () => {
    console.log(videoRef);
    getDetailData(video.id);
  };

  return (
    <div
      ref={videoRef}
      className={`${styles.container} ${
        isDetail ? styles.container_detail_on : ""
      } ${video.id} `}
      onClick={handleClick}
      //   href={url}
      //   target="_blank"
      //   rel="noreferrer"
    >
      <img
        className={styles.thumbnail}
        src={info.thumbnails.medium.url}
        alt="Sorry"
      />
      <div className={styles.title_container}>
        <h2 className={styles.title}>{info.title}</h2>
        <h3 className={styles.channel}>{info.channelTitle}</h3>
      </div>
    </div>
  );
};

export default memo(VideoItem);
