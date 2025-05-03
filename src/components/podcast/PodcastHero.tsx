import React from "react";

const PodcastHero: React.FC = () => {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url('./imgs/podcasthero.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative z-10 flex justify-center items-center h-full px-6 md:px-20">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
            Podcast
          </h1>
          <p className="text-sm">
            <span className="text-green-400 font-medium">Home</span>{" "}
            <span className="text-white">/ Podcast</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PodcastHero;
