import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductPage from "./components/ProductPage";
import CartModal from "./components/CartModal";
import { products } from "./data/products";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setCurrentPage={setCurrentPage} setShowCart={setShowCart} />
      {currentPage === "home" ? (
        <div className="p-4">
          <h1 className="text-3xl font-bold text-center mb-6">
            Brother's Balls - Used Golf Balls
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setCurrentPage={setCurrentPage}
              />
            ))}
          </div>
        </div>
      ) : (
        <ProductPage
          product={products.find((p) => `product-${p.id}` === currentPage)}
          cart={cart}
          setCart={setCart}
          setCurrentPage={setCurrentPage}
        />
      )}
      {showCart && <CartModal cart={cart} setShowCart={setShowCart} />}
    </div>
  );
}

export default App;
