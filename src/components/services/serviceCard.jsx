import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const ServiceCard = ({ item }) => {
  return (
    <Paper
      sx={{
        bgcolor: "primary.main",
        color: "white",
        display: "flex",
        // height: "100%",
        flexDirection: "column",
        maxWidth: "280px",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        gap: "0.5rem",
      }}
      elevation={2}
    >
      {/* icon */}
      {/* <Avatar> */}
      {/* <HealthAndSafetyIcon fontSize="large" /> */}
      {item.icon}
      {/* </Avatar> */}
      <Typography fontSize={{ xs: "12px", md: "18px" }}>
        {item.title}
      </Typography>
      <Typography fontSize={{ xs: "10px", md: "14px" }} textAlign={"center"}>
        {item.description}
      </Typography>
    </Paper>
  );
};

export default ServiceCard;
