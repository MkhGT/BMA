import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="shadow-md">
      {/* Navbar Top */}
      <div className="relative mx-auto px-6 flex justify-between items-center pt-4 pb-1">
        {/* LEFT: Hamburger (mobile) + Store Location (desktop) */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button className="sm:hidden text-2xl" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </button>

          {/* Store Location */}
          <a
            href="#contact"
            className="hidden sm:flex items-center space-x-2 text-xl"
          >
            <i className="ri-map-pin-line text-2xl"></i>
            <span className="text-base">Store Location</span>
          </a>
        </div>

        {/* CENTER: Logo */}
        <div
          className="
            absolute 
            left-15
            sm:left-1/2 
            sm:-translate-x-1/2 
            font-bt font-bold 
            text-left sm:text-center 
            text-base sm:text-sm md:text-xl
            "
        >
          <h1>
            BARAYASA{" "}
            <span style={{ color: "var(--primary-color)" }}>MAIZAN</span> ABADI
          </h1>
        </div>

        {/* RIGHT: Icons */}
        <div className="text-xl">
          <div className="flex items-center space-x-4">
            <a href="#">
              <i className="ri-search-line text-xl"></i>
            </a>
            <a href="#">
              <i className="ri-shopping-cart-line text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* NAV MENU */}
      <div className="relative mx-auto px-6 pb-4">
        {/* Desktop Menu */}
        <ul className="hidden sm:flex justify-center space-x-8">
          <li className="hover:[color:var(--primary-color)] text-sm transition-colors cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:[color:var(--primary-color)] text-sm transition-colors cursor-pointer">
            <a href="#excellence">Excellence</a>
          </li>
          <li className="hover:[color:var(--primary-color)] text-sm transition-colors cursor-pointer">
            <a href="#products">Products</a>
          </li>
          <li className="hover:[color:var(--primary-color)] text-sm transition-colors cursor-pointer">
            <a href="#review">Reviews</a>
          </li>
          <li className="hover:[color:var(--primary-color)] text-sm transition-colors cursor-pointer">
            <a href="#contact">Contacts</a>
          </li>
        </ul>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="flex flex-col space-y-2 sm:hidden mt-2">
            <li className="hover:[color:var(--primary-color)] transition-colors cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:[color:var(--primary-color)] transition-colors cursor-pointer">
              <a href="#excellence">Excellence</a>
            </li>
            <li className="hover:[color:var(--primary-color)] transition-colors cursor-pointer">
              <a href="#products">Products</a>
            </li>
            <li className="hover:[color:var(--primary-color)] transition-colors cursor-pointer">
              <a href="#review">Reviews</a>
            </li>
            <li className="hover:[color:var(--primary-color)] transition-colors cursor-pointer">
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
