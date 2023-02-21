import axios from 'axios'

const AXIOS_API = axios.create({
    baseURL: "http://localhost:8080",
});

export default AXIOS_API;