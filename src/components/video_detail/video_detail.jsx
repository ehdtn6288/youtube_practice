import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({
  detail,
  detail: {
    contentId,
    snippet: { title, description, channelTitle, publishedAt },
  },
}) => {
  console.log(contentId, title, description, channelTitle, publishedAt, detail);

  return (
    <div className={styles.container}>
      <iframe
        title={title}
        className={styles.video}
        src={`http://www.youtube.com/embed/${contentId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.infoBox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channelTitle}>{channelTitle}</p>
        <p className={styles.publishedAt}>{publishedAt.substring(0, 10)}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
