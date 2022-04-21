import NavBar from "../components/NavBar";
import NotFoundPage from "../components/NotFoundPage";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../components/Cart";
import CartContextProvider from "../components/CartContext";

const Home = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default Home;
