import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const ServiceCard = () => {
  return (
    <Paper
      sx={{
        bgcolor: "primary.main",
        color: "white",
        display: "flex",
        flexDirection: "column",
        maxWidth: "280px",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        gap: "0.5rem",
      }}
    >
      {/* icon */}
      {/* <Avatar> */}
      <HealthAndSafetyIcon fontSize="large" />
      {/* </Avatar> */}
      <Typography>Health & Wellness</Typography>
      <Typography fontSize={{ xs: "10px", md: "14px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
    </Paper>
  );
};

export default ServiceCard;
