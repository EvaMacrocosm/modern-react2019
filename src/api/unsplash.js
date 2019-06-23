import axios from 'axios';

export  default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c31fbb393def0a10ba1086bb5d2046cc64bfce7ff08c0b486bc21632103eae5f'
    }
});