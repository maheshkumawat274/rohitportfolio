import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialMediaIcons from "../contact/SocialMediaIcons";
import { Home, User,Mic, Mail, BookOpen } from "lucide-react";
import BookPodcastBtn from "../btns/BookPodcastBtn";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Podcast", to: "/podcast" },
  { name: "Course", to: "/course" },
  { name: "1:1 Consultation Call", to: "/consultation_call" },
];
const navLinksmobile = [
  { name: "Home", to: "/", icon: <Home size={20} /> },
  { name: "About Us", to: "/aboutus", icon: <User size={20} /> },
  { name: "Podcast", to: "/podcast", icon: <Mic size={20} /> },
  { name: "Course", to: "/course", icon: <BookOpen size={20} /> },
  { name: "1:1 Consultation Call", to: "/consultation_call", icon: <Mail size={20} /> },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full fixed z-50 bg-[#0b0b0c] border-b border-[#332d2e]">
      <div className="max-w-8xl mx-auto px-4 sm:px-14 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
          <img
          src="./imgs/profile2.png" // Replace with your profile image
          alt="Profile"
          className="w-12 h-12 rounded-full "
        />
        <span className="text-gray-300 font-bold text-3xl md:text-4xl">RohitPrashar</span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map(link => (
           <Link
  key={link.to}
  to={link.to}
  className={`text-lg font-medium transition-all duration-150 border-b-2 ${
    pathname === link.to
      ? "text-[#1ec258] border-[#1ec258]"
      : "text-gray-300 border-transparent hover:text-[#1ec258] hover:border-[#1ec258]"
  }`}
>
  {link.name}
</Link>

          ))}
        </nav>
        <div className="hidden sm:flex">
        <BookPodcastBtn/>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      
      <AnimatePresence>
  {menuOpen && (
    <motion.nav
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 w-full h-full bg-[#0b0b0c] z-50 shadow-lg"
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={() => setMenuOpen(false)} className="text-gray-300">
          <X size={32} />
        </button>
      </div>

      {/* Profile section */}
      <div className="flex flex-col items-center px-6">
        <img
          src="./imgs/profile2.png" // Replace with your profile image
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-700"
        />
        <h1 className="text-gray-300 font-bold text-xl mt-2 pb-2">RohitPrashar</h1>
        
        {/* Social Icons */}
        <SocialMediaIcons/>
      </div>

      {/* Nav links */}
      <div className="mt-8 px-6 flex flex-col space-y-4">
        {navLinksmobile.map(link => (
          <div key={link.to} className="flex items-center gap-4">
            <div>{link.icon}</div>
            <Link
            to={link.to}
            onClick={handleLinkClick}
            className={`flex items-center text-lg font-medium transition-colors duration-150 ${
              pathname === link.to ? "text-[#1ec258]" : "text-gray-300 hover:text-[#1ec258]"
            }`}
          >
            {link.name}
          </Link>
          </div>
        ))}

        {/* Consultation Button */}
        <button
          className="mt-6 text-lg w-full h-12 rounded bg-emerald-500 text-gray-300 relative overflow-hidden group z-10 hover:text-gray-300 duration-1000"
        >
          <span className="absolute bg-emerald-600 w-72 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-emerald-800 w-72 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
          <a 
            href='https://calendly.com/rohitprasharwork/30min?month=2025-07'
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Podcast
          </a>
        </button>
      </div>
    </motion.nav>
  )}
</AnimatePresence>

    </header>
  );
};

export default Header;
