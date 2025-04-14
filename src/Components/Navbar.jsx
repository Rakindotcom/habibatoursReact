import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Destinations", path: "/destinations" },
    { name: "Pricing", path: "/pricing" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] px-4 py-4 flex items-center justify-between border-b-[3px] border-[maroon] bg-white z-10">
      <div className="text-xl font-bold text-gray-900 cursor-pointer">
        Habiba Tours and Travels <span className="text-[maroon]">.</span>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-4 font-semibold">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="px-4 font-semibold text-gray-900 hover:text-[maroon] transition-colors duration-300"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu with Gray Background */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-200 border-t-[3px] border-[maroon] flex flex-col items-center py-4 md:hidden z-20">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="py-2 text-gray-900 hover:text-[maroon] transition-colors duration-300"
            >
              <Link to={link.path} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
