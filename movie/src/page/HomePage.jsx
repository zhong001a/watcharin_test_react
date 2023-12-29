import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMovies } from "../hook/useMovieData";
import MovieCard from "../feature/movie/MovieCard";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setAllMovies } from '../feature/movie/moviesSlice';

const HomePage = () => {
  const dispatch = useDispatch()
  const { movies } = useMovies();
  const isSmallScreen = useMediaQuery('(max-width: 1240px)');
  
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchTerm = useSelector(selectSearchTerm);
  useEffect(() => {
    dispatch(setAllMovies(movies))
    const setFilter = () => {
      const filtered = movies.filter(
        (movie) =>
          movie.title_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.title_th.includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    };

    setFilter();
  }, [movies, searchTerm, dispatch]);

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
  );
};

export default HomePage;
