import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <Box sx={{ display: "flex", mt: "5rem" }}>
      <CircularProgress />
    </Box>
  );
}
