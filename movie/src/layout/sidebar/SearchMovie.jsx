import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchTerm,
  setSearchTerm,
} from "../../feature/movie/moviesSlice";
import { Box } from "@mui/material";

const SearchMovie = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector(selectSearchTerm);
  const handleInputChange = (value) => {
    dispatch(setSearchTerm(value));
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: "10%",
        right: "10px",
        // width: "300px",
      }}
    >
      <input
        style={{
          fontSize:'18px',
          fontFamily:'kanit',
          width:'270px'
        }}
        type="text"
        value={searchTerm}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </Box>
  );
};

export default SearchMovie;
