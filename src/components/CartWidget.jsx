import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
// import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  // con esto puedo acceder a la info almacenada en el contecto
  // const test = useContext(CartContext);

  const test = useContext(CartContext);
  return (
    <Badge color="secondary" badgeContent={test.calcItemsQty()}>
      <ShoppingCartOutlined />
    </Badge>
  );
};

export default CartWidget;
