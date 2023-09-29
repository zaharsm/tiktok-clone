import axios from "axios";

const instance = axios.create({
    baseURL : "https://tiktok-clone-backend-seven.vercel.app/",
});

export default instance;
