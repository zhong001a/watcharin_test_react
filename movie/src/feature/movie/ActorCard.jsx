import { Box, Typography } from '@mui/material'
import React from 'react'
import imgNotFound from './imgNotFound.jpg'
const fontStyle = {
    fontFamily: "Kanit, sans-serif",
    fontSize: "18px",
    paddingRight:'10px',
    fontWeight: 300,
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
   
};
const ActorCard = ({actor}) => {
  return (
    <Box sx={{

      width:'150px',
      paddingRight:'10px'
    }}>

      <img src={imgNotFound} alt={actor} width='100%' />
        <Typography sx={fontStyle}>
        {actor}
        </Typography>
    </Box>
  )
}

export default ActorCard