import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../user/userSclice";
import { useNavigate } from "react-router-dom";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
const iconStyle = {
  fontSize: "18px",
  color:'#fff',
  paddingY:'6px'
};

const iconFavStyle = {
  fontSize: "30px",
};

const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "18px",
  fontWeight: 300,
  color: "#fff",
  textAlign: "left",
  paddingY:'4px'
};

const MovieCard = ({ movie }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const favorite = useSelector((state) => state.user.favoriteList);
  const isFavorite = favorite.some((fvmovie) => fvmovie.id === movie.id);

  const addMovieToFavorite = (movie) => {
    dispatch(addFavorite(movie));
  };

  return (
    <Box>
      <Box
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        sx={{
          width: "100%",
          height: "450px",
          maxHeight: "450px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          borderRadius: "6px",
          backgroundImage: `url(${movie.poster_url})`,
          backgroundSize: "cover",
        }}
      >
        {isHover && (
          <Box
            sx={{
              position: "absolute",
              bottom: "10px",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "10%",
                paddingLeft:'10px'

              }}
            >
              <SmartDisplayOutlinedIcon sx={iconStyle}/>
              <LocalOfferOutlinedIcon sx={iconStyle}/>
              <AccessTimeOutlinedIcon sx={iconStyle}/>
              <MovieCreationOutlinedIcon sx={iconStyle}/>

            </Box>
            <Box
              sx={{
                width: "90%",
              }}
            >
              <Typography sx={fontStyle}>
                {movie.now_showing === "1" ? "showing" : "soon"}
              </Typography>
              <Typography sx={fontStyle}>{movie.genre}</Typography>
              <Typography sx={fontStyle}>{movie.duration} min.</Typography>
              <Typography sx={fontStyle}>{movie.rating}</Typography>

            </Box>


            <Button
              sx={{
                marginTop: "10px",
                bgcolor: "#fff",
                color: "#161c24",
                position: "absolute",
                paddingX: "30px",
                bottom: "10%",
                fontFamily: "Kanit, sans-serif",
                fontSize: "16px",
                borderRadius: "8px",

                fontWeight: 400,
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#161c24",
                  cursor: "pointer",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => navigate(`/movie?id=${movie.id}`)}
            >
              Detail
            </Button>
          </Box>
        )}
        {isHover && (
          <Box
            sx={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={() => addMovieToFavorite(movie)}
          >
            {isFavorite ? (
              <FavoriteIcon sx={iconFavStyle} />
            ) : (
              <FavoriteBorderIcon sx={iconFavStyle} />
            )}
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "18px",
        }}
      >
        <Typography sx={{ fontFamily: "Kanit, sans-serif", fontSize: "20px", fontWeight:400}}>
          {movie.title_en}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieCard;
