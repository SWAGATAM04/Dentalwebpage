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
const Employee = () => {
  return (
    <div>
      <section
        className={`flex flex-col md:flex-row items-center bg-white text-black p-6 ${tinos.className} shadow-lg`}
      >
        {/* Image Section - Moves to top on mobile */}
        <div className="w-full md:w-1/3 order-first  mt-6 md:mt-0">
          <div className="relative w-2/3 h-80 mx-auto">
            <Image
              src="/Erik-scaled.jpg"
              alt="Erik Perez"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="rounded object-cover"
            />
          </div>
        </div>

        {/* Text Section - Moves below image on mobile */}
        <div className="w-full md:w-2/3 pr-0 md:pr-6 order-last md:order-first ">
          {/* Heading */}
          <h2
            className={`text-4xl pt-2 text-primary ${cinzel.className} font-bold uppercase`}
          >
            Erik Perez
          </h2>

          {/* Description */}
          <p className="mt-4 text-black text-justify">
            I am a fun and caring individual who enjoys making people laugh and
            smile.
          </p>
          <p className="mt-4 text-black text-justify">
            I've been in the dental field for the past 7 years and have enjoyed
            being part of my patient's life changing dental care.
          </p>
          <p className="mt-4 text-black text-justify">
            I've worked with all kinds of patients from different backgrounds
            and financial status and take pride of making sure I go above and
            beyond to ensure everyone's concerns are handled in a timely and
            professional manner.
          </p>
          <p className="mt-4 text-black text-justify">
            Outside of work, I enjoy going out of town to socialize, go to
            concerts, or shopping.
          </p>
        </div>
      </section>
      <section
        className={`flex flex-col md:flex-row items-center bg-white text-black p-6 ${tinos.className} shadow-lg`}
      >
        {/* Image Section - Moves to top on mobile */}
        <div className="w-full md:w-1/3 order-first  mt-6 md:mt-0">
          <div className="relative w-2/3 h-80 mx-auto">
            <Image
              src="/Ashtyn-scaled.jpg"
              alt="Ashtyn"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="rounded object-cover"
            />
          </div>
        </div>

        {/* Text Section - Moves below image on mobile */}
        <div className="w-full md:w-2/3 pr-0 md:pr-6 order-last md:order-first ">
          {/* Heading */}
          <h2
            className={`text-4xl pt-2 text-primary  ${cinzel.className} font-bold uppercase`}
          >
            Ashtyn Gonzalez
          </h2>

          {/* Description */}
          <p className="mt-4 text-black text-justify">
            “She is clothed with strength and dignity, and she laughs without
            fear of the future” Proverbs 31:25
          </p>
          <p className="mt-4 text-black text-justify">
            Growing up I was very indecisive of what I wanted to be. I
            originally earned my associate degree in social work specialization,
            but shortly after I switched over to dental assistant. I attended
            Waco Dental Assistant School and officially became an assistant in
            April 2022. My grandfather who raised me owned his own dental
            practice, so I believe subconsciously, dental assistant was my true
            calling. I have 3 beautiful children, two girls and one boy. I am
            not only clothed with strength and dignity, but tattoos. If I’m not
            here at Revital Dental, and my children aren’t attached to my hip,
            you will find me in the gym. You might catch me snacking and rocking
            around singing along to a song with converse or vans on.
          </p>
        </div>
      </section>
      <section
        className={`flex flex-col md:flex-row items-center bg-white text-black p-6 ${tinos.className} shadow-lg`}
      >
        {/* Image Section - Moves to top on mobile */}
        <div className="w-full md:w-1/3 order-first  mt-6 md:mt-0">
          <div className="relative w-2/3 h-80 mx-auto">
            <Image
              src="/Arcelia-scaled.jpg"
              alt="Arcelia"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="rounded object-cover"
            />
          </div>
        </div>

        {/* Text Section - Moves below image on mobile */}
        <div className="w-full md:w-2/3 pr-0 md:pr-6 order-last md:order-first ">
          {/* Heading */}
          <h2
            className={`text-4xl pt-2 text-primary ${cinzel.className} font-bold uppercase`}
          >
            Arcelia Gonzalez
          </h2>

          {/* Description */}
          <p className="mt-4 text-black text-justify">
            I have been a registered dental assistant since December of 2019. I
            graduated from Waco dental assistant school. I am currently a Temple
            college student pursuing my degree in hopes to become a dental
            hygienist. I strive every day to expand and grow my knowledge in
            dentistry. I love helping patients and informing them of the
            importance of dental hygiene.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Employee;
