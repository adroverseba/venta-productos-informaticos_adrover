import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { MainProductContainer, ProductCountContainer } from "./styledComponent";

//{ stock = 0, initial = 1, onAdd }

const ItemCount = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount(initial);
  // }, []);

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <MainProductContainer>
      <ProductCountContainer>
        <Button variant="text" color="primary" onClick={decrement}>
          <Remove />
        </Button>
        <span>{count}</span>
        <Button variant="text" color="primary" onClick={increment}>
          <Add />
        </Button>
      </ProductCountContainer>
      <Button variant="text" color="primary">
        Agregar al carrito
      </Button>
    </MainProductContainer>
  );
};

export default ItemCount;
