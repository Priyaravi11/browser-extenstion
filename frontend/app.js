import React from "react";
import Popup from "./pages/Popup";
import { PriceProvider } from "./context/PriceContext";

function App() {
  return (
    <PriceProvider>
      <Popup />
    </PriceProvider>
  );
}

export default App;
