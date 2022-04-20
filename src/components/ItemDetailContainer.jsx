import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { products } from "../utils/products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    customFetch(
      2000,
      products.find((item) => item.id === parseInt(idItem))
      // uso metodo find para obtener un objeto
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
