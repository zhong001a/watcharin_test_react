import useSWR from 'swr'
const API_URL = "https://www.majorcineplex.com/apis/get_movie_avaiable";
export const useMovies = ()=>{
    let movies = [];
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const  {data} =  useSWR(`${API_URL}`,fetcher)
    if(data){
        movies = data.movies || []
    }
    return { movies }
}