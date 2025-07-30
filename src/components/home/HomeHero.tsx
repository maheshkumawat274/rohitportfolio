
// Section1.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Homebtn1 from '../btns/Homebtn1';

const HomeHero: React.FC = () => {
  return (
    
    <section
      className="w-full h-[60vh] md:h-screen flex items-center bg-cover bg-[70%_center] lg:bg-center"
      style={{ backgroundImage: "url('/imgs/home.jpg')" }} // 👈 your background img
    >
     <div className="absolute h-[70.5vh] md:h-[110.5vh] inset-0 bg-gradient-to-r from-black/100 via-black/40 to-transparent"></div>

      <div className="relative flex-1 px-2 sm:px-14">
          <div className="text-[#1ec258] text-2xl mb-2">Hello, I'm</div>
          <h1 className="text-5xl md:text-8xl lg-text-5xl font-bold text-white leading-tight mb-4">Rohit Prashar</h1>
          <p className="text-2xl md:text-4xl text-[#d5d0cd] mb-2">Build Your Digital Presence with Rohit Prashar</p>
          <p className="text-md md:text-xl text-[#787d8d] mb-8">With 4 Years of Experience in Content Creation</p>
          <div className="flex space-x-4">
            <button><Link to='/podcast'><Homebtn1/></Link></button>
            <button className="bg-transparent border border-[#1ec258] hover:bg-[#1ec258] hover:text-white text-[#1ec258] font-bold py-3 px-4 sm:px-8 rounded-full text-md sm:text-xl">
              <a href="https://calendly.com/rohitprasharwork/30min"
              target="_blank"
              rel="noopener noreferrer">↳ Schedule a Consultation</a>
            </button>
          </div>
        </div>
    </section>
  );
};

export default HomeHero;
