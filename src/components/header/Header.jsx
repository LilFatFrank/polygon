import { Typography, Box } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import "./Header.scss";

const Header = () => {
  const { active, user } = useContext(AppContext);

  return (
    <Box component="div" className="header">
      <Typography>Test Project</Typography>
      <Typography>
        {active
          ? `${user?.attributes?.ethAddress?.slice(
              0,
              8
            )}...${user?.attributes?.ethAddress?.slice(
              user?.attributes?.ethAddress?.length - 4
            )}`
          : "CONNECT TO WALLET"}
      </Typography>
    </Box>
  );
};

export default Header;
