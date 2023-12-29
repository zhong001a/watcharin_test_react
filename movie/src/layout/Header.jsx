import React from 'react';
import Box from '@mui/material/Box';
const Header = () => {
  return (
    <Box

      sx={{
        width: '100%',
        bgcolor: '#161C24',
        opacity: 0.5,
        position: 'fixed',
        height: '70px',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
  
        "&:hover": {
          opacity: 1,
        },
      }}
    >

    </Box>
  );
};

export default Header;
