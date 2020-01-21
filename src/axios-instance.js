import axios from 'axios';

/**
 * HTTP Client configuration.
 * 
 * This function just defines the base URL for the backend (hard-coded
 * at this moment).
 */
const instance = axios.create({
    baseURL: 'http://localhost:5000/'
});

export default instance;
