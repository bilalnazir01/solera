import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/images/solera.png";
import ResLogo from "../assets/images/r-logo.png";
import navErrowIcon from "../assets/images/navErrowIcon.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Docs", path: "#docs" },
    { name: "Reports", path: "#reports" },
    { name: "Careers", path: "#careers" },
    // For FAQ, use home page with a hash to the FAQ section.
    { name: "Community", path: "#community" },
  ];

  return (
    <header className="w-full bg-black">
      <div className="  px-6 py-5 max-w-[1521px] w-full mx-auto">
        <div className="flex items-center justify-between gap-10 xl:gap-[60px]">
          {/* Logo */}
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={Logo}
              alt="SalenoLogo"
              className="w-full h-[21px] max-w-[84px] hidden lg:block"
            />
            <img
              src={ResLogo}
              alt="SalenoLogo"
              className="h-[36px] w-[36px] block lg:hidden"
            />
          </NavLink>

          {/* Main Navigation */}
          <nav
            className={`flex items-center justify-center flex-col lg:rounded-[80px] max-xl:py-3 font-albertsans text-sm
              lg:flex-row gap-5 lg:gap-0 max-w-[507px] max-xl:max-w-[380px] max-lg:max-w-[calc(200%-200px)] 
              w-full fixed lg:static top-0 transition-all duration-500 h-full lg:h-auto
              max-lg:bg-primaryLight backdrop:blur-lg z-10 lg:z-auto
              max-lg:pt-28 max-lg:justify-start ${
                menuOpen ? "right-0" : "-right-full"
              } lg:flex`}
            style={{ backdropFilter: `blur(14px)` }}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-5 xl:gap-10">
              {navLinks.map((item, index) => (
                <li key={index}>
                  {item.name === "FAQ" ? (
                    <HashLink
                      smooth
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm  xl:text-base font-normal leading-none text-black cursor-pointer"
                    >
                      {item.name}
                    </HashLink>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm xl:text-base font-normal leading-none text-white cursor-pointer"
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Desktop Buttons */}
           <ul className="flex flex-row items-center gap-4">
            <li>
              <NavLink
                to="/"
                className="btn bg-gradient-to-b text-white text-[18px] font-albertsans font-medium flex items-end justify-center"
                onClick={() => setMenuOpen(false)}
              >
                GO to the App
                <img src={navErrowIcon} alt="nav errow" className="w-5 h-5" />
              </NavLink>
            </li>
          </ul> 
           {/* Hamburger Button - Appears at lg */}
           <button
            className="lg:hidden text-white z-20 relative "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
