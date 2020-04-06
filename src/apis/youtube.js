import axios from "axios";

const KEY = "AIzaSyBCHusKVj2eeJWklEMtrlX8prtKk5eqseQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
