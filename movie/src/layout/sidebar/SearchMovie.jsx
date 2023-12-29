import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from '../../feature/movie/moviesSlice';
import { Box } from '@mui/material';

const SearchMovie = () => {
  const dispatch = useDispatch()
  
  const searchTerm = useSelector(selectSearchTerm);
  const handleInputChange = (value) => {
    dispatch(setSearchTerm(value));
  };
  return (
    <Box
    sx={{
      top: 0,
      height: "100%",
      width: "300px",
      bgcolor: "#161c24",
      position:'fixed'

    }}
  >

      <input type="text" value={searchTerm} 
        onChange={(e) => handleInputChange(e.target.value)}
      />
  
  </Box>
  )
}

export default SearchMovie