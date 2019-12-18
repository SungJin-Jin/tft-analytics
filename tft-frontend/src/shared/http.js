import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

export const api = {
    get: (url) => {
        return axios.get(`${API_SERVER_URL}${url}`);
    }
};