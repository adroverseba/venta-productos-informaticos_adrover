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

export const Cart = () => {
  const test = useContext(CartContext);
  console.log(test.cartList);

  return (
    <div className="container" style={{ height: "95vh" }}>
      <WrapperCart>
        <TitleCart>YOUR CART</TitleCart>
        {test.cartList.length > 0 && (
          <ContentCart>
            {test.cartList.map((item) => (
              <Product>
                <ProductDetail>
                  <ImageCart src={item.image[0]} />
                  <Details>
                    <span>
                      <b>Product:</b> {item.name}
                    </span>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>2 items</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>$ {item.cost} each</ProductPrice>
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
