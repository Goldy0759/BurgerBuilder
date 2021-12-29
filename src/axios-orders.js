import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b20d8-default-rtdb.firebaseio.com/'
});

export default instance;