function ProductCard({ product, setCurrentPage }) {
  return (
    <div
      className="border rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition bg-white"
      onClick={() => setCurrentPage(`product-${product.id}`)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">
        {product.brand} {product.name}
      </h3>
    </div>
  );
}

export default ProductCard;
