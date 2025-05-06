"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header({ language, setLanguage, translations }: any) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleLangMenu = () => {
    setLangMenuOpen((prev) => !prev);
  };

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScrollForMenu = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScrollForMenu);
    return () => {
      window.removeEventListener("scroll", handleScrollForMenu);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full h-auto bg-[#1A2F58] text-white px-4 sm:px-6 lg:px-8 py-4 z-[101] shadow-lg"
        style={{ minHeight: "80px" }}
      >
        <div className="flex flex-row items-center justify-between w-full max-w-[66.67%] mx-auto">
          {/* Left side - empty */}
          <div></div>

          {/* Logo - centered */}
          <div className="flex-1 text-center">
            <Image src="/Logo.png" alt="Logo" width={100} height={100} />
          </div>

          {/* Right side - desktop menu and mobile controls */}
          <div className="flex items-center gap-6">
            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#services"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {translations[language].services}
              </a>
              <a
                href="#aboutMe"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {translations[language].about}
              </a>
              <a
                href="#reviews"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {translations[language].reviews}
              </a>
              <a
                href="#contacts"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {translations[language].contacts}
              </a>
              <a className="ml-1">
                <Image src="/coffee.png" alt="Coffee" width={25} height={25} />
              </a>
              {/* Language dropdown - after coffee */}
              <div className="relative">
                <button
                  onClick={toggleLangMenu}
                  className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <span className="ml-1">{language === "rus" ? "RU" : "PL"}</span>
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-[#1A2F58] border border-gray-700 rounded shadow-lg z-50">
                    <button
                      onClick={() => {
                        setLanguage("rus");
                        setLangMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-blue-900 transition-colors duration-200"
                    >
                      Русский
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("polish");
                        setLangMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-blue-900 transition-colors duration-200"
                    >
                      Polski
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile controls - language and burger */}
            <div className="md:hidden flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={toggleLangMenu}
                  className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <span className="ml-1">{language === "rus" ? "RU" : "PL"}</span>
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-[#1A2F58] border border-gray-700 rounded shadow-lg z-50">
                    <button
                      onClick={() => {
                        setLanguage("rus");
                        setLangMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-blue-900 transition-colors duration-200"
                    >
                      Русский
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("polish");
                        setLangMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-blue-900 transition-colors duration-200"
                    >
                      Polski
                    </button>
                  </div>
                )}
              </div>
              <button
                className="text-2xl text-white z-50"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[80px] left-0 right-0 bg-[#1A2F58] shadow-lg z-[100] overflow-hidden">
          <div className="flex flex-col gap-2 px-4 sm:px-6 py-4 items-center text-center w-full">
            <a
              href="#aboutMe"
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 py-2 transition-colors duration-200 w-full"
            >
              {translations[language].about}
            </a>
            <a
              href="#services"
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 py-2 transition-colors duration-200 w-full"
            >
              {translations[language].services}
            </a>
            <a
              href="#reviews"
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 py-2 transition-colors duration-200 w-full"
            >
              {translations[language].reviews}
            </a>
            <a
              href="#contacts"
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 py-2 transition-colors duration-200 w-full"
            >
              {translations[language].contacts}
            </a>
            <a
              onClick={toggleMenu}
              className="flex items-center justify-center text-white hover:text-gray-300 py-2 transition-colors duration-200 w-full"
            >
              {translations[language].coffee}
              <Image
                src="/coffee.png"
                alt="Coffee"
                width={25}
                height={25}
                className="ml-2"
              />
            </a>
          </div>
        </div>
      )}

      {/* Spacer to push content down */}
      <div style={{ height: "80px" }}></div>
    </>
  );
}