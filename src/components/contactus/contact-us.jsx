import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const ContactUs = ({ contactusRef }) => {
  return (
    <Grid
      ref={contactusRef}
      container
      sx={{
        paddingLeft: { xs: "50px", md: "180px" },
        paddingRight: { xs: "50px", md: "180px" },
        mt: "120px",
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"start"}
        jus
      >
        <Typography fontSize={{ xs: "25px", md: "40px" }} fontWeight={"bold"}>
          Contact Us
        </Typography>
        <Typography fontWeight={"light"} fontSize={"16px"}>
          We will reach out to you soon.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <TextField label="Email" variant="outlined" />
            <TextField label="Message" variant="outlined" multiline rows={5} />
            <Button width={"80px"} variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
