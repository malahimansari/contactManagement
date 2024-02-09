// components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <root>
      
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white font-bold text-lg cursor-pointer">
            Contact Management
          </a>
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
          </ul>
          <button className="text-white hover:text-gray-300">Logout</button>
        </div>
      </nav>
    </root>
  );
};

export default Navbar;
