import { Box, Drawer } from "@mui/material";
import React from "react";
import LoginForm from "../../feature/auth/LoginForm";
import Navigation from "../../ui/Navigation";
import SearchMovie from "../header/SearchMovie";

const DrawerMenu = ({ open, setOpen }) => {
  const user = localStorage.getItem("user");
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Drawer anchor="right" open={open} onClose={handleToggle}>
        <Box
          role="presentation"
          // onKeyDown={handleToggle}
          sx={{
            width: "200px",
          }}
        >
          <SearchMovie />
          {user ? <Navigation setOpen={setOpen}/> : <LoginForm />}
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerMenu;
