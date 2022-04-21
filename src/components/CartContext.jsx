import { createContext, useState } from "react";

export const CartContext = createContext();
//se llama asi porque me sirve para saber que elementos se encuentran agregados en el carrito
// queriendo que se comparta todo el estdo global con toda la app se realiza lo siguiente
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    console.log("CartContextProvider", item);
    setCartList([...cartList, item]);
  };

  // en value le estoy pasando un estado global y una funcion global - paso todo dentro de un objeto
  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
