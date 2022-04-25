import { createContext, useState } from "react";

export const CartContext = createContext();
//se llama asi porque me sirve para saber que elementos se encuentran agregados en el carrito
// queriendo que se comparta todo el estdo global con toda la app se realiza lo siguiente
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    // tomo el contador "qty" y verifico primero si ya existe en el array
    let found = cartList.find((product) => product.idItem === item.id);
    if (found == undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          imgItem: item.image[0],
          nameItem: item.name,
          costItem: item.cost,
          qtyItem: qty,
        },
      ]);
    } else {
      // al encontrarlo aumentamos la cantidad de ese producto
      found.qtyItem += qty;
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.idItem != id);
    setCartList(result);
  };

  // en value le estoy pasando un estado global y una funcion global - paso todo dentro de un objeto
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeList, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
