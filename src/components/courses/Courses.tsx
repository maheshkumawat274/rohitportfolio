import React from "react";

const Courses: React.FC = () => {
  return (
    <section className="relative bg-[#232323] py-32 min-h-[40vh] flex items-center justify-center">
      <div
        className="max-w-2xl w-full flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#2e2a2a] border border-[#332d2e] shadow-lg backdrop-blur-lg"
        style={{ filter: "blur(2.5px)", pointerEvents: "none" }}
      >
        <div className="p-12 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Courses</h2>
          <p className="text-lg text-[#c4c4c4]">All new content, tools and resources for creators.<br/>Launching Soon!</p>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#0b0b0c] bg-opacity-70 px-8 py-4 rounded-2xl">
          <span className="text-3xl md:text-5xl font-bold text-[#1ec258] opacity-95">Coming Soon</span>
        </div>
      </div>
    </section>
  );
};

export default Courses;
