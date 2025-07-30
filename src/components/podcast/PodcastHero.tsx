import React from "react";

const PodcastHero: React.FC = () => {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[80vh] bg-cover"
      style={{
        backgroundImage: `url('/imgs/home.jpg')`,
        backgroundPosition: "top center",
      }}
    >
      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Text aligned to bottom center */}
      <div className="relative z-10 flex items-end justify-center h-full px-2 md:px-20 pb-5">
        <div className="max-w-3xl text-center">
          <h2 className="text-xl sm:text-5xl font-bold text-gray-300 leading-relaxed">
            The Rohit Prashar Show (हिन्दी)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PodcastHero;
