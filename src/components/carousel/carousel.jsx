import Cat1 from "../../assets/cat1.jpg";
import Cat2 from "../../assets/cat2.jpg";
import Cat3 from "../../assets/cat3.jpg";
import Cat4 from "../../assets/cat4.jpg";
import { Box, Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function Item({ imageSrc }) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "center",
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
        }}
        alt="Logo"
      />
    </Paper>
  );
}

export default function MyCarousel() {
  return (
    <Box
      sx={{
        width: "70%",
        height: "100px",
      }}
    >
      <Carousel>
        <Item key={1} imageSrc={Cat1} />
        <Item key={2} imageSrc={Cat3} />
        <Item key={3} imageSrc={Cat4} />
      </Carousel>
    </Box>
  );
}
