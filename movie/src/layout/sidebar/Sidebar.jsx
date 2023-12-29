import { Box } from "@mui/material";
import React from "react";
import LoginForm from "../../feature/auth/LoginForm";
import SearchMovie from "./SearchMovie";
import Navigation from "../../ui/Navigation";

const Sidebar = () => {
  return (
    <Box
      sx={{
        top: 0,
        height: "100%",
        width: "300px",
        bgcolor: "#161c24", 



      }}
    >

      <Box>
        <SearchMovie/>
      </Box>
      <Box>
        <Navigation/>
        {/* <LoginForm /> */}
      </Box>
    </Box>
  );
};

export default Sidebar;
