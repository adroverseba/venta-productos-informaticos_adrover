import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <Badge color="secondary" badgeContent={4}>
      <ShoppingCartOutlined />
    </Badge>
  );
};

export default CartWidget;
