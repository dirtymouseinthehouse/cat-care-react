import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        top: "auto",
        bottom: 0,
        py: "20px",
        width: "100%",
        backgroundColor: "orange",
      }}
    >
      <Typography variant="body2">catcare</Typography>
      {/* social media icons */}
      <Box>
        <Instagram />
        <Facebook />
        <LinkedIn />
      </Box>
    </Box>
  );
}
