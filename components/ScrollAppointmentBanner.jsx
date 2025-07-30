"use client";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaGlobe } from "react-icons/fa";
import { LanguageSwitcher } from "@/components/language-switcher";
import Modal from "@/components/Modal";
import Form from "@/components/Form";

export default function ScrollBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBanner(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguageMenu = () => {
    setShowLanguages((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Banner */}
      <div
        className={`fixed bottom-4 left-1/2 w-full transform -translate-x-1/2 transition-opacity duration-500 z-40 hidden md:block ${
          showBanner ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-fit mx-auto">
          <div className="bg-white shadow-xl rounded-4xl flex items-center px-6 py-3 space-x-4">
            <div className="text-center">
              <p className="text-lg font-serif">Book Your Appointment Today!</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-orange-400 hover:cursor-pointer hover:bg-white hover:text-orange-400 border text-white font-semibold rounded-full px-5 py-2 flex items-center space-x-2"
            >
              <FaCalendarAlt />
              <span>Request Appointment</span>
            </button>
          </div>
        </div>
        <div className="fixed bottom-10 right-4 z-50">
          <button
            onClick={toggleLanguageMenu}
            className="bg-orange-500 hover:cursor-pointer text-white rounded-full p-4 shadow-5xl hover:bg-orange-600 focus:outline-none"
            aria-label="Change Language"
          >
            <FaGlobe className="text-xl" />
          </button>

          {/* Language Dropdown */}
          {showLanguages && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-3 w-48 z-50">
              <LanguageSwitcher />
            </div>
          )}
        </div>
      </div>

      {/* Floating Language Button */}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <Form />
      </Modal>
    </>
  );
}
