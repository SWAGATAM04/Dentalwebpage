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

const DrK = () => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center bg-emerald-950 text-white p-6 ${tinos.className} shadow-lg`}
    >
      {/* Image Section - Moves to top on mobile */}
      <div className="w-full md:w-1/3 order-first md:order-last mt-6 md:mt-0">
        <div className="relative w-2/3 h-96 mx-auto">
          <Image
            src="/kondrgaunta1.jpg"
            alt="Dr. Suman Kondragunta"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>
      </div>

      {/* Text Section - Moves below image on mobile */}
      <div className="w-full md:w-2/3 pr-0 md:pr-6 order-last md:order-first ">
        {/* Heading */}
        <h2 className={`text-4xl pt-2 ${cinzel.className} font-bold uppercase`}>
          Dr. Suman Kondragunta
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-200 text-justify">
          With over 11 yrs of full-time dental experience, Dr. Suman
          Kondragunta(AKA, Dr. K) treats all patients with compassion and gentle
          dental care. Dr. Kondragunta graduated and attended New York
          University College of Dentistry where he received a Doctor of dental
          surgery in 2011. After graduating he moved to NM where he served the
          neediest communities for over 5 years. After creating beautiful smiles
          in New Mexico Dr. K and his wife decided it was time for a change with
          their family growing. They couldn’t be happier with their decision to
          put down their roots in Texas while serving the Texans. Dr. K loves
          meditation and Tacos(Tex Mex) food.
        </p>
        <p className="mt-4 text-gray-200 text-justify">
          Dr. K and staff offer a gentle, relaxing, and patient-friendly
          environment to their patients. Dr. K welcomes patients of all ages and
          looks forward to meeting and offering you the best professional,
          caring and pain-free oral health care that you deserve.
        </p>
        <p className="mt-4 text-gray-200 text-justify">
          When not in the office Dr. K enjoys spending time with his wife
          Deepanala and his 2 kids Arnav and Avan. He also enjoys hiking and
          biking, and outdoor recreations. He is passionate about wood carving,
          sculpture, and painting. Also, Dr. K is fond of sports cars.
        </p>
      </div>
    </section>
  );
};

export default DrK;
