function Contact() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6">Hubungi Kami</h1>

        <input
          type="text"
          placeholder="Nama"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <textarea
          rows="5"
          placeholder="Pesan"
          className="w-full border rounded-lg p-3 mb-4"
        ></textarea>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Kirim Pesan
        </button>
      </div>
    </div>
  );
}

export default Contact;
