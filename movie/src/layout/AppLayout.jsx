import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import Header from "./Header";

const AppLayout = () => {
  const isSmallScreen = useMediaQuery('(max-width: 650px)');
  
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            flexBasis: isSmallScreen? "100%":"90%",

            overflowY: "auto",
            position: "relative",
       
          }}
        >
          <Header />

          <Box
            sx={{
              marginTop:isSmallScreen?'0':"100px",
              paddingLeft: isSmallScreen?'0':'30px'
            }}
          >
            <Outlet />
          </Box>
        </Box>

        <Box
          sx={{
            display:isSmallScreen?'none':null,
            flexBasis: "10%",
            bgcolor: "#999",
            position: "relative",
          }}
        >
          <Sidebar />
        </Box>
      </Box>
    </>
  );
};

export default AppLayout;
