import { Box, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./serviceCard";

const Services = ({ servicesRef }) => {
  return (
    <Box
      ref={servicesRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: "4rem",
        // justifyContent: "center",
        // gap: "1.5rem",
      }}
    >
      <Typography fontWeight={"bold"} fontSize={{ xs: "20px", md: "40px" }}>
        Our Grooming{" "}
        <span
          style={{
            color: "orange",
          }}
        >
          Services
        </span>
        {/* <Typography fontWeight={"inherit"} fontSize={"inherit"} color="primary">
          Services
        </Typography> */}
      </Typography>
      <Typography fontWeight={"light"} fontSize={"16px"} color="grey">
        Here are few of our most popular services
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.8rem",
          justifyContent: "center",
          mt: "50px",
          // alignItems: "center",
        }}
      >
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </Box>
    </Box>
  );
};

export default Services;
