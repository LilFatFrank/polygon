import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Burn, Home, Mint } from "../pages";

const Wrapper = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/burn" element={<Burn />} />
        {/* redirecting to home in case of a not found */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Wrapper;
