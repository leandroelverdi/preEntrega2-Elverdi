import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext";
import { About } from "./components/About";

export const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <main className="flex justify-center flex-col">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenido" />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Categorias" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};
