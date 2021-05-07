import axios from "axios";

const URL = "https://youtube.googleapis.com/youtube/v3";
const KEY = "AIzaSyBDMwBGdpk-ar6k5_Qxr_3j8CWpIJwTZh8";
const PART = "snippet";
const CHANNEL = "UCbx_d228PdYwgB4Jz202SIQ";

let youtubeAxios = axios.create({
  baseURL: URL,
  params: { key: KEY, part: PART, channelId: CHANNEL },
});

export const getLastVideo = async () => {
  try {
    const video = await youtubeAxios.get("/search", {
      params: { maxResults: 1, order: "date" },
    });
    return video.data.items[0];
  } catch (e) {
    return null;
  }
};

export const searchVideo = async (search) => {
  try {
    console.log("Esto es de aca: " + search);
    const video = await youtubeAxios.get("/search", {
      params: { maxResults: 15, q: search },
    });
    return video.data.items;
  } catch (e) {
    return null;
  }
};
