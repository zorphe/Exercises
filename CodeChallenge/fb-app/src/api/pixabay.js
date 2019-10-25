import axios from 'axios';

import { key } from './key';

export default axios.create({
    baseURL: `https://pixabay.com/api/?key=${key}`
});