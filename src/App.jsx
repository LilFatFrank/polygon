import { MoralisProvider } from "react-moralis";
import { AppContextProvider } from "./context/Context";
import Wrapper from "./wrapper/Wrapper";
import "./App.scss";
import { theme } from "./style/style";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (
    <MoralisProvider
      serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
      appId={process.env.REACT_APP_MORALIS_APP_ID}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <Wrapper />
        </AppContextProvider>
      </ThemeProvider>
    </MoralisProvider>
  );
}

export default App;
