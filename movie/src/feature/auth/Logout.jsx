import { Box, Button} from "@mui/material";
import React from "react";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "10%",
        bgcolor: "#fff",
        borderRadius: "8px",
        marginLeft:'15px',
        width:'14%'
      }}
    >
      <Button
        variant="contained"
        sx={{
          bgcolor: "#557373",
          width:'100%',
          fontFamily: "Kanit, sans-serif",
          fontSize: "18px",
          fontWeight: 400,

          "&:hover": {
            bgcolor: "#fff",
            color: "#161c24",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add box shadow on hover
          },
        }}
        onClick={() => {
          handleLogout();
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Logout;
