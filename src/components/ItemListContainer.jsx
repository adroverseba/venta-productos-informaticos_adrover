import customFetch from "../utils/customFetch";
import { useState, useEffect } from "react";
import { products } from "../utils/products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  //componentDidMount
  useEffect(() => {
    if (idCategory == undefined) {
      customFetch(2000, products)
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    } else {
      customFetch(
        2000,
        products.filter((item) => item.categoryId === parseInt(idCategory))
      )
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <div className="container">
      <div className="row gy-3">
        <ItemList items={datos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
