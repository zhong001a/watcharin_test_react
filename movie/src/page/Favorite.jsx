import { Box, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchTerm } from '../feature/movie/moviesSlice'
import MovieCard from '../feature/movie/MovieCard'

const Favorite = () => {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.user.favoriteList)
    const searchTerm = useSelector(selectSearchTerm);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const isSmallScreen = useMediaQuery('(max-width: 1240px)');
    
    
    useEffect(() => {
      const setFilter = () => {
        const filtered = favorites.filter(
          (movie) =>
            movie.title_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.title_th.includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filtered);
      };
  
      setFilter();
    }, [searchTerm, dispatch, favorites]);

  return (
    <Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: isSmallScreen ? "50px" : "85px",
          paddingX: isSmallScreen ? "50px" : "85px",
          paddingTop: 10,
          bgcolor: "#fbfbfb",
          paddingBottom: "30px",
          height: "100%",
          minHeight: "650px",
          marginTop: isSmallScreen ? "50px" : "85px",
        }}
      >
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </Box>
    </Box>
  )
}

export default Favorite