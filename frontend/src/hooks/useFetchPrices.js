import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPrices = (productUrl) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios.get(`https://api.example.com/prices?url=${productUrl}`)
      .then(response => setPrices(response.data))
      .catch(error => console.error(error));
  }, [productUrl]);

  return prices;
};

export default useFetchPrices;
