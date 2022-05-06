import { Box } from "@mui/material";
import "./HorizontalScroll.scss";

const HorizontalScroll = () => {
  const generateDivs = () => {
    const divs = [];
    for (let i = 1; i <= 25; i++) {
      divs.push(<div className="div" key={i}></div>);
    }
    return divs;
  };

  return (
    <Box className="container">
      <Box className="row">{generateDivs()}</Box>
      <Box className="row">{generateDivs()}</Box>
      <Box className="row">{generateDivs()}</Box>
    </Box>
  );
};

export default HorizontalScroll;
