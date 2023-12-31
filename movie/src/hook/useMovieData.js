import useSWR from 'swr'
const API_URL = "http://18.138.251.59:8000/api/v1/movie";
export const useMovies = ()=>{
    let movies = [];
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const  {data} =  useSWR(`${API_URL}`,fetcher)
    if(data){
        movies = data.data || []
    }
    return { movies }
}