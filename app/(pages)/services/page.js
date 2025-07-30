import Navbar from "@/components/Navbar";
import React from "react";
import { Tinos } from "next/font/google";
import { Cinzel } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import Book from "@/components/Book";
import Footer from "@/components/Footer";
import ScrollAppointmentBanner from "@/components/ScrollAppointmentBanner";
const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
});
const tinos = Tinos({
  weight: "400",
  subsets: ["latin"],
});
const services = [
  {
    title: "ROUTINE DENTAL CARE",
    icon: "/icon-routine-dental-care.png",
    items: [
      { label: "Dental Checkup", href: "/dental-checkup" },
      { label: "Dental Anxiety", href: "/dental-anxiety" },
      { label: "Oral Hygiene Basics", href: "/oral-hygiene-basics" },
      { label: "Oral Cancer Screening", href: "/oral-cancer-screening" },
      { label: "Why Are My Gums Bleeding?", href: "/why-are-my-gums-bleeding" },
      {
        label: "I Think My Gums Are Receding",
        href: "/i-think-my-gums-are-receding",
      },
    ],
  },
  {
    title: "COSMETIC DENTAL SERVICES",
    icon: "/icon-cosmetic-dental-services.png",
    items: [
      { label: "Smile Makeover", href: "/what-can-i-do-to-improve-my-smile" },
      {
        label: "Dental Veneers and Laminates",
        href: "/dental-veneers-and-dental-laminates",
      },
      {
        label: "Dental Crowns and Bridges",
        href: "/dental-crowns-and-dental-bridges",
      },
      {
        label: "Full Mouth Reconstruction",
        href: "/full-mouth-reconstruction",
      },
    ],
  },
  {
    title: "DENTAL IMPLANT SERVICES",
    icon: "/icon-dental-implants.png",
    items: [
      {
        label: "Am I a Candidate for Dental Implants?",
        href: "/will-i-need-a-bone-graft-for-dental-implants",
      },
      { label: "Dental Implants Overview", href: "/dental-implants" },
      { label: "TeethXpress Implants", href: "/teethxpress" },
      {
        label: "Options for Replacing Missing Teeth",
        href: "/options-for-replacing-missing-teeth",
      },
    ],
  },
  {
    title: "DENTURE SERVICES",
    icon: "/icon-dentures.png",
    items: [
      {
        label: "Dentures and Partial Dentures",
        href: "/dentures-and-partial-dentures",
      },

      {
        label: "What If I Damage My Dentures?",
        href: "/what-do-i-do-if-i-damage-my-dentures",
      },
    ],
  },
  {
    title: "ORTHODONTIC SERVICES",
    icon: "/icon-clear-braces.png",
    items: [{ label: "Invisalign Clear Aligners", href: "/invisalign" }],
  },
  {
    title: "TEETH WHITENING SERVICES",
    icon: "/icon-teeth-whitening.png",
    items: [
      { label: "Zoom Teeth Whitening", href: "/zoom-teeth-whitening" },

      {
        label: "Improve Your Smile for Senior Pictures",
        href: "/improve-your-smile-for-senior-pictures",
      },
    ],
  },
  {
    title: "ROOT CANAL & TOOTH EXTRACTION",
    icon: "/icon-root-canal.png",
    items: [
      { label: "Do I Need a Root Canal?", href: "/do-i-need-a-root-canal" },
      { label: "Root Canal Treatment", href: "/root-canal-treatment" },
      { label: "Wisdom Teeth Extraction", href: "/wisdom-teeth-extraction" },
      {
        label: "Tooth Extraction",
        href: "/when-is-a-tooth-extraction-necessary",
      },
    ],
  },
  // {
  //   title: "EMERGENCY DENTAL SERVICES",
  //   icon: "/icon-dental-emergency.png",
  //   items: [
  //     { label: "Emergency Dentist", href: "/emergency-dentist" },
  //     {
  //       label: "What Should I Do If I Chip My Tooth?",
  //       href: "/what-should-i-do-if-i-chip-my-tooth",
  //     },
  //   ],
  // },
  {
    title: "SPECIALIZED SERVICES",
    icon: "/icon-specialized-care.png",
    items: [
      { label: "Sleep Apnea Diagnosis", href: "/do-i-have-sleep-apnea" },
      { label: "Kid-Friendly Dentist", href: "/kid-friendly-dentist" },
    ],
  },
];

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="md:mt-[125px] mt-[70px] ">
        <div className="md:flex justify-center text-center bg-gray-800 p-10">
          <div className="font-cinzel text-white justify-center text-center">
            <h1 className="text-6xl">Dental Services</h1>
            <p className="text-3xl">Temple, Tx</p>
            <p className="text-5xl ">.......</p>
          </div>
          {/* <div>
            <div className="flex flex-row bg-white text h-10 text-center justify-end items-center p-2">
              <CiSearch />
              <input
                placeholder="Search"
                className="bg-white outline-none text-sm p-1 w-md "
              />
            </div>
            <div className="flex justify-center md:justify-end pt-2">
              <button className="bg-primary h-7 w-20 font-cinzel rounded-xl hover:cursor-pointer ">
                search
              </button>
            </div>
          </div> */}
        </div>

        <div className="bg-gray-800 py-10 px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-sm p-5 shadow">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 p-2 border border-gray-300 rounded-full flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt="icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <h3 className="text-center font-cinzel font-medium text-lg mb-2">
                  {service.title}
                </h3>
                <ul className="text-md text-gray-900 font-tinos list-disc pl-10 space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={`/temple-tx/${item.href}`}
                        className=" hover:border-b-2"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Search card */}
            {/* <div className="bg-white rounded-md p-5 shadow flex flex-col justify-between">
              <div className="flex justify-center  mb-3">
                <Image
                  src="/icon-get-help.png"
                  alt="search icon"
                  width={70}
                  height={70}
                  className="rounded-full border border-gray-500"
                />
              </div>
              <h3 className="text-center font-medium font-cinzel text-lg mb-4">
                STILL CAN’T FIND?
              </h3>

              <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full outline-none text-sm"
                />
              </div>

              <button className="bg-orange-500 text-white py-1 my-3 rounded hover:bg-orange-600 text-sm">
                Search
              </button>

              <ul className=" text-sm font-tinos text-gray-700 space-y-1 list-disc pl-5">
                <Link href="/find-a-dentist">Find a Dentist in Temple, TX</Link>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Revital Dental Services Offered */}
        <div className="bg-white m-10">
          <h3 className="font-cinzel text-2xl py-3">
            Revital Dental Services Offered
          </h3>
          <hr />
          <p className="text-justify py-3 font-tinos">
            Revital Dental provides a wide variety of dental services and
            procedures to address all of our patients' dental health needs. By
            combining quality patient care with up-to-date technology, we are
            able to treat patients of all ages in a comfortable and relaxing
            setting. Our dentist and highly trained team are trained to not only
            treat patients but to identify what caused the health concern in the
            first place. This approach sets patients of Revital Dental on the
            road to recovery and long term oral health.
          </p>
          <p className="text-justify py-3 font-tinos">
            We offer a wide variety of services for patients throughout the
            Temple Texas area. Our patients depend on the Doctor and Associates
            to meet all of their oral healthcare needs. Whether you need
            preventative care, restorative solutions or a smile makeover, we can
            help.
          </p>
          <h3 className="font-cinzel text-2xl py-3">Cosmetic Dental Care</h3>
          <hr />
          <p className="text-justify py-3 font-tinos">
            Cosmetic dental care involves enhancing the appearance of one’s
            teeth, which will also benefit one’s oral health in the process. We
            can enhance the brightness, shape, and size of one’s teeth. We can
            also use cosmetic dentistry to straighten one’s teeth and repair
            damage, which can include replacing missing teeth. Our cosmetic
            dental treatments will not hinder the functionality of your teeth
            and will allow you to continue life as normal. If you are interested
            in enhancing your smile, do not hesitate to give us a call and
            schedule an appointment. We will go over the possible options and
            customize your smile to what you want.
          </p>
          <h3 className="font-cinzel text-2xl py-3">Dental Procedures</h3>
          <hr />
          <p className="text-justify py-3 font-tinos">
            Our dental procedures involve treating the patient’s oral health in
            a professional and efficient manner. Our dental procedures range
            from simple cleanings to more serious oral health treatments. Adult
            teeth are not invincible and can sustain permanent damage that does
            not go away with brushing or flossing. Our dental procedures can
            help to restore, replace or repair teeth to the best condition
            possible. By scheduling an appointment, we will be able to help
            treat any pain your experience with your teeth and help to brighten
            your smile.
          </p>
          <h3 className="font-cinzel text-2xl py-3">Dental Services</h3>
          <hr />
          <p className="text-justify py-3 font-tinos">
            Our dental services range from the simple checkup to a deep cleaning
            of the gums. When a patient arrives for a checkup, we will examine
            the teeth and determine if there are any oral health risks. Once we
            have a clear idea of the patient’s teeth, we will recommend the most
            effective treatment method. At a regular appointment, we will
            conduct a cleaning of the teeth, gums, and mouth, to ensure that the
            patient is in good oral health. We will answer any questions the
            patient has before the procedure if the patient has any worries.
          </p>
          <h3 className="font-cinzel text-2xl py-3">
            Helpful Dental Information
          </h3>
          <hr />
          <p className="text-justify py-3 font-tinos">
            We offer helpful dental information such as the fact that you need
            to floss before brushing for any real effect. While we use regular
            dental checkups to clean teeth, we also use them to educate patients
            on proper oral hygiene. It is crucial for patients to brush their
            teeth twice a day and at least floss once a day to keep the teeth
            healthy. While regular brushing and flossing can help, they are not
            enough to keep teeth healthy on their own. By scheduling regular
            dental checkups at least twice a year, we can prevent any early
            signs of infection or decay before they get worse. Do not hesitate
            to give us a call, schedule an appointment and ask us any questions
            about oral health before we begin the procedure.
          </p>
        </div>
      </div>
      <Book />
      <Footer />
      <ScrollAppointmentBanner />
    </div>
  );
};

export default page;
