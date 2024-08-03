"use client";

import { Button, Container, Typography, Box } from "@mui/material";
import { signIn } from "next-auth/react";

const LogIn = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          boxShadow: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Sign In
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => signIn("google")}
          sx={{ mt: 2 }}
        >
          Sign In with Google
        </Button>
      </Box>
    </Container>
  );
};

export default LogIn;
