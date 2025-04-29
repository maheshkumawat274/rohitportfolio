// Section1.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Section1: React.FC = () => {
  return (
    <section
      className="w-full h-[60vh] sm:h-screen flex items-center bg-cover bg-[70%_center] lg:bg-center"
      style={{ backgroundImage: "url('./imgs/home.png')" }} // 👈 your background img
    >
      <div className="absolute h-[71vh] sm:h-screen inset-0 bg-black opacity-50 sm:opacity-0"></div>
      <div className="relative flex-1 px-2 sm:px-14">
          <div className="text-[#1ec258] text-2xl mb-2">Hello Hello, I'm</div>
          <h1 className="text-5xl md:text-8xl lg-text-5xl font-bold text-white leading-tight mb-4">Rohit Prashar</h1>
          <p className="text-2xl md:text-4xl text-[#d5d0cd] mb-2">Build Your Digital Presence with Rohit Prashar</p>
          <p className="text-md md:text-xl text-[#787d8d] mb-8">With 4 Years of Experience in Content Creation</p>
          <div className="flex space-x-4">
            <button className="bg-[#1ec258] hover:bg-[#0a350e] text-white font-bold py-3 px-4 sm:px-8 rounded-full text-md sm:text-xl"><Link to='/podcast'>Watch My Podcasts</Link></button>
            <button className="bg-transparent border border-[#1ec258] hover:bg-[#1ec258] hover:text-white text-[#1ec258] font-bold py-3 px-4 sm:px-8 rounded-full text-md sm:text-xl">
              <a href="https://whatsapp.com/channel/0029Va9ciRxIHphDsqDdFM3r"
              target="_blank"
              rel="noopener noreferrer">Reach me</a>
            </button>
          </div>
        </div>
    </section>
  );
};

export default Section1;
