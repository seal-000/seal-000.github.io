import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-0 p-8">
        <Link to="/contact" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-normal whitespace-nowrap dark:text-dark bg-white rounded-full px-4 py-2 hover:text-customDustyRose">
            Contact me
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col text-xl font-normal p-4 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row bg-white rounded-full px-4 py-2">
            <li>
              <Link to="/" className="block py-2 px-3 md:p-0 hover:text-customDustyRose">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="block py-2 px-3 md:p-0 hover:text-customDustyRose">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 md:p-0 hover:text-customDustyRose">
                About me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
