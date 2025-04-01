import React, { useContext } from "react";
import { PriceContext } from "../context/PriceContext";

const PriceComparison = () => {
  const { prices } = useContext(PriceContext);

  return (
    <div>
      <h3>Price Comparison</h3>
      {prices.length > 0 ? (
        prices.map((price, index) => <p key={index}>{price}</p>)
      ) : (
        <p>Fetching the best prices...</p>
      )}
    </div>
  );
};

export default PriceComparison;
