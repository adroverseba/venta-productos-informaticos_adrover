import NavBar from "../components/NavBar";
import NotFoundPage from "../components/NotFoundPage";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
