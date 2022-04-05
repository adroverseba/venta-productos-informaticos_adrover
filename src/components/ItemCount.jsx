import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { MainProductContainer, ProductCountContainer } from "./styledComponent";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
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
      {stock ? (
        <Button variant="text" color="primary" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
      ) : (
        <Button variant="text" disabled>
          Agregar al carrito
        </Button>
      )}
    </MainProductContainer>
  );
};

export default ItemCount;
