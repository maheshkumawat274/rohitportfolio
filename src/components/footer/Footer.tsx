import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../contact/SocialMediaIcons";

const Footer: React.FC = () => {
  return (
    <>
     <section className="w-full bg-[#1ec258] py-4 px-2 pt-10 pb-10 flex items-center justify-center">
        <div className="flex items-center text-black font-bold text-lg sm:text-4xl">
          Need Help ? Chat with Rohit Prashar!
          <a
            href="https://wa.me/+918252587182"
            className="ml-4 px-6 py-2 bg-black text-[#1ec258] rounded-full hover:scale-105 shadow transition font-bold"
          >
            WHATSAPP
          </a>
        </div>
      </section>
       <footer className="w-full bg-[#1ec258] text-black py-14 px-2 sm:px-14 flex flex-col md:flex-row justify-between items-start text-sm border-t border-[#12130f] gap-4">
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h1 className="text-5xl sm:text-6xl font-bold">RohitPrashar</h1>
          <div className="py-14">
            <SocialMediaIcons/>
          </div>
          <div className="text-lg sm:text-xl text-black">
            With 5+ years of experience and 100,000+ students, the instructor has
            helped many people achieve success in the Art & media industry.
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h4 className="font-bold mb-1 text-2xl sm:text-4xl">Usefull Links</h4>
          <ul className="text-lg">
            <li>
            <Link to='/about'>
            <a className="hover:underline">
                About
              </a>
            </Link>
            </li>
            <li>
              
              <Link to='/courses'>
              <a className="hover:underline">
                New Courses
              </a></Link>
            </li>
            <li>
              <Link to='podcast'>
              <a className="hover:underline">
                Podcast
              </a>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
              <a className="hover:underline">
                Contact
              </a></Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h1 className="font-bold mb-1 text-2xl sm:text-4xl">Contact</h1>
          <div className="text-lg">
          <div>Greate Noida , New Delhi 110020</div>
          <div>+918252587182</div>
          <div>info@rohitprashar.in</div>
          </div>
        </div>
      </footer>
      <hr className="text-black"/>
      <div className="font-bold text-xl py-14 text-center bg-[#1ec258] text-black px-2">
        <span>
          Designed with{" "}
          <a href="https://maheshweb.online/" className="underline">
            Creative mahesh
          </a>{" "}
          &copy; Copyright 2025 All Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
