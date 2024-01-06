import { Box, Typography } from '@mui/material'
import React from 'react'
import imgNotFound from './imgNotFound.jpg'
const fontStyle = {
    fontFamily: "Kanit, sans-serif",
    fontSize: "14px",
    paddingX:'2px',
    fontWeight: 300,
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    width:'55px'
   
};
const ActorCard = ({actor}) => {
  return (
    <Box sx={{
      paddingRight:'8px'
    }}>

      <img src={imgNotFound} alt={actor} width='65px'  />
        <Typography sx={fontStyle}>
        {actor}
        </Typography>
    </Box>
  )
}

export default ActorCard