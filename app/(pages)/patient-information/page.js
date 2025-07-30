import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollBanner from "@/components/ScrollAppointmentBanner";
import React from "react";
import { Tinos } from "next/font/google";
import { Cinzel } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const tinos = Tinos({
  weight: "400",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  display: "swap",
});
const page = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[85px]  border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/patient-info-main-2.jpg)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Patient Information
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            The team at Revital Dental is committed to providing excellent
            dental care in a comfortable environment where patients can relax
            and feel at ease. Here you will find information on what to expect
            during your first appointment.
          </p>
          <p className="font-cinzel  text-justify">Contact Us</p>
          <p className="font-tinos  text-justify">
            We are happy to hear from you, answer your questions, and schedule
            an appointment. Call Revital Dental at 254-207-0708 or stop by our
            office.
          </p>
          <p className="font-tinos  text-justify">
            4311 S 31st Ste 145 <br /> Temple, TX 76502
          </p>
        </div>
        <div className="py-10">
          <form
            action=""
            className="w-full mx-auto mt-10 md:mt-0 max-w-[400px]"
          >
            <div className="text-2xl text-center font-cinzel text-white bg-[#192c2f] py-3">
              REQUEST AN APPOINMENT
            </div>
            <div className="text-center font-cinzel text-white bg-[#284b50] px-4 py-5">
              <input
                type="text"
                className="bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white"
                placeholder="First & Last Name (Required)"
              />

              <input
                type="text`"
                className="bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white"
                placeholder="Email (Required)"
              />

              <input
                type="text"
                className="bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white"
                placeholder="Phone Number (Required)"
              />

              <select
                name=""
                id=""
                className="w-full px-2 py-4 bg-white text-gray-500"
              >
                <option value="">one</option>
                <option value="">two</option>
                <option value="">three</option>
              </select>

              <button className="bg-[#ff9f29] mt-4 px-4 py-2  uppercase rounded-full">
                Request Appointment
              </button>
              <button className="bg-[#ff9f29] mt-4  px-4 py-2 uppercase rounded-full">
                express online booking
              </button>
            </div>
          </form>
        </div>
      </section>
      <section
        className={`flex flex-col md:flex-row items-center justify-center bg-dark text-white md:p-15 p-6 ${tinos.className} shadow-lg gap-6`}
      >
        <div className="flex-1">
          <h1 className="font-cinzel text-center md:text-left text-3xl">
            New Patients
          </h1>
          <p className="mt-4 text-gray-200 text-justify">
            It is easy to make an appointment for your initial examination and
            dental treatments. Call 254-207-0708 to speak with a team member.
          </p>
          <p className="mt-6 text-gray-200 font-cinzel text-justify">
            Payment Methods – Cheque or Cash Accepted
          </p>
          <div className="flex flex-row mt-3">
            <Link href="https://www.visa.co.in/">
              <Image
                src="/patient-info/icon-payment-visa.png"
                alt="Payment Methods"
                width={50}
                height={20}
                className="mt-4  md:mt-0"
              />
            </Link>
            <Link href="https://www.discover.com/">
              <Image
                src="/patient-info/icon-payment-discover.png"
                alt="Payment Methods"
                width={50}
                height={20}
                className="mt-4 ml-4 md:mt-0"
              />
            </Link>
            <Link href="https://www.americanexpress.com/en-in/">
              <Image
                src="/patient-info/icon-payment-american-express.png"
                alt="Payment Methods"
                width={50}
                height={20}
                className="mt-4 ml-4 md:mt-0"
              />
            </Link>
            <Link href="https://www.mastercard.co.in/en-in.html">
              <Image
                src="/patient-info/icon-payment-master-card.png"
                alt="Payment Methods"
                width={50}
                height={20}
                className="mt-4 ml-4 md:mt-0"
              />
            </Link>
            <Link href="patient-information">
              <Image
                src="/patient-info/icon-payment-check.png"
                alt="Payment Methods"
                width={50}
                height={20}
                className="mt-4 ml-4 md:mt-0"
              />
            </Link>

            <Image
              src="/patient-info/icon-payment-cash.png"
              alt="Payment Methods"
              width={50}
              height={20}
              className="mt-4 ml-4 md:mt-0"
            />
            <Link href="https://www.carecredit.com/">
              <Image
                src="/patient-info/icon-payment-carecredit.png"
                alt="Payment Methods"
                width={200}
                height={10}
                className="mt-4 ml-4 md:mt-0"
              />
            </Link>
          </div>
          <hr className="m-10" />
        </div>
        <div></div>
      </section>
      <div className="font-cinzel">
        <h1 className="flex flex-col text-primary justify-center text-center pt-10 text-4xl md:text-6xl">
          Welcome To
          <br />
          <span className="text-black"> Revital Dental</span>
        </h1>
      </div>
      <div className="flex flex-col text-primary justify-center text-center text-4xl">
        <p>.......</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 py-10">
        {/* Card Template */}
        {[
          {
            src: "/patient-info/making-an-appointment.jpg",
            title: "Making an Appointment",
            description:
              "It is easy to make an appointment for your initial examination and dental treatments with Revital Dental. Simply call 254-207-0708 and one of our friendly team members will assist you. If something comes up, please call and cancel 24 hours in advance.",
          },
          {
            src: "/patient-info/c9.jpg",
            title: "What to Expect",
            description:
              "Walk into our lobby where you will be greeted by our friendly team. We will provide you with new patient paperwork that includes a health questionnaire, request for your insurance information and contact information. We will also provide you with information to familiarize you with our office and how we handle things like patient privacy.",
          },
          {
            src: "/patient-info/e1.jpg",
            title: "Initial Examination",
            description:
              "Your initial dental exam will take around one hour. The experienced team at Revital Dental will ask you questions, get to know your oral hygiene routine, and listen to your health concerns. We believe in educating patients and empowering them to make good choices to improve their oral health. We will demonstrate how to properly care for your teeth and make additional suggestions as needed. Our dental hygienist will clean your teeth then The Doctor and Associates will complete your examination and make recommendations for proposed dental treatments.",
          },
          {
            src: "/patient-info/pain-concerns-1.jpg",
            title: "Pain Concerns",
            description:
              "We work to ensure our patients feel comfortable, and that includes minimizing their pain as much as possible. If you are undergoing a dental procedure, The Doctor and Associates will meet with you to discuss your pain tolerance and create a plan for pain management. Working together, we will treat your dental health problems in a way that minimizes pain and enables you to get back to your life faster.",
          },
          {
            src: "/patient-info/dental-insurance-1.jpg",
            title: "Dental Insurance",
            description:
              " We accept a variety of insurance providers and endeavor to accommodate our patients' request. Please call our office at 254-207-0708 to see if we are currently working with your insurance provider.Our pricing structure is designed to ensure that patients are able to receive the high quality dental care they deserve. If your dental insurance will not cover all of your dental treatments, we will work with you to identify a payment solution. We are health care professionals first and will work with you to make sure you receive the treatment you need. ",
          },
          {
            src: "/patient-info/financial-policy.jpg",
            title: "Financial Policy",
            description:
              "Revital Dental provides high quality dental care to families throughout the Temple area. We understand that every dental patient has different financial needs. We will work with you to find a solution that enables you to get the dental care you need, with or without insurance. Call our office to ask about our different payment options that may include cash, check, financing, and credit cards. We provide budget friendly dental care so call today and learn how Revital Dental is the solution to all of your oral health needs.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white text-black rounded shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden flex flex-col h-full min-h-[500px]"
          >
            <div className="relative w-full h-64">
              <Image
                src={card.src}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col  flex-1">
              <h2 className="text-xl text-primary font-cinzel mb-2">
                {card.title}
              </h2>
              <p className="text-md text-justify font-tinos text-gray-700">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Book />
      <Footer />
      <ScrollBanner />
    </div>
  );
};

export default page;
