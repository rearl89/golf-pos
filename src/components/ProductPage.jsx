import { useState } from "react";
import { prices } from "../data/products";

function ProductPage({ product, cart, setCart, setCurrentPage }) {
  const [condition, setCondition] = useState("Mint");
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const item = {
      id: `${product.id}-${condition}`,
      name: `${product.brand} ${product.name}`,
      condition,
      quantity,
      price: prices[`${product.brand} ${product.name}`][condition] * quantity,
    };
    setCart([...cart, item]);
    setCurrentPage("home");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <button
        onClick={() => setCurrentPage("home")}
        className="text-blue-600 mb-4"
      >
        ← Back to Home
      </button>
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-contain mb-4"
        />
        <div className="md:ml-4">
          <h2 className="text-2xl font-bold">
            {product.brand} {product.name}
          </h2>
          <p className="mt-2">{product.description}</p>
          <div className="mt-4">
            <label className="block mb-2">Condition:</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="border p-2 w-full"
            >
              <option value="Mint">Mint (5A)</option>
              <option value="NearMint">Near Mint (4A)</option>
              <option value="Good">Good (3A)</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-2">Quantity (dozens):</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border p-2 w-full"
            >
              {[1, 2, 3, 4, 5, 6].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
          <p className="mt-4 text-lg font-semibold">
            Price: $
            {(
              prices[`${product.brand} ${product.name}`][condition] * quantity
            ).toFixed(2)}
          </p>
          <button
            onClick={addToCart}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
