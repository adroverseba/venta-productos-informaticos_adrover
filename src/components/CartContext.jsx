import { createContext, useState } from "react";

export const CartContext = createContext();
//se llama asi porque me sirve para saber que elementos se encuentran agregados en el carrito
// queriendo que se comparta todo el estado global con toda la app se realiza lo siguiente
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    // tomo el contador "qty" y verifico primero si ya existe el item en el array
    let found = cartList.find((product) => product.idItem === item.id);
    if (found === undefined) {
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
      setCartList([...cartList]);
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.idItem !== id);
    setCartList(result);
  };
  //calculo del monto total por producto
  const calcTotalPerItem = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].costItem * cartList[index].qtyItem;
  };

  const calcTotal = () => {
    let totalPerItem = cartList.map((item) => calcTotalPerItem(item.idItem));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  // arranco la cuenta desde cero en el reduce
  const calcItemsQty = () => {
    let qtys = cartList.map((item) => item.qtyItem);
    return qtys.reduce(
      (acumulador, valorActual) => acumulador + valorActual,
      0
    );
  };

  // en value le estoy pasando un estado global y una funcion global - paso todo dentro de un objeto
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteItem,
        calcTotalPerItem,
        calcTotal,
        calcItemsQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
