import React, { createContext, useState } from "react";

export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [prices, setPrices] = useState([]);

  return (
    <PriceContext.Provider value={{ prices, setPrices }}>
      {children}
    </PriceContext.Provider>
  );
};
