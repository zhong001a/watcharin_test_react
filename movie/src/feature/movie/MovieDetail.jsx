import { Box, Rating, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { selectAllMovies } from "./moviesSlice";
import { useSearchParams } from "react-router-dom";
import { useMovies } from "../../hook/useMovieData";
import ActorCard from "./ActorCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../user/userSclice";

const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "14px",
  fontWeight: 300,
  paddingRight: "10px",
};

const fontStyleTitle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "14px",
  fontWeight: 400,
};

const fontStyleHead = {
  fontFamily: "Kanit, sans-serif",
  
  maringBottom: "10px",
};

const iconFavStyle = {
  fontSize: "28px",
  cursor: "pointer",
};

const MovieDetail = () => {
  // const movies = useSelector(selectAllMovies);
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const [movie, setMovie] = useState();
  const { movies } = useMovies();
  const favorite = useSelector((state) => state.user.favoriteList);
  const isFavorite = favorite.some((fvmovie) => fvmovie?.id === movie?.id);

  const addMovieToFavorite = (movie) => {
    dispatch(addFavorite(movie));
  };

  useEffect(() => {
    const id = params.get("id");
    const selectedMovie = movies.find((movie) => movie.id == id);

    setMovie(selectedMovie || null);
  }, [params, movies]);

  const actors = movie?.actor.split("/");
  const user = localStorage.getItem("user");

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          width: "95%",
        }}
      >
        {movie?.tr_mp4 && (
          <video width="100%" controls autoPlay>
            <source src={movie?.tr_mp4} type="video/mp4" />
          </video>
        )}
        <Box sx={{display:'flex', justifyContent:'space-between'}}> 
          <Box sx={{ marginBottom: "10px" }}>
            <Typography variant="h5" sx={fontStyleHead}>
              {movie?.title_en}
            </Typography>
            <Typography variant="h5" sx={fontStyleHead}>
              {movie?.title_th}
            </Typography>
          </Box>

          {user && (
            <Box sx={{padding:'10px'}} onClick={() => addMovieToFavorite(movie)}>
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
            width: "100%",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <img src={movie?.poster_url} alt={movie?.title_en} width="100%" />
          </Box>

          <Box
            sx={{
              width: "50%",
              paddingLeft: "10px",
            }}
          >
            <Box sx={{ display: "flex", paddingTop: "10px" }}>
              <Typography sx={fontStyleTitle}>Reviews :&nbsp;</Typography>
              {movie?.rating_id !== undefined ? (
                <Rating
                  name="half-rating-read"
                  defaultValue={movie?.rating_id}
                  readOnly
                />
              ) : null}
            </Box>
            <Box sx={{ display: "flex", paddingTop: "10px" }}>
              <Typography sx={fontStyleTitle}>duration:&nbsp;</Typography>
              <AccessTimeIcon sx={{ fontSize: "18px" }} />
              <Typography sx={fontStyle}>
                &nbsp;{movie?.duration}&nbsp;นาที
              </Typography>
            </Box>

            <Box sx={{ display: "flex", paddingTop: "10px" }}>
              <Typography sx={fontStyleTitle}>category:&nbsp;</Typography>
              <Typography sx={fontStyle}>{movie?.genre}</Typography>
            </Box>

            <Box sx={{ display: "flex", paddingTop: "10px" }}>
              <Typography sx={fontStyleTitle}>release date :&nbsp;</Typography>
              <Typography sx={fontStyle}>{movie?.release_date}</Typography>
            </Box>

            <Box sx={{ display: "flex", paddingTop: "10px" }}>
              <Typography sx={fontStyleTitle}>rating:&nbsp;</Typography>
              <Typography sx={fontStyle}>{movie?.rating}</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", paddingTop: "10px" }}>
          <Typography sx={fontStyleTitle}>ผู้กำกับ :&nbsp;</Typography>
          <Typography sx={fontStyle}>{movie?.director}</Typography>
        </Box>

        <Box sx={{ paddingTop: "10px" }}>
          <Typography sx={fontStyleTitle}>นักแสดง : </Typography>
          <Box sx={{ display: "flex" }}>
            {actors?.slice(0, 5).map((actor, index) => (
              <ActorCard key={index} actor={actor} />
            ))}
          </Box>
        </Box>
        <Box sx={{ paddingTop: "10px" }}>
          <Typography sx={fontStyleTitle}>
            เรื่องย่อ :
            <Typography sx={fontStyle}>{movie?.synopsis_th}</Typography>
          </Typography>
        </Box>
      </Box>

      {/* <Box
          sx={{
            width: "100%",
            maxWidth: "340px",
          }}
        >
          <img src={movie?.poster_url} alt={movie?.title_en} width="100%" />
          <Box sx={{ display: "flex", paddingTop: "20px" }}>
            <Typography sx={fontStyleTitle}>Reviews :&nbsp;</Typography>
            {movie?.rating_id !== undefined ? (
              <Rating
                name="half-rating-read"
                defaultValue={movie?.rating_id}
                readOnly
              />
            ) : null}
          </Box>
          <Box sx={{ display: "flex", paddingTop: "10px" }}>
            <Typography sx={fontStyleTitle}>duration :&nbsp;</Typography>
            <AccessTimeIcon />
            <Typography sx={fontStyle}>{movie?.duration}</Typography>
            <Typography sx={fontStyle}>นาที</Typography>
          </Box>

          <Box sx={{ display: "flex", paddingTop: "10px" }}>
            <Typography sx={fontStyleTitle}>category :&nbsp;</Typography>
            <Typography sx={fontStyle}>{movie?.genre}</Typography>
          </Box>

          <Box sx={{ display: "flex", paddingTop: "10px" }}>
            <Typography sx={fontStyleTitle}>release date :&nbsp;</Typography>
            <Typography sx={fontStyle}>{movie?.release_date}</Typography>
          </Box>

          <Box sx={{ display: "flex", paddingTop: "10px" }}>
            <Typography sx={fontStyleTitle}>rating :&nbsp;</Typography>
            <Typography sx={fontStyle}>{movie?.rating}</Typography>
          </Box>
        </Box> */}
    </Box>
  );
};

export default MovieDetail;
