import axios from "axios";
export const HOST = "http://localhost:888/"
export const api_key = "fac1e5db51e94e0a4f7245d1164a32e4"
export const BASE_URL = "https://api.themoviedb.org/3"
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500"
export const Api = {
    getPopular: (id) => axios.get(`${BASE_URL}/movie/popular`,{
        params: {
            api_key,
            page: id
        }
    }),
    getMovie: (id) => axios.get(`${BASE_URL}/movie/${id}`,{
        params: {
            api_key
        }
    }),
    getActor: (id) => axios.get(`${BASE_URL}/movie/${id}/credits`,{
        params: {
            api_key
        }
    }),
    getUser: (id) => axios.get(`${BASE_URL}/credit/${id}`,{
        params: {
            api_key
        }
    }),
}