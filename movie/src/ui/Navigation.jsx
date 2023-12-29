import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const fontStyleTitle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  textDecoration: "none",
  color: "#000",
};

const Navigation = () => {
  const menus = [
    { name: "Home", path: "" },
    { name: "Favorite", path: "/favorite" },
    { name: "Watched", path: "/watch" },
  ];
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          top: "40%",
          width: "18%",
          bgcolor: "#fff",
        }}
      >
        {menus.map((menu, index) => (
          <Link key={index} to={menu.path} style={fontStyleTitle}>
            <Box
              sx={{
                paddingY: "10px",
                paddingX: "30px",
                border: "1px solid #f1f1f1",
                "&:hover": {
                  bgcolor: "#000",
                  border: "1px solid #f1f1f1",
                },
              }}
            >
              <Typography sx={fontStyleTitle}>{menu.name}</Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Navigation;
