import React, { useState } from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div className="bg-[#333] flex flex-row flex-wrap justify-around gap-12 w-full">
      <div className="flex flex-row justify-between gap-6 text-white text-2xl p-4">
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
      </div>
      <h1 className="text-center text-white font-bold text-4xl p-2">StyleStrutters</h1>
      <RxHamburgerMenu
        onClick={handleToggleMenu}
        className={`md:hidden block text-white text-xl mt-2 ${isMobileMenuOpen ? 'open' : ''}`}
      />
      <div
        className={`text-white text-2xl p-2 ${
          isMobileMenuOpen ? 'flex flex-col   gap-4' : 'hidden md:flex md:flex-row md:gap-4'
        }`}>
        <Link to="/"><a>Home</a></Link>
        <Link to="/about"><a>About</a></Link>
        <Link to="/products"><a>Products</a></Link>
        <Link to="/contact"><a>Contact</a></Link>
      </div>
    </div>
  );
}

export default Navbar;
