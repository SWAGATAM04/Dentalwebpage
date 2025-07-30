"use client";
import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] grid-col-1 gap-5 mt-5 px-10">
        <div className="flex justify-center items-center flex-col">
          <h3 className="uppercase font-cinzel text-center text-2xl text-primary">
            welcome to
          </h3>
          <h2 className="uppercase font-cinzel text-center text-5xl ">
            revital dental
          </h2>
          <div className="text-center text-primary text-5xl  mt-[-30px]">
            . . . . .
          </div>
          <p className="text-justify">
            We are committed to providing quality healthcare to families located
            in the Temple area and treat patients of all ages. We provide
            comprehensive solutions for our patients' oral health needs.
            Believing in the importance of listening to our patients, we take
            the time to truly understand each person's needs, goals, and
            lifestyle. By understanding our patients' objectives we can provide
            solutions that will improve their health while transforming their
            smile into something bright and beautiful
          </p>
          <p className="text-justify pt-2">
            Revital Dental is located at 4311 S 31st Ste 145, Temple, TX. We are
            currently accepting new patients, and you can schedule an
            appointment by calling 254-207-0708.
          </p>
        </div>

        <div className="flex justify-between items-center flex-col">
          <img
            src="./service.jpg"
            className="md:w-[50%] w-[80%] rounded-full"
            alt=""
          />
          <h3 className="uppercase font-cinzel text-center text-2xl mt-3">
            Our team
          </h3>
          <p className="text-justify">
            The Doctor and Associates and the team at Revital Dental provide
            quality dental care to patients in the Temple area, focusing on a
            comprehensive approach to oral health. By treating and educating
            patients, our team helps stay healthy in between visits. Our team
            understands the importance of listening to patients, helping them to
            feel comfortable and relaxed. This personal approach is evident in
            everything we do. From making an appointment, filling out paperwork,
            conducting an examination, and providing dental team at Dental take
            the time to connect with patients and give them the thoughtful
            attention they deserve. Our team is trained on advanced dental
            procedures and techniques so that patients can benefit from the
            latest in dental care.
          </p>
          <Link
            href="/about"
            className="bg-primary w-[80%] text-center  text-white py-2 rounded-full mt-5"
          >
            About Us
          </Link>
        </div>

        <div className="flex justify-between items-center flex-col">
          <img
            src="./hhh.jpg"
            className="md:w-[50%] w-[80%] rounded-full"
            alt=""
          />
          <h3 className="uppercase font-cinzel text-center text-2xl mt-3">
            Our Services
          </h3>
          <p className="text-justify">
            Revital Dental provides a wide variety of dental services and
            procedures to address all of our patients' dental health needs. By
            combining quality patient care with up-to-date technology, we are
            able to treat patients of all ages in a comfortable and relaxing
            setting. Our website includes information on the following items:
            Dentist, Cosmetic Dentist, Family Dentist, General Dentist,
            Emergency Dentist, Dental Implants, Dental Crowns, Dental Bridges,
            Teeth Whitening, Dental Veneers and more. Our Dentist and
            experienced team are trained to not only treat patients but to
            identify what caused the health concern in the first place. This
            comprehensive approach sets patients of Revital Dental on the road
            to recovery and long term oral health.
          </p>
          <Link href="/services" className="bg-primary text-center w-[80%] py-2 text-white rounded-full mt-5">
            View Our Services
          </Link>
        </div>

        <div className="flex justify-between items-center flex-col">
          <img
            src="./pat.jpg"
            className="md:w-[50%] w-[80%] rounded-full"
            alt=""
          />
          <h3 className="uppercase font-cinzel text-center text-2xl mt-3">
            Patient Information
          </h3>
          <p className="text-justify">
            When you walk into the office of Revital Dental you will be
            immediately greeted by our friendly team who are dedicated to making
            sure that you feel comfortable during your entire appointment. We
            understand that patients can feel anxious when going to the dentist,
            and our team will take the time to listen to all of your concerns
            and help you understand exactly what your procedure is going to be
            like. At Revital Dental we pride ourselves on being an affordable
            family dentist that accepts a variety of insurance plans and payment
            options, like cash and credit cards, because we want to provide a
            beautiful, healthy smile to everyone in the Temple area. Call
            Revital Dental today at 254-207-0708 to see why we are the dentist
            of choice in the Temple area.
          </p>
          <Link
            href="patient-information"
            className="bg-primary w-[80%] py-2 text-center text-white rounded-full mt-5"
          >
            Patient
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
