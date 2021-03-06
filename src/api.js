class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  popular = async () => {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items)
      .catch((error) => console.log("error", error));
  };

  search = async (query) => {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=25&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => items.filter((item) => item.id)) //channe의 경우 videoId가 undefined 로 표시되므로, videoId가 없는 item은 제거한다.
      .catch((error) => console.log("error", error));
  };
}

export default Youtube;
