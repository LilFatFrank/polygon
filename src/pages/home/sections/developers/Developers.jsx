import { Box, Typography } from "@mui/material";
import "./Developers.scss";

const Developers = () => {
  return (
    <Box className="developers">
      <Box className="adarsh">
        <img src="./assets/aadarsh.png" alt="Adarsh" />
        <Box className="info">
          <Typography variant="h4">ADARSH</Typography>
          <Typography variant="h6">DEVELOPER</Typography>
        </Box>
      </Box>
      <Box className="joshua">
        <Box className="info">
          <Typography variant="h4">JOSHUA</Typography>
          <Typography variant="h6">DEVELOPER</Typography>
        </Box>
        <img src="./assets/joshua.png" alt="Joshua" />
      </Box>
    </Box>
  );
};

export default Developers;
