import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-teal-500 to-blue-600 px-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">
        {/* Kiri */}
        <div className="hidden md:flex flex-col justify-center items-center bg-green-600 text-white p-10">
          <h1 className="text-4xl font-bold mb-4">Buat Akun Baru 🚀</h1>

          <p className="text-center text-lg">
            Daftarkan akun Anda untuk mulai menggunakan website ini.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
            alt="Register"
            className="w-48 mt-8"
          />
        </div>

        {/* Kanan */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Register
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Lengkapi data berikut
          </p>

          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="password"
            placeholder="Konfirmasi Password"
            className="w-full border rounded-lg p-3 mb-6 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <Link
            to="/"
            className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Daftar
          </Link>

          <p className="text-center mt-6 text-gray-600">
            Sudah punya akun?
            <Link
              to="/"
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
