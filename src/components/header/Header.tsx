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
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
          <span className="text-white font-bold text-3xl md:text-4xl">RohitPrashar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
            className="md:hidden flex flex-col bg-[#0b0b0c] border-t border-[#332d2e] px-4 py-4 space-y-4"
          >
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
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
