"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
const Form = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [referencedby, setReferencedby] = useState("");

  // Load environment variables

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { fullname, email, mobile, referencedby };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Form submission failed");

      await response.json();
      toast.success("Appointment request submitted successfully!");

      // Clear form
      setFullname("");
      setEmail("");
      setMobile("");
      setReferencedby("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[400px]">
      <div className="text-2xl text-center rounded-t-sm font-cinzel text-white bg-[#192c2f] py-3">
        REQUEST AN APPOINTMENT
      </div>
      <div className="text-center font-tinos rounded-b-sm text-white bg-[#284b50] px-4 py-5">
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="bg-white px-2 py-3 mb-3 text-gray-500 w-full border-b-4 border-b-white focus:outline-none focus:border-b-[#ff9f29] transition-all duration-300 ease-in-out"
          placeholder="First & Last Name (Required)"
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white px-2 py-3 mb-3 text-gray-500 w-full border-b-4 border-b-white focus:outline-none focus:border-b-[#ff9f29] transition-all duration-300 ease-in-out"
          placeholder="Email (Required)"
          required
        />

        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="bg-white px-2 py-3 mb-3 text-gray-500 w-full border-b-4 border-b-white focus:outline-none focus:border-b-[#ff9f29] transition-all duration-300 ease-in-out"
          placeholder="Phone Number (Required)"
          required
        />

        <select
          value={referencedby}
          onChange={(e) => setReferencedby(e.target.value)}
          className="w-full px-2 py-4 mb-3 bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff9f29] transition duration-300"
          required
        >
          <option value="">How Did You Hear About Us?</option>
          <option value="Existing Customer">Existing Customer</option>
          <option value="Google">Google</option>
          <option value="Discovered Online">Discovered Online</option>
          <option value="Word Of Mouth">Word Of Mouth</option>
          <option value="Facebook Or Other Social Media">
            Facebook Or Other Social Media
          </option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          className="bg-[#ff9f29] hover:cursor-pointer m-5 px-4 py-2 uppercase rounded-full hover:bg-[#e5891c] transition-all duration-300 ease-in-out"
        >
          Request Appointment
        </button>

        <div className="m-2"></div>

        <a
          href="https://book.modento.io/revital-dental/patient-details"
          className="bg-[#ff9f29] mt-4 px-4 py-2 uppercase rounded-full hover:bg-[#e5891c] transition-all duration-300 ease-in-out"
        >
          express online booking
        </a>
      </div>
    </form>
  );
};

export default Form;
