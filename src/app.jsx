import { useEffect, useState } from "react";
import "./reset.css";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";

function App({ youtube }) {
  const [videos, setVideos] = useState();
  const [detail, setDetail] = useState();

  const getDetailData = (id) => {
    const detailData = videos.filter(
      (item) =>
        item.id === id || item.id.videoId === id || item.id.channelId === id
    );
    setDetail({ contentId: id, ...detailData[0] });
    // console.log(detailData);
    // console.log(detail);
  };
  const search = (query) => {
    youtube
      .search(query) //
      .then((result) => setVideos(result));
  };
  useEffect(() => {
    youtube
      .popular() //
      .then((result) => setVideos(result));
    console.log("rendering");
    // api.popular();
    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };
    // fetch(
    //   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyBn6jDGPPhrgDtEsSKIMtzkEIEB2Ad-3i0",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setVideos(result.items))
    //   .catch((error) => console.log("error", error));
    // // console.log(videos);
  }, [youtube]);

  return (
    <>
      <VideoSearch setSearchVideos={search} removeDetail={setDetail} />
      <div
        className={`${styles.container} ${
          detail ? `${styles.detail_on}` : `${styles.detail_off}`
        }`}
      >
        {detail && <VideoDetail detail={detail} />}
        <VideoList
          videos={videos}
          getDetailData={getDetailData}
          isDetail={detail ? true : false}
        />
      </div>
    </>
  );
}

export default App;
