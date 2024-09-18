import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Cat2 from "../../assets/cat2.jpg";
import { CheckCircle } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";

export default function About({ aboutRef }) {
  return (
    <Box
      ref={aboutRef}
      sx={{
        mt: { xs: "200px", sm: "280px" },
        display: "flex",
        width: { xs: "100%", md: "80%" },
        // padding: { xs: 0, md: "2rem" },
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
        <Typography fontWeight={"bold"} fontSize={{ xs: "18px", md: "40px" }}>
          Your Pet Is In Good Hands With Our Team!
        </Typography>
        <Typography sx={{ typography: { xs: "body2", md: "body1" } }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <CheckCircle fontSize="large" color="primary" />
            </ListItemAvatar>
            <Typography fontSize={{ xs: "10px", md: "16px" }}>
              Experienced staff W/Pet CPR/First Aid Training
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <CheckCircle fontSize="large" color="primary" />
            </ListItemAvatar>
            <Typography fontSize={{ xs: "10px", md: "16px" }}>
              Experienced staff W/Pet CPR/First Aid Training
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <CheckCircle fontSize="large" color="primary" />
            </ListItemAvatar>
            {/* <ListItemText primary="Experienced staff W/Pet CPR/First Aid Training" /> */}
            <Typography fontSize={{ xs: "10px", md: "16px" }}>
              Experienced staff W/Pet CPR/First Aid Training
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
