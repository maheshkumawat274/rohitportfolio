

const ComingSoon = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/imgs/comingsoon.jpg')", // Change this path as per your image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We're Launching Soon
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Our website is under construction. Stay tuned!
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full text-black w-64"
          />
          <button
            type="submit"
            className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
