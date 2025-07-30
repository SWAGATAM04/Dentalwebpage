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
        className={`fixed bottom-6 left-1/2 w-full transform -translate-x-1/2 transition-opacity duration-500 z-40 hidden md:block ${
          showBanner ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-fit mx-auto">
          <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl flex items-center px-8 py-4 space-x-6 border border-neutral-200">
            <div className="text-center">
              <p className="text-lg font-inter font-medium text-neutral-800">Book Your Appointment Today!</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-primary flex items-center space-x-2"
            >
              <FaCalendarAlt />
              <span>Request Appointment</span>
            </button>
          </div>
        </div>
        <div className="fixed bottom-10 right-4 z-50">
          <button
            onClick={toggleLanguageMenu}
            className="btn btn-secondary rounded-full p-4 shadow-xl"
            aria-label="Change Language"
          >
            <FaGlobe className="text-xl" />
          </button>

          {/* Language Dropdown */}
          {showLanguages && (
            <div className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 w-48 z-50 border border-neutral-200">
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
