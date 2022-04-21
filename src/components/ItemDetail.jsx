import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    alert(" Tienes seleccionado " + qty + "  item ");
    setItemCount(qty);
    test.addToCart(item);
  };

  return (
    <div className="container my-5 itemDetail-container">
      {item.name ? (
        <div className="row">
          <div className="col-md-6 order-md-1">
            <img
              src={item.image[0]}
              alt={item.name}
              style={{ maxWidth: "500px" }}
            />
          </div>
          <div className="col-md-6 order-md-2 d-flex flex-md-column justify-content-evenly">
            <h1 className="my-2">{item.name}</h1>
            <p className="my-2 py-2">{item.description}</p>
            <span className="display-6 my-3">${item.cost}</span>
            <p>{item.stock} unidades en stock</p>
            {itemCount === 0 ? (
              <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            ) : (
              <Checkout />
            )}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;
