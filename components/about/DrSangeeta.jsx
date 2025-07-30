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

const DrSangeeta = () => {
  return (
    <div>
      <section
        className={`flex flex-col items-center bg-teal-900  text-white p-6 ${tinos.className} shadow-lg`}
      >
        {/* First Section: Doctor's Image and Bio */}
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* First Image Section */}
          <div className="w-full md:w-1/3  mt-6 md:mt-0">
            <div className="relative w-2/3 h-100 mx-auto">
              <Image
                src="/dr-gantayat.jpg"
                alt="Dr. Sangeeta Gantayat"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Text Section for Bio */}
          <div className="w-full md:w-2/3 pr-0 md:pr-6 mt-6 md:mt-0 ">
            <h2 className={`text-4xl ${cinzel.className} font-bold uppercase`}>
              Dr. Sangeeta Gantayat
            </h2>

            <p className="mt-4 text-gray-200 text-justify">
              Dr. Sangeeta Gantayat DMD (Dr.G) brings a brilliant mix of
              professional expertise and personal touch to her dental practice.
              She takes great pride in brightening up the city one smile at a
              time, providing her patients with top-notch dental care. Known for
              her compassion and patient-focused approach, she embodies the
              perfect blend of clinical proficiency and a caring demeanor,
              making dental visits a comforting and stress-free experience.
            </p>
            <p className="mt-4 text-gray-200 text-justify">
              Why she became a dentist. She comes from a family of lot of
              doctors and dentists and always wanted to be in the Profession to
              help people and the fact that dentistry helps her balance her
              professional and family goals attracted her to this career path.
              She did her dental school from GDCH Ahmedabad India in 2006 and
              then moved to US and accomplished her Doctor of Dental Medicine
              degree from Rutgers University, New Jersey 2013.
            </p>
            <p className="mt-4 text-gray-200 text-justify">
              But behind this successful dentist, there's a story of a woman who
              is deeply committed to her family. At home, she is the
              affectionate mother of two lively young daughters, aged six and
              three. Their endless energy and ceaseless curiosity bring a
              vibrant spark to her day, enriching her life in countless ways.
            </p>
          </div>
        </div>

        {/* Second Section: Family Image and Family Details */}
        <div className="flex flex-col md:flex-row items-center w-full text-justify">
          {/* Text Section for Family Details */}
          <div className="w-full md:w-2/3 pr-0 md:pr-6">
            <p className="mt-4 text-gray-200">
              Alongside these roles, she is also a loving wife to her dashing
              husband, an IT professional who, with his charm and wit, never
              fails to bring a smile to her face. His unwavering support and
              shared dedication to their family provide the backbone to their
              harmonious work-life balance.
            </p>
            <p className="mt-4 text-gray-200">
              Juggling her career and family life with grace, Dr. G believes her
              experiences as a mother and wife enrich her dental practice. They
              underscore the importance of patience, clear communication, and
              unconditional care — values that she brings into every patient
              interaction. In her free time, Dr. G indulges in her passion for
              gardening and cooking. Gardening is a stress buster and helps her
              connect to nature. Cooking different foods and spending time with
              friends helps her rejuvenate.
            </p>
            <p className="mt-4 text-gray-200">
              Dr. G extends a warm invitation to join her dental family
              including her and her warm and caring dental team, where you will
              receive top-tier dental care coupled with a personal touch. In her
              capable hands, you can expect nothing less than a comfortable,
              rewarding experience.
            </p>
          </div>

          {/* Second Image Section (Family Photo) */}
          <div className="w-full md:w-1/3  mt-6 md:mt-0">
            <div className="relative w-2/3 h-100 mx-auto">
              <Image
                src="/dr-gantayat-family.jpg"
                alt="Dr. Gantayat's Family"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrSangeeta;
