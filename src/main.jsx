import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange, blue, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: orange[200],
      main: orange[400],
      dark: orange[700],
      darker: orange[900],
    },
    secondary: {
      light: blue[200],
      main: blue[200],
      dark: blue[700],
      darker: blue[900],
    },
    mute: {
      light: grey[200],
      main: grey[200],
      dark: grey[700],
      darker: grey[900],
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
