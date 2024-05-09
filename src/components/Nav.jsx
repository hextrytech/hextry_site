import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuBarImage from '../assets/images/menu-bar.svg';
import RotatableImage from "./RotatableNavImage";
import '../index.css'

const Nav = () => {
  const [isNavbarClicked, setIsNavbarClicked] = useState(false);

  const handleNavbarClick = () => {
    setIsNavbarClicked(prev => !prev);
  };

  const MobileNavBar = () => {
    return (
      <div className={`flex flex-col  custom-nav-background-color ml-auto p-6 z-40 `}>
        <NavLink
          to="/"
          activeClassName="border-b-2 border-blue-500"
          className="hover:text-blue-500 block mb-4" // Add margin-bottom for spacing
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="border-b-2 border-blue-500"
          className="hover:text-blue-500 block mb-4" // Add margin-bottom for spacing
        >
          About
        </NavLink>
        <NavLink
          to="/download"
          activeClassName="border-b-2 border-blue-500"
          className="hover:text-blue-500 block mb-4" // Add margin-bottom for spacing
        >
          Download
        </NavLink>
        <NavLink
          to="/career"
          activeClassName="border-b-2 border-blue-500"
          className="hover:text-blue-500 block mb-4" // Add margin-bottom for spacing
        >
          Career
        </NavLink>
        <NavLink
          to="/analysis"
          activeClassName="border-b-2 border-blue-500"
          className="hover:text-blue-500 block mb-4" // Add margin-bottom for spacing
        >
          Analysis
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="border-b-2 border-blue-500"
          className="hover:text-blue-500 block mb-4" // Add margin-bottom for spacing
        >
          Contact
        </NavLink>
      </div>
    );
  };
  
  
  return (
    <>
   
    <div className="nav text-white w-full fixed top-0 shadow-md">
      <div className="max-w-10xl mx-auto px-4">
        <div className="flex justify-between items-center h-12 ">
          <p className="text-3xl font-bold pl-14  max-md:pl-0">HEXTRY</p>
          <div className="flex">
            <div className="space-x-10 max-md:hidden">
              <NavLink
                to="/"
                activeClassName="border-b-2 border-blue-500"
                className="hover:text-blue-500 font-bold"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="border-b-2 border-blue-500"
                className="hover:text-blue-500 font-bold"
              >
                About
              </NavLink>
              <NavLink
                to="/download"
                activeClassName="border-b-2 border-blue-500"
                className="hover:text-blue-500 font-bold"
              >
                Download
              </NavLink>
              <NavLink
                to="/career"
                activeClassName="border-b-2 border-blue-500"
                className="hover:text-blue-500 font-bold"
              >
                Career
              </NavLink>
              <NavLink
                to="/analysis"
                activeClassName="border-b-2 border-blue-500"
                className="hover:text-blue-500 font-bold"
              >
                Analysis
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="border-b-2 border-blue-500"
                className="hover:text-blue-500 font-bold"
              >
                Contact
              </NavLink>
            </div>
            <div onClick={handleNavbarClick} className="max-2xl:hidden max-md:block">
              <RotatableImage src={MenuBarImage} width={25} />
            </div>
          </div>
        </div>
      </div>
      {isNavbarClicked && <MobileNavBar />} {/* Render MobileNavBar if isNavbarClicked is true */}
    </div>
      </>
  );
};

export default Nav;
