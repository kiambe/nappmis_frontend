"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const menuRef = useRef(null);

  // Close the search bar and menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (searchRef.current && !searchRef.current.contains(event.target)) ||
        (menuRef.current && !menuRef.current.contains(event.target))
      ) {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, menuRef]);

  return (
    <header>
      {/* Top Grey Div with Contact Details */}
      <div className="bg-gray-200 py-2">
        <div className="max-w-screen-xl mx-auto flex justify-end">
          <span className="text-sm text-gray-700">
            Contact us: +254 700 000 000 | info@kilimo.go.ke
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <Image
              src="/Moald.png"
              alt="World Bank Logo"
              width={250}
              height={80}
            />
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 text-slate-600 font-semibold">
            <a
              href="#"
              className="relative group hover:text-red-600 active:text-red-600"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#"
              className="relative group hover:text-red-600 active:text-red-600"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#"
              className="relative group hover:text-red-600 active:text-red-600"
            >
              Partners
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#"
              className="relative group hover:text-red-600 active:text-red-600"
            >
              Dashboard
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </nav>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden z-20"
            >
              <nav className="flex flex-col items-center space-y-4 p-4 text-slate-600 font-semibold">
                <a
                  href="#"
                  className="relative group hover:text-red-600 active:text-red-600"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#"
                  className="relative group hover:text-red-600 active:text-red-600"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#"
                  className="relative group hover:text-red-600 active:text-red-600"
                >
                  Partners
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#"
                  className="relative group hover:text-red-600 active:text-red-600"
                >
                  Dashboard
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>

                {/* Expandable Search Icon */}
                <div className="relative flex items-center" ref={searchRef}>
                  <button
                    className="text-green-700 focus:outline-none"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  >
                    <MagnifyingGlassIcon className="h-6 w-6" />
                  </button>
                  <input
                    type="text"
                    className={`absolute z-10 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-300 rounded pl-10 py-1 ${
                      isSearchOpen ? "w-48 opacity-100" : "w-0 opacity-0"
                    }`}
                    placeholder="Search..."
                    style={{ right: isSearchOpen ? 0 : "-12rem" }}
                  />
                </div>

                {/* User Icon with Login Name */}
                <div className="flex items-center text-green-700">
                  <UserIcon className="h-6 w-6 mr-2" />
                  <span>Login</span>
                </div>
              </nav>
            </div>
          )}

          <div className="hidden md:flex items-center space-x-4">
            {/* Expandable Search Icon */}
            <div className="relative flex items-center" ref={searchRef}>
              <button
                className="text-green-700 focus:outline-none"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <input
                type="text"
                className={`absolute z-10 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-300 rounded pl-10 py-1 ${
                  isSearchOpen ? "w-48 opacity-100" : "w-0 opacity-0"
                }`}
                placeholder="Search..."
                style={{ right: isSearchOpen ? 0 : "-12rem" }}
              />
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-300 hidden md:block"></div>

            {/* User Icon with Login Name */}
            <div className="flex items-center text-green-700">
              <UserIcon className="h-6 w-6 mr-2" />
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
