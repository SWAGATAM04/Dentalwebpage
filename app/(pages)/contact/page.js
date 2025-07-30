"use client";
import React, { useState } from "react";
import { Cinzel, Tinos } from "next/font/google";
import Navbar from "@/components/Navbar";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaComment,
  FaMapMarkerAlt,
  FaClock,
  FaMobileAlt,
} from "react-icons/fa";
import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollAppointmentBanner from "@/components/ScrollAppointmentBanner";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
});
const tinos = Tinos({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact-with-message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log("Response:", data);
      setSubmitted(true);
      setFormData({ fullname: "", email: "", mobile: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="bg-teal-950 w-full h-[80vh] md:h-[85vh] flex md:items-center pt-16">
        <div className="p-10 text-white">
          <h3 className={`font-cinzel text-xl md:text-3xl`}>Revital Dental</h3>
          <h1 className={`font-cinzel text-4xl md:text-5xl`}>
            Location & Contact Information
          </h1>
          <p
            className={`${tinos.className} mt-4 text-lg md:text-lg md:py-2 md:w-3/4`}
          >
            Our office offers a full array of dental services to help you create
            a satisfying smile. For any business or financial matters, you can
            reach Revital Dental at (254) 207-0708.
          </p>
          <p
            className={`${tinos.className} mt-4 text-lg md:text-lg  md:w-3/4 `}
          >
            Simply call, or you can provide us with the following information
            and we will contact you shortly to confirm your appointment. We're
            looking forward to meeting you.
          </p>
        </div>
      </div>
      <div className="mb-20 relative z-10 max-w-6xl mx-auto -mt-24 bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full md:w-2/3 p-8">
          <div className="w-full flex justify-between">
            <h2 className="text-4xl text-orange-500 font-semibold mb-6 pb-10">
              Get In Touch
            </h2>
            <img src="/icon-message.png" alt="Message Icon" className="h-fit" />
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name & Phone */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full flex items-center border-b border-gray-400">
                <FaUser className="text-xl mr-2 text-gray-800" />
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="First & Last Name (Required)"
                  required
                  className="w-full focus:outline-none py-2"
                />
              </div>
              <div className="w-full flex items-center border-b border-gray-400">
                <FaPhoneAlt className="text-xl mr-2 text-gray-800" />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Phone Number (Required)"
                  required
                  className="w-full focus:outline-none py-2"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center border-b border-gray-400">
              <FaEnvelope className="text-xl mr-2 text-gray-800" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (Required)"
                required
                className="w-full focus:outline-none py-2"
              />
            </div>

            {/* Message */}
            <div className="flex items-start border-b border-gray-400">
              <FaComment className="text-xl mr-2 text-gray-800 mt-2" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full focus:outline-none py-2 resize-none"
                rows="3"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold py-2 w-full rounded-full hover:bg-orange-600 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {submitted && (
              <p className="text-green-600 font-semibold">
                Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-600 font-semibold">Error: {error}</p>
            )}
          </form>
        </div>
        {/* Right Side - Contact Info */}
        <div className="w-full md:w-1/3 bg-[#12343b] text-white p-0 m-0 flex flex-col ">
          <img
            src="/contact-us.jpg"
            alt="Contact"
            className="w-full h-60 object-cover mb-4"
          />
          <h3 className="text-2xl text-center font-cinzel font-semibold border-b border-gray-400">
            Contact Information
          </h3>
          <div className="space-y-4 font-tinos text-md p-5">
            <Link href="https://maps.google.com/?q=4311%20S%2031st%20Ste%20145%20Temple,%20TX%2076502">
              <div className="flex text-md items-start  gap-3 border-b border-gray-400 py-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  4311 S 31st Ste 145
                  <br />
                  Temple, TX 76502
                </span>
              </div>
            </Link>
            <div className="border-b border-gray-400 py-2 flex items-center gap-3">
              <FaMobileAlt />
              <span>(254) 207-0708</span>
            </div>
            <div className="border-b border-gray-400 py-2  space-y-1">
              {[
                ["Monday", "9:00AM to 5:00PM"],
                ["Tuesday", "9:00AM to 5:00PM"],
                ["Wednesday", "9:00AM to 5:00PM"],
                ["Thursday", "9:00AM to 5:00PM"],
                ["Friday", "9:00AM to 5:00PM"],
                ["Saturday", "9:00AM to 2:00PM"],
                ["Sunday", "Closed"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between pb-1">
                  <span>{day}:</span>
                  <span>{time}</span>
                </div>
              ))}
              <p className="text-md pt-2 italic text-center">
                Saturday by Appointment Only
              </p>
            </div>
          </div>
        </div>
      </div>
      <Book />
      <Footer />
      <ScrollAppointmentBanner />
    </div>
  );
};

export default Page;
