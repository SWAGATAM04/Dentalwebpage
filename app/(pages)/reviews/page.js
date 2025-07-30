"use client";

import React from "react";
import { Cinzel } from "next/font/google";
import { FaStar } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Book from "@/components/Book";
import Footer from "@/components/Footer";
import ScrollAppointmentBanner from "@/components/ScrollAppointmentBanner";

const cinzel = Cinzel({ subsets: ["latin"], display: "swap" });

const reviews = [
  {
    name: "Emily Johnson",
    rating: 5,
    comment: "Amazing experience! My smile has truly transformed.",
  },
  {
    name: "Michael Smith",
    rating: 4,
    comment: "Great service and friendly staff. Highly recommended.",
  },
  {
    name: "Sarah Thompson",
    rating: 5,
    comment: "I was nervous, but they made me feel so comfortable. Thank you!",
  },
  {
    name: "James Miller",
    rating: 4,
    comment: "Professional and caring. My teeth look fantastic now!",
  },
  {
    name: "Ashley Davis",
    rating: 5,
    comment: "The best dental care I've received in years.",
  },
];

export default function ReviewsPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-[125px]">
        <h2
          className={`text-4xl ${cinzel.className} text-center text-primary mb-10`}
        >
          What Our Patients Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 shadow-lg rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <Book />
      <Footer />
      <ScrollAppointmentBanner />
    </div>
  );
}
