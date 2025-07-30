import React from "react";
import Image from "next/image";
import { Tinos } from "next/font/google";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
});
const tinos = Tinos({
  weight: "400",
  subsets: ["latin"],
});

const DentalServiceSection = () => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center bg-white p-6 shadow-lg ${cinzel.className}`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/3 h-96 relative">
        <Image
          src="/about-us-1.jpg"
          alt="Dental office interior"
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="rounded object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 pl-0 md:pl-6 mt-4 md:mt-0 flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-4xl  text-black">
            <span className="text-orange-500 text-lg block">ABOUT</span>
          </h2>
          <h2 className="text-5xl  text-black">REVITAL</h2>
          <h2 className="text-5xl text-black">DENTAL</h2>

          <p className={`text-black mt-4 text-justify ${tinos.className}`}>
            Revital Dental is a Temple based family dentist practice that treats
            patients of all ages. We are committed to delivering the highest
            quality dental care and do so using advanced dental equipment. We
            are a cosmetic dentist that offers services like checkups, teeth
            cleaning, veneers and more.
          </p>
        </div>

        {/* Right Column */}
        <div
          className={`md:w-1/2 md:pl-6 mt-6 text-justify md:mt-11 flex items-start ${tinos.className}`}
        >
          <p className="text-black font-medium">
            We also perform emergency dentist services that include bonding,
            root canals, crowns, and bridges. As a local dentist, we create
            lifelong relationships with our patients and their families and work
            to ensure that they receive treatments in a comfortable and relaxed
            environment. The Doctor and Associates and our team invite you to
            schedule an appointment by calling 254-207-0708 and experience why
            our patients think Revital Dental is the best dentist in Temple.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DentalServiceSection;
