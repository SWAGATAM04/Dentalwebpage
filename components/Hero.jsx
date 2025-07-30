"use client";
import React, { useEffect, useState } from "react";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import Form from "./Form";
import Modal from "./Modal";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    
    if (!backendUrl) {
      console.error("NEXT_PUBLIC_BACKEND_URL is not defined in environment variables");
      return;
    }
    
    fetch(`${backendUrl}/api/carousel`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => {
        console.error("Error fetching carousel:", err);
        console.error("Backend URL:", backendUrl);
        console.error("Full URL attempted:", `${backendUrl}/api/carousel`);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        images.length ? (prev + 1) % images.length : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images.length)
    return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="relative w-full md:h-[85vh] h-[80vh] overflow-hidden md:mt-[85px] mt-[73px]">
      {/* Desktop and Mobile Carousel */}
      <div className="w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.image}`}// adjust if needed
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Desktop View: Form and Text */}
      <div className="hidden absolute top-14 right-10 z-20 md:flex md:justify-end md:items-center">
        <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 z-10 w-[400px] transition-transform duration-700 ease-in-out mx-[30px] shadow-xl border border-white/20">
          <h2
            className={`text-5xl font-medium text-end font-cinzel ${cinzel.className}`}
          >
            {images[currentIndex]?.title || ""}
          </h2>
          <p className="text-end text-xl font-cinzel text-neutral-700 mb-4">
            {images[currentIndex]?.para || ""}
          </p>
          <div className="text-end">
            <Link href={images[currentIndex]?.link || "#"}>
              <button className="btn btn-primary uppercase">
                {images[currentIndex]?.buttontxt || "Read More"}
              </button>
            </Link>
          </div>
        </div>
        <Form />
      </div>

      {/* Mobile View */}
      <div className="md:hidden bg-gradient-to-b from-black/50 to-black/70 w-full absolute bottom-0 top-0 z-20 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-cinzel text-white text-center mb-4">
          {images[currentIndex]?.title || ""}
        </h1>
        <h2 className="text-xl text-white text-center mb-8">
          Limited Time Offer
        </h2>
        <div className="w-[80%] mx-auto flex flex-col justify-center text-white space-y-4">
          <button className="btn btn-accent text-lg font-semibold uppercase">
            (254) 207-0708
          </button>
          <button
            onClick={() => {
              setShowMobileForm(true);
              setShowForm(true); // <-- Add this line
            }}
            className="btn btn-accent text-lg font-semibold uppercase"
          >
            Request appointment
          </button>
          <div className="text-center mt-6">
            <p className="text-white/80 mb-2">Our address</p>
            <p className="text-xl font-inter">4311 S 31st Ste 145</p>
            <p className="text-xl font-inter">Temple, TX 76502</p>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showMobileForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-30">
          <Modal
            isOpen={showForm}
            onClose={() => {
              setShowForm(false);
              setShowMobileForm(false); // Add this line
            }}
          >
            <Form />
          </Modal>
        </div>
      )}
    </div>
  );
}
