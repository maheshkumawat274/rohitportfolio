import React from 'react';
import { Link } from 'react-router-dom';
import Homebtn1 from '../btns/Homebtn1';
import './HomeHero.css';

const HomeHero: React.FC = () => {
  return (
    <section
      className="home-hero relative w-full h-[70vh] md:h-[90vh] flex items-end sm:items-center bg-cover bg-[70%_center] lg:bg-center py-2"
      style={{ backgroundImage: "url('/imgs/rohitnewhero.png')" }}
    >
      

      {/* CONTENT */}
      <div className="relative flex-1 px-2 sm:px-18">
        <div className="text-[#1ec258] text-2xl px-2">
          Hello, I'm
        </div>

        <h1 className="text-5xl md:text-8xl lg-text-5xl font-bold text-gray-100 leading-tight mb-0 sm:mb-4">
          Rohit Prashar
        </h1>

        <p className="text-2xl md:text-4xl text-gray-200 mb-1 sm:mb-2">
          Build Your Digital Presence with Rohit Prashar
        </p>

        <p className="text-md md:text-xl text-gray-300 mb-2 sm:mb-8">
          With 4 Years of Experience in Content Creation
        </p>

        <div className="block sm:flex space-y-2 text-center sm:text-start sm:space-x-4">
          <button>
            <Link to='/podcast'>
              <Homebtn1 />
            </Link>
          </button>

          <button className="bg-transparent border border-white sm:border-[#1ec258]
            hover:bg-[#1ec258] hover:text-white text-white sm:text-[#1ec258]
            font-bold py-3 px-4 sm:px-8 rounded-lg text-md sm:text-xl transition ease-in">
            <a
              href="https://calendly.com/rohitprasharwork/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↳ Book Your Podcast
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
