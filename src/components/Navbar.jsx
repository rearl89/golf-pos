function Navbar({ setCurrentPage, setShowCart }) {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <button
        onClick={() => setCurrentPage("home")}
        className="text-2xl font-bold"
      >
        Brother's Balls
      </button>
      <button onClick={() => setShowCart(true)} className="text-2xl">
        🛒
      </button>
    </nav>
  );
}

export default Navbar;
