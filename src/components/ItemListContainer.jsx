import ItemCount from "./ItemCount";
import customFetch from "../utils/customFetch";
import { useState, useEffect } from "react";
import { products } from "../utils/products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    customFetch(2000, products)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, []);

  const onAdd = (item) => {
    alert(" Tienes seleccionado " + item + "  item ");
  };

  return (
    <div className="container">
      <h2>Hola mundo!</h2>
      <div className="row gy-3">
        <ItemList items={datos} />
      </div>

      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
