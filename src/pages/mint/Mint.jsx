import { Alert, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LandingSkeleton } from "../../components";
import { AppContext } from "../../context/Context";

const Mint = () => {
  const { active, smartContract, user, biconomy } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [burned, setBurned] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    message: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!active) navigate("/");
  }, [active]);

  const claimNFT = async () => {
    setLoading(true);
    setClaimed(false);
    setBurned(false);
    await smartContract.methods
      .claimNFT(user?.attributes?.ethAddress)
      .send({
        from: user?.attributes?.ethAddress,
        signatureType: biconomy.EIP712_SIGN
      })
      .then((data) => {
        if (data && data.transactionHash) {
          setLoading(false);
          navigate("/burn");
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.message === "execution reverted: Only one mint per address") {
          setClaimed(true);
        }
        if (error.message === "execution reverted: NFT already claimed!") {
          setBurned(true);
        }
        setAlert({
          ...alert,
          open: true,
          message: error.message
        });
        console.log(error.message);
      });
  };

  return (
    <Box component="div" className="common-gradient" style={{ height: "100%" }}>
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
        title="MINT YOUR NFT"
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut nulla donec egestas."
        }
        buttonLabel={
          claimed ? "Go to Burn" : burned ? "Go to Home" : "Mint NFT"
        }
        onClick={
          claimed
            ? () => navigate("/burn")
            : burned
            ? () => navigate("/")
            : claimNFT
        }
        loading={loading}
      />
    </Box>
  );
};

export default Mint;
