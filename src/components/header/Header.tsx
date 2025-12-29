import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Mic, Mail, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialMediaIcons from "../contact/SocialMediaIcons";
import BookPodcastBtn from "../btns/BookPodcastBtn";
import "./header.css";

type NavItem = {
  name: string;
  to?: string;
  external?: boolean;
};

const navLinks: NavItem[] = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Exclusive Podcasts", external: true },
  { name: "Podcast", to: "/podcast" },
  { name: "Course", to: "/courses" },
  { name: "Book", to: "/book" },
  { name: "1:1 Consultation Call", to: "/consultation_call" },
];

type MobileNavItem = NavItem & { icon?: React.ReactNode };

const navLinksmobile: MobileNavItem[] = [
  { name: "Home", to: "/", icon: <Home size={20} /> },
  { name: "About Us", to: "/aboutus", icon: <User size={20} /> },
  { name: "Exclusive Podcasts", external: true, icon: <Mic size={20} /> },
  { name: "Podcast", to: "/podcast", icon: <Mic size={20} /> },
  { name: "Course", to: "/courses", icon: <BookOpen size={20} /> },
  { name: "Book", to: "/book", icon: <BookOpen size={20} /> },
  { name: "1:1 Consultation Call", to: "/consultation_call", icon: <Mail size={20} /> },
];

const UPCOMING_PODCAST_URL = "https://podcast.rohitprashar.com/";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="w-full fixed z-50 bg-[#0b0b0c] border-b border-[#332d2e]">
      <div className="max-w-8xl mx-auto px-4 sm:px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
          <img src="./imgs/profile2.png" alt="Profile" className="w-12 h-12 rounded-full" />
          <span className="text-gray-300 font-bold text-xl lg:text-2xl">
            RohitPrashar
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map(link => {
            if (link.external) {
              return (
                <a
                  key={link.name}
                  href={UPCOMING_PODCAST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navigation text-lg font-medium text-gray-300 border-b-2 border-transparent hover:text-[#1ec258] hover:border-[#1ec258]"
                >
                  <span className="upcoming-gradient">
                    {"Exclusive Podcasts".split("").map((char, i) => (
                      <span key={i} className="char">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </a>
              );
            }

            // Guard: ensure `to` exists before passing to `Link`
            if (!link.to) return null;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`navigation text-lg font-medium border-b-2 transition-all ${
                  pathname === link.to
                    ? "text-[#1ec258] border-[#1ec258]"
                    : "text-gray-300 border-transparent hover:text-[#1ec258] hover:border-[#1ec258]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:flex">
          <BookPodcastBtn />
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gray-300">
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full bg-[#0b0b0c] z-50"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="text-gray-300">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <img src="./imgs/profile2.png" className="w-24 h-24 rounded-full" />
              <h2 className="text-gray-300 font-bold text-xl mt-2">RohitPrashar</h2>
              <SocialMediaIcons />
            </div>

            <div className="mt-8 px-6 space-y-5">
              {navLinksmobile.map(link => {
                if (link.external) {
                  return (
                    <div key={link.name} className="flex items-center gap-4">
                      {link.icon}
                      <a
                        href={UPCOMING_PODCAST_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className="text-lg text-gray-300 hover:text-[#1ec258]"
                      >
                        <span className="upcoming-gradient">
                          {"Exclusive Podcasts".split("").map((char, i) => (
                            <span key={i} className="char">
                              {char === " " ? "\u00A0" : char}
                            </span>
                          ))}
                        </span>
                      </a>
                    </div>
                  );
                }

                if (!link.to) return null;

                return (
                  <div key={link.to ?? link.name} className="flex items-center gap-4">
                    {link.icon}
                    <Link
                      to={link.to}
                      onClick={handleLinkClick}
                      className={`text-lg ${
                        pathname === link.to
                          ? "text-[#1ec258]"
                          : "text-gray-300 hover:text-[#1ec258]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
