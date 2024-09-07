import { Box, Typography } from "@mui/material";
import React from "react";
import Cat2 from "../../assets/cat2.jpg";

export default function About() {
  return (
    <Box
      sx={{
        mt: "240px",
        display: "flex",
        width: "70%",
        padding: "2rem",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flex: 0.5,
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={Cat2}
          sx={{
            // width: "100%",
            borderRadius: "14px",
            maxHeight: "300px",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 0.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
        xs={{
          background: "red",
        }}
      >
        <Typography sx={{ typography: { xs: "h6", md: "h4" } }}>
          About Us
        </Typography>
        <Typography sx={{ typography: { xs: "body2", md: "body1" } }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature,{" "}
        </Typography>
      </Box>
    </Box>
  );
}
