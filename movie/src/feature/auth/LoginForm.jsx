import { Box, Button, TextField } from "@mui/material";
import React from "react";
const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 300,
  marginTop: "10px",
};

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: "40%",
        bgcolor: "#fff",
        borderRadius: "8px",
        margin: "20px",
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate sx={fontStyle}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
        />

        <TextField
          sx={fontStyle}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#557373",
            paddingY: "10px",
            marginY: "10px",
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
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
