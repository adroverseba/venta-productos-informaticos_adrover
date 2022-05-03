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
  Top,
  Summary,
  Bottom,
  SummaryItem,
  InfoCart,
} from "./styledComponent";
import { Link } from "react-router-dom";
// importo las funciones de Firebase
import {
  serverTimestamp,
  updateDoc,
  collection,
  doc,
  setDoc,
  increment,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";

export const Cart = () => {
  const test = useContext(CartContext);
  // console.log(test.cartList);

  const createOrder = () => {
    let order = {
      buyer: {
        name: "Sheldon Cooper",
        email: "doctorsheldocooper@gmail.com",
        phone: "3555449321",
      },
      date: serverTimestamp(),
      items: test.cartList.map((item) => ({
        id: item.idItem,
        title: item.nameItem,
        price: item.costItem,
        qty: item.qtyItem,
      })),
      total: test.calcTotal(),
    };
    console.log(order.items);

    // utilizo la funcion de la documentacion para descontar los productos comprados del stock, se usa increment()
    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem),
      });
    });

    const createOrderInFirestore = async () => {
      // creamos la coleccion y el documento
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) =>
        alert(
          "Your order has been created. Please take note of the ID of tour Order. \n\n\nORDER ID: " +
            result.id
        )
      )
      .catch((err) => console.log(err));

    test.removeList();
  };

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
        <ContentCart>
          <Bottom>
            <InfoCart>
              {test.cartList.length > 0 &&
                test.cartList.map((item) => (
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
                        <ProductPrice> ${item.costItem} each</ProductPrice>
                      </ProductAmountContainer>
                      <ProductPrice>
                        $ {test.calcTotalPerItem(item.idItem)} Total
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                ))}
            </InfoCart>
            {test.cartList.length > 0 && (
              <Summary>
                <h2>Resumen de la Compra</h2>
                <SummaryItem>
                  <h4>Total: </h4>${test.calcTotal()}
                </SummaryItem>
                <SummaryItem>
                  <button
                    onClick={createOrder}
                    type="button"
                    class="btn btn-light"
                  >
                    Terminar mi compra
                  </button>
                </SummaryItem>
              </Summary>
            )}
          </Bottom>
        </ContentCart>
      </WrapperCart>
    </div>
  );
};

export default Cart;
