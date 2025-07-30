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
    <form onSubmit={handleSubmit} className="w-[400px] card overflow-hidden">
      <div className="text-2xl text-center font-cinzel text-white gradient-primary py-4">
        REQUEST AN APPOINTMENT
      </div>
      <div className="text-center font-inter gradient-secondary text-white px-6 py-6 space-y-4">
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="form-input text-neutral-700"
          placeholder="First & Last Name (Required)"
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input text-neutral-700"
          placeholder="Email (Required)"
          required
        />

        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="form-input text-neutral-700"
          placeholder="Phone Number (Required)"
          required
        />

        <select
          value={referencedby}
          onChange={(e) => setReferencedby(e.target.value)}
          className="form-input text-neutral-700"
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
          className="btn btn-accent uppercase mt-4"
        >
          Request Appointment
        </button>

        <a
          href="https://book.modento.io/revital-dental/patient-details"
          className="btn btn-accent uppercase inline-block"
        >
          express online booking
        </a>
      </div>
    </form>
  );
};

export default Form;
