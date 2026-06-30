function Products() {
  const products = [
    {
      name: "Laptop",
      price: "Rp 12.000.000",
      emoji: "💻",
    },
    {
      name: "Keyboard",
      price: "Rp 450.000",
      emoji: "⌨️",
    },
    {
      name: "Headset",
      price: "Rp 800.000",
      emoji: "🎧",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-8">
      <h1 className="text-4xl font-bold text-center mb-10">Produk Kami</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition"
          >
            <div className="text-6xl text-center">{item.emoji}</div>

            <h2 className="text-2xl font-bold mt-4">{item.name}</h2>

            <p className="text-gray-500 mt-2">{item.price}</p>

            <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
