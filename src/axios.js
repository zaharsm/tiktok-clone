import axios from "axios";

const instance = axios.create({
    baseURL : "https://zahar-tiktok.herokuapp.com/",
});

export default instance;