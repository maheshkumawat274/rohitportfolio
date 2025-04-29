import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Podcast", to: "/podcast" },
  { name: "Course", to: "/course" },
  { name: "Contact Us", to: "/contact" },
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
          <span className="text-white font-bold text-3xl md:text-4xl">RohitPrashar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg font-medium transition-colors duration-150 ${
                pathname === link.to
                  ? "text-[#1ec258]"
                  : "text-white hover:text-[#1ec258]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:flex">
        <button
          className=" text-xl w-64 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
        >
          <span
            className="absolute bg-emerald-600 w-72 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
          ></span>
          <span
            className="absolute bg-emerald-800 w-72 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
          ></span>
          <a 
                href='https://topmate.io/therohitprashar'
                target="_blank"
                rel="noopener noreferrer">
          1:1 Consultation Call
          </a>
        </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            
          >
            <div className="lg:hidden flex flex-col bg-[#0b0b0c] border-t border-[#332d2e] px-4 py-4 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={`text-lg font-medium transition-colors duration-150 ${
                  pathname === link.to
                    ? "text-[#1ec258]"
                    : "text-white hover:text-[#1ec258]"
                }`}
              >
                {link.name}
              </Link>
              
            ))}
            <div className="sm:hidden">
             <button
               className=" text-lg w-64 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
             >
               <span
                 className="absolute bg-emerald-600 w-72 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
               ></span>
               <span
                 className="absolute bg-emerald-800 w-72 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
               ></span>
               <a 
                     href='https://topmate.io/therohitprashar'
                     target="_blank"
                     rel="noopener noreferrer">
               1:1 Consultation Call
               </a>
             </button>
             </div>
            </div>
          </motion.nav>
        )}
        
      </AnimatePresence>
    </header>
  );
};

export default Header;
