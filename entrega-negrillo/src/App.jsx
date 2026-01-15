import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Contact from "./pages/Contacto.jsx";
import Checkout from "./pages/CheckOut.jsx";
import Footer from "./components/Footer.jsx"; 

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
