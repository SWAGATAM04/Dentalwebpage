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
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carousel`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching carousel:", err));
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
      <div className="hidden absolute top-14 right-10 z-20 rounded-md md:flex md:justify-end md:items-center">
        <div className="bg-[rgba(255,255,255,0.6)] rounded-sm p-5 z-10 w-[400px] transition-transform duration-700 ease-in-out mx-[30px]">
          <h2
            className={`text-5xl font-medium text-end font-cinzel ${cinzel.className}`}
          >
            {images[currentIndex]?.title || ""}
          </h2>
          <p className="text-end text-2xl font-cinzel">
            {images[currentIndex]?.para || ""}
          </p>
          <div className="text-end">
            <Link href={images[currentIndex]?.link || "#"}>
              <button className="bg-[#ff9f29] hover:cursor-pointer mt-4 px-4 py-2  text-white uppercase rounded-full">
                {images[currentIndex]?.buttontxt || "Read More"}
              </button>
            </Link>
          </div>
        </div>
        <Form />
      </div>

      {/* Mobile View */}
      <div className="md:hidden bg-black/70 w-full absolute bottom-0 top-0 z-20 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-cinzel text-white text-center">
          {images[currentIndex]?.title || ""}
        </h1>
        <h2 className="text-xl mt-5 text-white text-center">
          Limited Time Offer
        </h2>
        <div className="w-[80%] mx-auto flex flex-col justify-center text-white">
          <button className="bg-[#ff9f29] mt-10 text-lg font-semibold px-4 py-2 uppercase rounded-full">
            (254) 207-0708
          </button>
          <button
            onClick={() => {
              setShowMobileForm(true);
              setShowForm(true); // <-- Add this line
            }}
            className="bg-[#ff9f29] mt-3 text-lg font-semibold px-4 py-2 uppercase rounded-full"
          >
            Request appointment
          </button>
          <p className="text-center mt-5">Our address</p>
          <p className="text-center text-xl font-tinos">4311 S 31st Ste 145</p>
          <p className="text-center text-xl font-tinos">Temple, TX 76502</p>
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
