"use client";
import React, { useState } from "react";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import Modal from "@/components/Modal";
import Form from "@/components/Form";

const cinzel = Cinzel({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  display: "swap",
});

const Book = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="grid md:grid-cols-3 font-inter grid-cols-1 mt-0 gap-1 text-lg">
        <div className="flex justify-center items-center py-12 flex-col gradient-primary text-white">
          <p className="font-medium">4311 S 31st Ste 145</p>
          <p className="font-medium">Temple, TX 76502</p>
          <Link
            href="https://www.google.com/maps/place/Revital+Dental/@31.0575554,-97.3734765,17z/data=!3m1!4b1!4m6!3m5!1s0x86456b77cbcefa79:0xcf1db0a8e3bdced7!8m2!3d31.0575554!4d-97.3734765!16s%2Fg%2F11q598fxmn?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
            className="btn bg-white text-primary hover:bg-neutral-100 w-[70%] mt-4"
          >
            Get Directions
          </Link>
        </div>
        <div className="flex justify-center items-center py-12 flex-col gradient-secondary text-white">
          <p className="font-medium">Book Today!</p>
          <p className="font-semibold text-xl">(254) 207-0708</p>

          <button
            onClick={() => setShowForm(true)}
            className="btn bg-white text-secondary hover:bg-neutral-100 w-[70%] mt-4"
          >
            <span>Request Appointment</span>
          </button>
        </div>
        <div className="flex justify-center items-center py-12 flex-col gradient-accent text-white">
          <p className="font-medium">Comments or</p>
          <p className="font-medium">Suggestions?</p>
          <Link
            href="contact"
            className="btn bg-white text-accent hover:bg-neutral-100 w-[70%] mt-4"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <Form />
      </Modal>
    </>
  );
};

export default Book;
