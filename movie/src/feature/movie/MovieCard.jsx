import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../user/userSclice";

const iconStyle = {
  fontSize: "30px",
};

const MovieCard = ({ movie }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
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
        position="relative"
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
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Black background with 50% opacity
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              {movie.title_en}
            </Typography>
            <Button
              sx={{
                marginTop: "10px",
                bgcolor: "#fff",
                color: "#161c24",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#161c24",
                  cursor: "pointer",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                },
              }}
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
              <FavoriteIcon sx={iconStyle} />
            ) : (
              <FavoriteBorderIcon sx={iconStyle} />
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
        <Typography>{movie.title_en}</Typography>
      </Box>
    </Box>
  );
};

export default MovieCard;
