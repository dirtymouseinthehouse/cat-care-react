import Cat1 from "../../assets/cat1.jpg";
import Cat2 from "../../assets/cat2.jpg";
import Cat3 from "../../assets/cat3.jpg";
import Cat4 from "../../assets/cat4.jpg";
import Cat5 from "../../assets/cat5.jpg";
import Cat6 from "../../assets/cat6.jpg";
import Cat7 from "../../assets/cat7.jpg";
import { Box, Button, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function Item({ imageSrc }) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative", // Make the parent relative for overlay positioning
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        sx={{
          maxHeight: "300px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "20px",
          opacity: 0.8, // Add opacity to make it less focused
          filter: "blur(1px)", // Optional: Add a slight blur for a less sharp image
        }}
        alt="Carousel Image"
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
          borderRadius: "20px", // Match the border-radius of the image
        }}
      />
    </Paper>
  );
}

export default function MyCarousel({ headerRef }) {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%" },
        height: "100px",
      }}
      ref={headerRef}
    >
      <Carousel
        style={{
          position: "relative",
        }}
      >
        <Item key={1} imageSrc={Cat7} />
        <Item key={2} imageSrc={Cat6} />
        <Item key={3} imageSrc={Cat5} />
        <Item key={3} imageSrc={Cat1} />
      </Carousel>

      <Box
        sx={{
          position: "absolute",
          top: { xs: "40%", md: "50%" }, // Position from the top 50%
          left: "50%", // Position from the left 50%
          transform: "translate(-50%, -100%)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white", // Make sure the text is visible
              fontWeight: "bold",
              mb: 1, // Add margin bottom for spacing
            }}
          >
            We provide the right care for your furry friend.
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#F5F5F5",
              fontWeight: "100",
              mb: 2,
            }}
          >
            Book your appointment today, with cat care!
          </Typography>
        </Box>
        <Button color="primary" variant="contained">
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#F5F5F5",
            }}
          >
            Book Now
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
