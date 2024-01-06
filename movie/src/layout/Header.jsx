import React, { useState } from 'react';
import Box from '@mui/material/Box';

import { Typography } from '@mui/material';
import DrawerMenu from './header/DrawerMenu';
const Header = () => {
  const [ open, setOpen ] = useState(false)
  const toggleOpen = () =>{
    setOpen(!open)
  }
  return (
    <Box

      sx={{
        width: '100%',
        bgcolor: '#161C24',
        opacity: 0.5,
        position: 'fixed',
        height: '40px',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        zIndex:100,
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      <Typography onClick={()=>toggleOpen()} sx={{color:'#fff',paddingRight:'10px'}}>MENU</Typography>
      <DrawerMenu open={open} setOpen={setOpen}/>
    </Box>
  );
};

export default Header;
