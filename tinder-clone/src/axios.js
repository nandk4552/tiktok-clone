import axios from "axios"

const instance = axios.create({
    // baseURL: "https://tiktok-clone-backend-mern.onrender.com/", // The API (BACKEND) URL
    baseURL: "http://localhost:10000/", // The API (BACKEND) URL
})

export default instance