import axios from 'axios';

const myApi = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default myApi;