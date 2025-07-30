"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

import { services, educationLinks } from "./data/NavData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Single state for dropdowns
  const [activeserv, setActiveserv] = useState(false);
  const [activeedu, setActiveedu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const educationRef = useRef(null);

  function activateservices() {
    setActiveserv(true);
    setActiveedu(false);
  }

  function deactiveservices() {
    setActiveserv(false);
  }

  function activateeducation() {
    setActiveedu(true);
    setActiveserv(false);
  }
  function deactivateeducation() {
    setActiveedu(false);
  }

  return (
    <div className="navbar">
      <nav className="bg-white/95 backdrop-blur-md font-inter w-[100%] top-0 z-50 py-1 fixed shadow-lg border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Revital Dental Logo"
                  width={120}
                  height={64}
                  className="h-12 sm:h-14 md:h-16 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 focus:outline-none"
              >
                <RxHamburgerMenu size={24} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-col items-end space-y-2">
              {/* Location & Phone */}
              <div className="flex font-inter space-x-3 mb-4">
                <a
                  href="https://www.google.com/maps/place/Revital+Dental/@31.0575554,-97.3734765,17z/data=!3m1!4b1!4m6!3m5!1s0x86456b77cbcefa79:0xcf1db0a8e3bdced7!8m2!3d31.0575554!4d-97.3734765!16s%2Fg%2F11q598fxmn?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center space-x-2 text-sm"
                >
                  <FaLocationDot className="text-lg" />
                  <span>4311 S 31st Ste 145 Temple, TX 76502</span>
                </a>
                <a
                  href="tel:2542070708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white flex items-center space-x-2 text-sm"
                >
                  <BiPhoneCall className="text-lg" />
                  <span>Call Us! (254)207-0708</span>
                </a>
              </div>

              {/* Navigation */}
              <ul className="flex text-sm font-medium text-neutral-700 relative">
                <li className="hover:text-primary transform px-4 py-2 hover:bg-neutral-100 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-primary transform px-4 py-2 hover:bg-neutral-100 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:text-primary transform px-4 py-2 hover:bg-neutral-100 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
                  <Link href="/patient-information">Patient Information</Link>
                </li>
                <li className="relative px-4 py-2 hover:bg-neutral-100 rounded-lg">
                  <Link
                    className="hover:text-primary transform transition-all duration-200 ease-in-out cursor-pointer"
                    onMouseOver={activateservices}
                    href="/services"
                  >
                    Services
                  </Link>

                  <div
                    onMouseLeave={deactiveservices}
                    className={`fixed top-30 left-0 w-screen gradient-primary text-white py-8 z-50 shadow-xl transition-all duration-300 ease-in-out ${
                      activeserv ? "block" : "hidden"
                    }`}
                  >
                    <h2 className="text-center">All Services</h2>
                    <hr className="w-[80%] mx-auto my-5" />
                    <div className="space-y-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto px-6">
                      {services.map((item, i) => (
                        <Link
                          key={i}
                          href={`/${item.link}`}
                          onClick={() => {
                            setActiveserv(false); // Close dropdown // Hide entire mobile menu
                          }}
                          className="block hover:underline hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="relative px-4 py-2 hover:bg-neutral-100 rounded-lg cursor-pointer">
                  <button
                    className="hover:text-primary transform transition-all duration-200 ease-in-out"
                    onMouseOver={activateeducation}
                  >
                    Patient Education
                  </button>

                  <div
                    onMouseLeave={deactivateeducation}
                    ref={educationRef}
                    className={`fixed top-30 left-0 w-screen gradient-primary text-white py-8 z-50 shadow-xl transition-all duration-300 ${
                      activeedu ? "block" : "hidden"
                    }`}
                  >
                    <div className="space-y-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto px-6">
                      {educationLinks.map((item, i) => (
                        <Link
                          key={i}
                          href={`/${item.link}`}
                          onClick={() => {
                            setActiveedu(false); // Close dropdown // Hide entire mobile menu
                          }}
                          className="block hover:underline hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="hover:text-primary transform px-4 py-2 hover:bg-neutral-100 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
                  <Link href="/cherry-financing">Cherry Financing</Link>
                </li>
                <li className="hover:text-primary transform px-4 py-2 hover:bg-neutral-100 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
                  <Link href="/smile-gallery">Smile Gallery</Link>
                </li>
                <li className="hover:text-primary transform px-4 py-2 hover:bg-neutral-100 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
                  <Link href="/reviews">Reviews</Link>
                </li>
                <li className="hover:text-primary transform px-4 py-2 hover:bg-neutral-100 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}

          {isOpen && (
            <div className="fixed top-0 right-0 w-full h-screen font-inter overflow-y-auto gradient-primary z-50 text-lg font-light text-white">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes
                    size={24}
                    className="text-white hover:text-gray-200"
                  />
                </button>
              </div>

              {/* Mobile Navigation */}
              <ul className="flex flex-col w-full text-base font-semibold">
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/patient-information">Patient Information</Link>
                </li>

                {/* Services Dropdown */}
                <li className="border-b border-white">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex justify-between items-center px-6 py-4 hover:bg-primary"
                  >
                    <span>Services</span>
                    {mobileServicesOpen ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </button>

                  {mobileServicesOpen && (
                    <ul className="bg-primary text-white">
                      {services.map((item, i) => (
                        <li
                          key={i}
                          className="px-8 py-3 border-t border-white hover:bg-orange-200 cursor-pointer"
                        >
                          <Link
                            href={`/${item.link}`}
                            onClick={() => {
                              setIsOpen(false); // Close dropdown // Hide entire mobile menu
                            }}
                            className="block hover:underline hover:scale-105 transition-transform duration-300 ease-in-out"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/cherry-financing">Cherry Financing</Link>
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/smile-gallery">Smile Gallery</Link>
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/reviews">Reviews</Link>
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
