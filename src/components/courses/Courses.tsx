

const ComingSoonCourses = () => {
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
        
          <a
    href="https://youtube.com/@therohitprashar" // ya jaha course announce karoge
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-white hover:bg-black hover:text-white text-black px-6 py-3 rounded-lg shadow-md hover:border-1 border-white transition duration-300"
  >
    Get Notified
  </a>
      </div>
    </div>
  );
};

export default ComingSoonCourses;
