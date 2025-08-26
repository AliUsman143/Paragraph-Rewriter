"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 👈 current route nikalne ke liye

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // common classes for nav links
  const baseLinkClasses =
    "text-sm sm:text-lg block  py-2 px-3 sm:py-5 sm:px-5 md:p-2 rounded-lg";
  const inactiveClasses =
    "text-gray-500 p-2 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800";
  const activeClasses = "bg-gray-300 text-gray-900"; // 👈 active bg color

  return (
    <nav className="bg-slate-100 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-2">
        <Link
          href="/"
          className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse"
        >
          <img
            src="./Logo/logo.jpg"
            alt="Logo"
            className="rounded-[50px] w-[40px] h-[40px]"
          />
          <div className="flex flex-col leading-[1] text-sm sm:text-md">
            <span className="font-bold">PARAGRAPH</span>
            <span className="font-serif">Rewriter</span>
          </div>
        </Link>

        <div className="flex md:order-2 space-x-2 sm:space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="/contact"
            className="text-white bg-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          >
            Contact Us
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger & Close icons */}
            <svg
              className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-4 md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className={`${baseLinkClasses} ${
                  pathname === "/" ? activeClasses : inactiveClasses
                }`}
              >
                Paragraph Rewriter
              </Link>
            </li>
            <li>
              <Link
                href="/paragraphGenerator"
                className={`${baseLinkClasses} ${
                  pathname === "/paragraphGenerator"
                    ? activeClasses
                    : inactiveClasses
                }`}
              >
                Paragraph Generator
              </Link>
            </li>
            <li>
              <Link
                href="/sentenceRewriter"
                className={`${baseLinkClasses} ${
                  pathname === "/sentenceRewriter"
                    ? activeClasses
                    : inactiveClasses
                }`}
              >
                Sentence Rewriter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
