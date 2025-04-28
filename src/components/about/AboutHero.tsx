import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://ext.same-assets.com/3276442691/4276442691.png"
          alt="Creator About"
          className="w-72 rounded-2xl shadow-lg mb-8 md:mb-0"
        />
        <div>
          <p className="text-[#1ec258] mb-2 font-semibold text-xl">Mahalia Princeton</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-3">I've Created This Podcast Based on True Stories.</h2>
          <p className="text-[#d5d0cd] text-base md:text-lg mb-6">I'm an artist, writer, and podcast host. My background as a reporter helped me plan and create this award-winning podcast.</p>
          <button className="bg-[#1ec258] hover:bg-[#0a350e] text-white font-bold py-2 px-8 rounded-full">More About Me</button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
