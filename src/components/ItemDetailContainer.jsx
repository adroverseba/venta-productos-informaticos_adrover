import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { products } from "../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});

  useEffect(() => {
    customFetch(2000, products[2])
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
