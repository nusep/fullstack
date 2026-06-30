function Profile() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8 text-center">
        <img src="/ibnu.jpeg" alt="Profile" className="w-32 mx-auto" />

        <h1 className="text-3xl font-bold mt-5">Ibnu Septian</h1>

        <p className="text-gray-500 mt-2">Mahasiswa Informatika</p>

        <hr className="my-5" />

        <p>
          Sedang belajar React JS, Tailwind CSS, dan React Router untuk membuat
          website modern.
        </p>
      </div>
    </div>
  );
}

export default Profile;
