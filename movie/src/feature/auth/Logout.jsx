import { Box, Button} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigation = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigation("/")
    window.location.reload();
  };
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "10%",
        bgcolor: "#fff",
        borderRadius: "8px",
        marginX:'10px',
        width:'35%'
      }}
    >
      <Button
        variant="contained"
        sx={{
          bgcolor: "#557373",
          width:'100%',
          fontFamily: "Kanit, sans-serif",
          fontSize: "16px",
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
