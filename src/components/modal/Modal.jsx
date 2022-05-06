import { Box, Modal as MUIModal, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import Sprite from "../sprite/Sprite";
import "./Modal.scss";

const Modal = ({ open, close }) => {
  const { connect } = useContext(AppContext);

  return (
    <MUIModal open={open} onClose={close}>
      <Box className='modal'>
        <Box className="modal-title-section">
          <Typography id="modal-modal-title">Connect Wallet</Typography>
        </Box>
        <Box className="buttons">
          <Box
            className="button-row"
            onClick={() => {
              connect("metamask");
              close();
            }}
          >
            <Box className="icon-name">
              <Sprite id="metamask" height={32} width={32} />
              <Box className='name'>
                <Typography style={{ fontWeight: "bold" }}>Metamask</Typography>
                <Typography>Connect your Metamask wallet</Typography>
              </Box>
            </Box>
            <Typography className="popular">Popular</Typography>
          </Box>
          <Box
            className="button-row"
            onClick={() => {
              connect("walletconnect");
              close();
            }}
          >
            <Box className="icon-name">
              <img
                src="./assets/walletconnect.png"
                alt="walletconnect"
                height={32}
                width={32}
              />
              <Box className='name'>
                <Typography style={{ fontWeight: "bold" }}>
                  WalletConnect
                </Typography>
                <Typography>Scan with WalletConnect to connect</Typography>
              </Box>
            </Box>
            <img
              src="./assets/scanner.png"
              alt="scanner"
              height={18}
              width={18}
            />
          </Box>
        </Box>
      </Box>
    </MUIModal>
  );
};

export default Modal;
