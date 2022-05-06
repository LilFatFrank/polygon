import { Box, Button, Typography } from "@mui/material";
import { Header } from "..";
import "./Landing.scss";
import Show3D from "./sections/Show3D";

const Landing = ({
  title,
  description,
  buttonLabel,
  loading,
  loadingLabel,
  onClick
}) => {
  return (
    <>
      <Header />
      {loading ? (
        <Box component="div" className="loading">
          <Typography variant="h2">
            {loadingLabel || "YOUR MINTING IS IN PROGRESS"}
          </Typography>
          <Box component="div" className="dots">
            <Box className="dot-1" />
            <Box className="dot-2" />
            <Box className="dot-3" />
          </Box>
        </Box>
      ) : (
        <Box component="div" className="landing">
          {/* rendered a donut instead. Couldn't convert to glb properly.Followed a tutorial. */}
          <Show3D />
          <Box component="div" className="content">
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h6">{description}</Typography>
            <Button variant="contained" className="button" onClick={onClick}>
              {buttonLabel}
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Landing;
