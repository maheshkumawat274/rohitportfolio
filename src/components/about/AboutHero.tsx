import React from "react";

const AboutUsHero: React.FC = () => {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[80vh] bg-cover"
      style={{
        backgroundImage: `url('/imgs/home.jpg')`,
        backgroundPosition: "top center",
      }}
    >
      {/* Left gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/50 to-transparent" />

      {/* Text aligned to the left and vertically centered */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-20">
        <div className="max-w-2xl text-left">
          <h1 className="text-gray-300 text-3xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-sm text-gray-3500 mb-1">
            <span className="text-green-400 font-medium">Home</span>{" "}
            <span className="text-white">/ About Us</span>
          </p>

          {/* 👇 Description */}
          <p className="text-sm sm:text-lg text-gray-300 mt-4 leading-relaxed">
           Hi, I’m Rohit Prashar — a content creator passionate about helping students, creators, and brands grow through impactful content.
           Through my YouTube channel, I guide college students in learning new skills, starting freelancing, finding internships, and even launching startups.
           I also collaborate with clients to boost their social media presence through content creation, video editing, and strategy planning.
          Whether you're starting your journey or aiming for your next big milestone — I’m here to help you grow!

          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
