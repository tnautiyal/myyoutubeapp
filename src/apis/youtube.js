import axios from "axios";

//const KEY = 'AIzaSyAVaPQwr6jMsh3FvDvQ4SsAP9Gq22Y-GHM';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
