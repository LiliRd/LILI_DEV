import axios from 'axios';

const instance = axios.create(
    {
        baseUrl: 'https://jsonplaceholder.ir',
        headers: {
            Content_type:'application/json',
            timeOut:1000,
},
});
export default instance;