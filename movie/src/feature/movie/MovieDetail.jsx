import { Box, Rating, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { selectAllMovies } from "./moviesSlice";
import { useSearchParams } from "react-router-dom";
import { useMovies } from "../../hook/useMovieData";
import ActorCard from "./ActorCard";
import ModalAlert from "../../component/ModalAlert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 300,
  paddingRight: "10px",
};

const fontStyleTitle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
};

const fontStyleHead = {
  fontFamily: "Kanit, sans-serif",
  paddingRight: "20px",
  // fontSize: "20px",
  // fontWeight: 400,
  // marginTop: "10px",
};

const MovieDetail = () => {
  const [params, setParams] = useSearchParams();
  const [movie, setMovie] = useState();
  // const movies = useSelector(selectAllMovies);
  const { movies } = useMovies();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const id = params.get("id");
    const selectedMovie = movies.find((movie) => movie.id == id);

    setMovie(selectedMovie || null);
  }, [params, movies]);

  const actors = movie?.actor.split("/");
 

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flexBasis: "65%",
          // display: "flex",
          // justifyContent: "center",
        }}
      >
        {movie?.tr_mp4 && (
          <video width="100%" controls autoPlay>
            <source src={movie?.tr_mp4} type="video/mp4" />
          </video>
        )}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            position: "sticky", // Set position to 'sticky'
            top: 0, // Stick to the top
            zIndex: 1000, // Optional: Set a
          }}
        >
          <Box>
            <Typography variant="h3" sx={fontStyleHead}>
              {movie?.title_en}
            </Typography>
            <Typography variant="h3" sx={fontStyleHead}>
              {movie?.title_th}
            </Typography>
          </Box>
          <Box>
            <FavoriteBorderIcon />
          </Box>
        </Box>

        <Typography sx={fontStyle}>ผู้กำกับ : {movie?.director}</Typography>

          <Typography sx={fontStyle}>นักแสดง : </Typography>
          <Box sx={{display:'flex'}}>
          {actors?.slice(0, 7).map((actor, index) => (
            <ActorCard key={index} actor={actor} />
          ))}

          <ModalAlert isOpen={isOpen} setIsOpen={setIsOpen} actors={actors} />
        </Box>

        <Typography sx={fontStyle}>เรื่องย่อ : {movie?.synopsis_th}</Typography>
        
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
  
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "340px",
       
          }}
        >
          <img src={movie?.poster_url} alt={movie?.title_en} width="100%" />
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
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetail;
