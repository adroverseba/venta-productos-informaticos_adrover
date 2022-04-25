import { useContext } from "react";
import { CartContext } from "./CartContext";
import {
  WrapperCart,
  TitleCart,
  ContentCart,
  Product,
  ProductDetail,
  ImageCart,
  Details,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
} from "./styledComponent";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Cart = () => {
  const test = useContext(CartContext);
  // console.log(test.cartList);

  return (
    <div className="container" style={{ height: "95vh" }}>
      <WrapperCart>
        <TitleCart>YOUR CART</TitleCart>
        <Top>
          <Link to="/">
            <button type="button" className="btn btn-primary">
              seguir comprando
            </button>
          </Link>
          {test.cartList.length > 0 ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={test.removeList}
            >
              DELETE ALL PRODUCTS
            </button>
          ) : (
            <h2>Your cart is empty</h2>
          )}
        </Top>
        {test.cartList.length > 0 && (
          <ContentCart>
            {test.cartList.map((item) => (
              <Product key={item.idItem}>
                <ProductDetail>
                  <ImageCart src={item.imgItem} />
                  <Details>
                    <span>
                      <b>Product:</b> {item.nameItem}
                    </span>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => test.deleteItem(item.idItem)}
                    >
                      Borrar Producto
                    </button>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>{item.qtyItem} items</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>$ {item.costItem} each</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </ContentCart>
        )}
      </WrapperCart>
    </div>
  );
};

export default Cart;
