// import customFetch from "../utils/customFetch";
import { useState, useEffect } from "react";
// import { products } from "../utils/products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { fetchFromFirestore } from "../utils/fetchFirestore";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  //componentDidMount
  useEffect(() => {
    fetchFromFirestore(idCategory)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  // verificar este useEffect
  // useEffect(() => {
  //   return () => {
  //     setDatos([]);
  //   };
  // }, []);

  return (
    <div className="container">
      <div className="row gy-3">
        <ItemList items={datos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
