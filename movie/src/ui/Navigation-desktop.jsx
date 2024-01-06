import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../feature/auth/Logout";
import { useSelector } from "react-redux";

const fontStyleTitle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  textDecoration: "none",
  color: "#fff",
};

const Navigation = () => {
  const [active, setActive] = useState("");
  const favorite = useSelector((state) => state.user.favoriteList);
  const menus = [
    { name: "Home", path: "" },
    { name: "Favorite", path: "/favorite" },
    { name: "Watched", path: "#" },
  ];

  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          top: "40%",
          width: "18%",
        }}
      >
        {menus.map((menu, index) => (
          <Link key={index} to={menu.path} style={fontStyleTitle}>
            <Box
              sx={{
                paddingY: "10px",
                paddingX: "30px",
                marginY: "1px",
                bgcolor: menu.name === active ? "#000" : null,
                "&:hover": {
                  bgcolor: "#000",
                },
              }}
              onClick={() => setActive(menu.name)}
            >
              <Typography sx={fontStyleTitle}>
                {menu.name}&nbsp;
                {menu.name === "Favorite" && favorite.length > 0 && (
                  <span>{favorite.length}</span>
                )}
              </Typography>
            </Box>
          </Link>
        ))}
        <Logout />
      </Box>
    </Box>
  );
};

export default Navigation;
