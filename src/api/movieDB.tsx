import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ad926fe983d48961d09efc099571db9a',
        language: 'es-ES'
    }
});

export default movieDB;