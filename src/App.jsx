import { Suspense, lazy, useRef } from "react";
import { Box, Container } from "@mui/material";
// import MyCarousel from "./components/carousel/carousel";
const MyCarousel = lazy(() => import("./components/carousel/carousel"));
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Loader from "./components/ui/loader";
import Services from "./components/services/services";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          backgroundColor: "#ffffe6",
          overflowX: { xs: "hidden", md: "visible" },
        }}
      >
        <Navbar aboutRef={aboutRef} servicesRef={servicesRef} />
        <Suspense fallback={<Loader />}>
          <MyCarousel />
        </Suspense>
        <About aboutRef={aboutRef} />
        <Services servicesRef={servicesRef} />
        <Footer />
      </Box>
    </>
  );
}

export default App;
