import { createContext, useEffect, useState } from "react";
import { useChain, useMoralis } from "react-moralis";
import CONFIG from "../config/config.json";
import ABI from "../config/abi.json";
import Web3 from "web3";
import { Biconomy } from "@biconomy/mexa";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { authenticate, isAuthenticated, logout, Moralis, user } = useMoralis();
  const { chainId } = useChain();
  const [smartContract, setSmartContract] = useState();
  const [biconomyObj, setBiconomyObj] = useState();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isAuthenticated && chainId === "0x13881") setActive(true);
  }, [isAuthenticated, chainId]);

  useEffect(() => {
    if (active) initializeBiconomy();
  }, [active]);

  const connect = async (provider) => {
    await authenticate({
      provider,
      chainId: 80001,
      ...(provider === "walletconnect"
        ? {
            mobileLinks: ["metamask"]
          }
        : undefined)
    });
  };

  const disconnect = async () => await logout();

  const initializeBiconomy = async () => {
    const walletWeb3 = await Moralis.enableWeb3();
    const networkProvider = new Web3.providers.HttpProvider(CONFIG.RPC_URL);
    const biconomy = new Biconomy(networkProvider, {
      walletProvider: walletWeb3.provider,
      apiKey: process.env.REACT_APP_BICONOMY_API_KEY
    });

    const web3 = new Web3(biconomy);

    setBiconomyObj(biconomy);

    biconomy
      .onEvent(biconomy.READY, () => {
        const contract = new web3.eth.Contract(ABI, CONFIG.CONTRACT_ADDRESS);
        console.log(contract);
        setSmartContract(contract);
      })
      .onEvent(biconomy.ERROR, (error, message) => {
        console.log(error);
      });
  };

  const providerValue = {
    active,
    isAuthenticated,
    chainId,
    connect,
    disconnect,
    smartContract,
    user,
    biconomy: biconomyObj
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
