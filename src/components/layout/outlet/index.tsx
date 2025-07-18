import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Fade } from "@mui/material";

const Layout = () => {
  return (
    <Fade in timeout={500}>
      <Box
        sx={{
          minHeight: '100vh',
          padding: 2,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Outlet />
      </Box>
    </Fade>
  );
};

export default Layout;
