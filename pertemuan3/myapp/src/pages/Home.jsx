import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-[80vh] flex items-center">
      <div className="container mx-auto px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Selamat Datang di MyWebsite</h1>

        <p className="text-xl mb-8">
          Website ini dibuat menggunakan React, Vite, Tailwind CSS, dan React
          Router.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/products"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Lihat Produk
          </Link>

          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
