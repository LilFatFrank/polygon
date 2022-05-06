import { Box, Typography } from "@mui/material";
import "./LoremIpsum.scss";

const LoremIpsum = () => {
  return (
    <Box component="div" className="loremIpsum">
      <Box className="loremIpsum-1">
        <Typography variant="h2" className='typography'>
          LOREM IPSUM
          <br />
          <span style={{ color: "white" }}>DOLOR SIT AMET</span>
        </Typography>
        <img src="./assets/lorem-ipsum-1.png" alt="lorem-ipsum" />
      </Box>
      <Box className="loremIpsum-1">
        <Typography variant="h2" className='typography'>
          LOREM IPSUM
          <br />
          <span style={{ color: "white" }}>DOLOR SIT AMET</span>
        </Typography>
        <img src="./assets/lorem-ipsum-2.png" alt="lorem-ipsum" />
      </Box>
    </Box>
  );
};

export default LoremIpsum;
