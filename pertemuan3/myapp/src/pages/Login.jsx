import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
        {/* Kiri */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-700 text-white p-10">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang </h1>

          <p className="text-center text-lg">
            Website ini dibuat menggunakan React, Vite, Tailwind CSS, dan React
            Router.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Login"
            className="w-48 mt-8"
          />
        </div>

        {/* Kanan */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Login
          </h2>

          <p className="text-gray-500 text-center mb-8">
            Silakan masuk ke akun Anda
          </p>

          <input
            type="email"
            placeholder="Masukkan Email"
            className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            placeholder="Masukkan Password"
            className="w-full border rounded-lg p-3 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <Link
            to="/home"
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>

          <p className="text-center mt-6 text-gray-600">
            Belum punya akun?
            <Link
              to="/register"
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
