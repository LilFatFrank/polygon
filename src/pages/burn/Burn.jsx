import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LandingSkeleton, Sprite } from "../../components";
import { AppContext } from "../../context/Context";

const Burn = () => {
  const { active, smartContract, user, biconomy } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
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

  const burnNFT = async () => {
    setLoading(true);
    await smartContract.methods
      .burnNFT()
      .send({
        from: user?.attributes?.ethAddress,
        signatureType: biconomy.EIP712_SIGN
      })
      .then((data) => {
        if (data && data.transactionHash) {
          setLoading(false);
          setBurned(true);
          setAlert({
            ...alert,
            open: true,
            message: "Burn successful."
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        setBurned(false);
        setAlert({
          ...alert,
          open: true,
          message: error.message
        });
        console.log(error);
      });
  };
  return (
    <Box component="div" className="common-gradient" style={{ height: "100%" }}>
      <LandingSkeleton
        title={"BURN YOUR PACK"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut nulla donec egestas."
        buttonLabel={
          burned ? (
            "Go back home"
          ) : (
            <>
              <Sprite id="burn" width={18} height={21} />
              <>Burn NFT</>
            </>
          )
        }
        onClick={burned ? () => (window.location.href = "/") : burnNFT}
        loading={loading}
        loadingLabel={"BURNING YOUR NFT"}
      />
    </Box>
  );
};

export default Burn;
