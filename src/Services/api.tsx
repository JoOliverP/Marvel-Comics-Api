import axios from 'axios';
import md5 from 'md5';

const publicKey = '69b7824dc69de3ab9829b58f0daa5430';
const privateKey = '112f284d75b2e95aa4eb3311082ec38a22095e71';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash
    }
})


export default api;