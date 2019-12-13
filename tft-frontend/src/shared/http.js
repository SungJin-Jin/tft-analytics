import axios from 'axios';

const API_SERVER_URL = 'http://localhost:4000/api';

export const api = {
    get: (url) => {
        return axios.get(`${API_SERVER_URL}${url}`);
    }
};