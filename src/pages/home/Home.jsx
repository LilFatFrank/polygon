import { Alert, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LandingSkeleton, Modal } from "../../components";
import { AppContext } from "../../context/Context";
import { HorizontalScroll, Developers, LoremIpsum } from "./sections";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    message: ""
  });
  const navigate = useNavigate();
  const { active } = useContext(AppContext);

  useEffect(() => {
    if (active)
      setAlert({
        ...alert,
        open: true,
        message: "Wallet connected"
      });
    else
      setAlert({
        ...alert,
        open: true,
        message: "Please use the MATIC Mumbai Testnet"
      });
  }, [active]);

  return (
    <Box component="div" className="common-gradient">
      <Snackbar
        open={alert.open}
        anchorOrigin={{
          vertical: alert.vertical,
          horizontal: alert.horizontal
        }}
        autoHideDuration={3000}
        onClose={() =>
          setAlert({
            ...alert,
            open: false,
            message: ""
          })
        }
      >
        <Alert severity="info">{alert.message}</Alert>
      </Snackbar>
      <LandingSkeleton
        title={"CONNECT YOUR WALLET"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut nulla donec egestas."
        }
        buttonLabel={active ? "Go to Mint" : "Connect Wallet"}
        onClick={active ? () => navigate("/mint") : () => setOpenModal(true)}
      />
      <HorizontalScroll />
      <Developers />
      <LoremIpsum />
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </Box>
  );
};

export default Home;
