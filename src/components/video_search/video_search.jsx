import React, { useRef } from "react";
import styles from "./video_search.module.css";

const VideoSearch = (props) => {
  const inputRef = useRef();

  const handleInput = (event) => {
    event.preventDefault();
    const text = inputRef.current.value;
    console.log(text);

    getSearchData(text);
  };

  const getSearchData = (word) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${word}&maxResults=25&key=AIzaSyBn6jDGPPhrgDtEsSKIMtzkEIEB2Ad-3i0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.items);
        props.setSearchVideos(result.items);
      })
      .catch((error) => console.log("error", error));
  };

  //  const handleHome = ()=>{

  //  }

  return (
    <header className={styles.header}>
      <span onClick={() => props.removeDetail("")}>
        <i className={`${styles.icon} fab fa-youtube`}></i>
      </span>
      <form className={styles.form} action="submit" onSubmit={handleInput}>
        <input className={styles.input} ref={inputRef} type="text" />
        <button className={styles.button} type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
};

export default VideoSearch;
