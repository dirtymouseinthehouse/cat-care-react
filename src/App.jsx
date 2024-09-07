import { Suspense, lazy } from "react";
import { Box } from "@mui/material";
// import MyCarousel from "./components/carousel/carousel";
const MyCarousel = lazy(() => import("./components/carousel/carousel"));
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Loader from "./components/ui/loader";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: "#ffffe6",
      }}
    >
      <Navbar />
      <Suspense fallback={<Loader />}>
        <MyCarousel />
      </Suspense>
      <About />

      <Footer />
    </Box>
  );
}

export default App;
