"use client";

import React, { useState } from "react";
import { Cinzel } from "next/font/google";
import Navbar from "@/components/Navbar";
import Book from "@/components/Book";
import Footer from "@/components/Footer";
import ScrollAppointmentBanner from "@/components/ScrollAppointmentBanner";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

const smileGalleryData = [
  {
    service: "Teeth Whitening",
    before: "/smile-gallery/whitening-before.jpg",
    after: "/smile-gallery/whitening-after.jpg",
  },
  {
    service: "Veneers",
    before: "/smile-gallery/veneers-before.jpg",
    after: "/smile-gallery/veneers-after.jpg",
  },
  {
    service: "Dental Implants",
    before: "/smile-gallery/dental-implants-before.jpg",
    after: "/smile-gallery/dental-implants-after.jpg",
  },
  {
    service: "Laser Dentistry",
    before: "/smile-gallery/Laser-before.jpg",
    after: "/smile-gallery/Laser-after.jpg",
  },
  {
    service: "Pediatric Dentistry",
    before: "/smile-gallery/Pediatric-before.jpg",
    after: "/smile-gallery/Pediatric-after.jpg",
  },
  {
    service: "Smile Makeovers",
    before: "/smile-gallery/Smile-before.jpg",
    after: "/smile-gallery/Smile-after.jpg",
  },
];

export default function SmileGallery() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-12 px-4 mt-[80px] md:mt-[125px] sm:px-6 lg:px-8">
        <h2
          className={`text-4xl ${cinzel.className} text-center text-primary mb-10`}
        >
          Smile Gallery
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {smileGalleryData.map((item, index) => (
            <ImageCard key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <VideoCard
          src="/videos/smile-makeover-1.mp4"
          title="A Dentist Giving Dental Service To A Patient"
        />
        <VideoCard
          src="/videos/smile-makeover-2.mp4"
          title="Dentist Explaining The Dentures"
        />
      </div>

      <Book />
      <Footer />
      <ScrollAppointmentBanner />
    </div>
  );
}

function ImageCard({ item }) {
  const [showAfter, setShowAfter] = useState(false);

  const handleToggle = () => {
    setShowAfter((prev) => !prev);
  };

  return (
    <div className="">
      <div className="bg-gray-50  shadow-md rounded-xl overflow-hidden">
        <div className="relative group cursor-pointer" onClick={handleToggle}>
          {/* BEFORE IMAGE */}
          <img
            src={item.before}
            alt="Before"
            className={`w-full h-50 object-cover ${
              showAfter ? "opacity-0" : "opacity-100"
            } group-hover:opacity-0 transition-opacity duration-300`}
          />
          {/* BEFORE LABEL */}
          <span
            className={`absolute font-cinzel top-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded z-10 ${
              showAfter ? "opacity-0" : "opacity-100"
            } group-hover:opacity-0 transition-opacity duration-300`}
          >
            Before
          </span>

          {/* AFTER IMAGE */}
          <img
            src={item.after}
            alt="After"
            className={`w-full  h-50 object-cover absolute top-0 left-0 ${
              showAfter ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100 transition-opacity duration-300`}
          />
          {/* AFTER LABEL */}
          <span
            className={`absolute font-cinzel top-2 left-2 bg-green-600 bg-opacity-80 text-white text-xs px-2 py-1 rounded z-10 ${
              showAfter ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100 transition-opacity duration-300`}
          >
            After
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-tinos text-center text-gray-800">
            {item.service}
          </h3>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ src, title }) {
  return (
    <div className="bg-gray-50 shadow-md rounded-xl overflow-hidden p-4">
      <video
        controls
        className="w-full rounded-lg"
        preload="metadata"
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="text-xl font-tinos text-center text-gray-800 mt-4">
        {title}
      </h3>
    </div>
  );
}
