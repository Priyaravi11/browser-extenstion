import React from "react";
import PriceComparison from "../components/PriceComparison";
import DiscountAlerts from "../components/DiscountAlerts";
import StockChecker from "../components/StockChecker";
import SmartBuy from "../components/SmartBuy";

const Popup = () => {
  return (
    <div style={{ padding: "10px", width: "300px" }}>
      <h2>Smart Price Finder</h2>
      <PriceComparison />
      <DiscountAlerts />
      <StockChecker />
      <SmartBuy />
    </div>
  );
};

export default Popup;
