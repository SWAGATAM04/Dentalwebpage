import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import Form from "@/components/Form";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

const InvisalignVsBraces = () => {
  return (
    <>
      {/* Intro section */}
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2 md:mt-[125px] border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/educations/invisalign-vs-braces.jpg)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Which Is Better: Invisalign or Braces
          </h2>
          <p className="font-cinzel">Temple, TX</p>
          <p className="font-tinos text-justify">
            Choosing between Invisalign and traditional braces depends on
            individual needs, lifestyle, and orthodontic goals. Invisalign
            offers clear, removable aligners for a discreet look, while braces
            use fixed metal or ceramic brackets for reliable results. Both can
            effectively straighten teeth, but each has unique benefits and
            considerations, especially for teens and adults.
          </p>
          <p className="font-tinos text-justify">
            At Revital Dental, our team helps patients compare Invisalign and
            braces to find the best fit for their smile. To learn more or
            schedule a consultation, contact our Temple office at (254)
            207-0708.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* Explanation section */}
      <section className="md:grid md:grid-cols-[3fr_1fr] md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* Left section */}
        <div className="left-section" id="invisalign-vs-braces-overview">
          {/* Dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Invisalign vs. Braces: Key Differences
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Invisalign uses a series of clear, removable aligners custom-made
              to gradually shift teeth, offering a nearly invisible appearance
              and flexibility for eating and oral hygiene. Traditional braces,
              typically metal or ceramic, use fixed brackets and wires to apply
              consistent pressure, effectively treating a wide range of
              alignment issues, including complex cases.
            </p>
            <p className="text-justify font-tinos mt-4 mb-5">
              Invisalign is popular for its aesthetics and convenience but
              requires discipline to wear aligners 20–22 hours daily. Braces are
              fixed, ensuring constant treatment but with more visible hardware.
              At Revital Dental, we assess factors like alignment severity,
              lifestyle, and budget to recommend the best option.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Invisalign offers discretion, while braces provide robust
              treatment for complex cases—your choice depends on your unique
              needs.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="invisalign-vs-braces-comparison">
            <h2 className="font-cinzel text-2xl text-primary">
              Comparing Treatment Processes
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              For Invisalign, the process starts with a consultation, digital
              scans, and custom aligner fabrication. Patients switch aligners
              every 1–2 weeks and visit the dentist every 6–8 weeks for progress
              checks. Braces involve bonding brackets to teeth, with periodic
              adjustments every 4–8 weeks to tighten wires. Treatment duration
              for both ranges from 6–24 months, depending on case complexity.
            </p>
            <p className="font-tinos mt-2">
              Invisalign requires patient compliance to wear aligners
              consistently, while braces work continuously as they’re fixed.
              Both require good oral hygiene, but Invisalign’s removability
              simplifies brushing and flossing. Our dental team provides
              detailed guidance to ensure successful outcomes for either option.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Invisalign suits those prioritizing aesthetics, while braces
              excel in treating severe misalignments with predictable results.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10">
            <h2 className="font-cinzel text-2xl text-primary">
              Care and Maintenance
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Both Invisalign and braces require diligent care to maintain oral
              health and treatment effectiveness. Invisalign aligners should be
              cleaned daily with a soft toothbrush and non-abrasive cleaner,
              removed for eating, and stored properly when not in use. Braces
              require careful brushing around brackets and wires, plus flossing
              or using interdental brushes to prevent plaque buildup.
            </p>
            <p className="font-tinos mt-2">
              Our dental team recommends the following for both treatments:
            </p>
            <ul className="font-tinos list-disc pl-4 mt-2">
              <li>Brush twice daily with fluoride toothpaste</li>
              <li>Floss daily or use interdental brushes</li>
              <li>Avoid sticky, hard, or sugary foods to protect appliances</li>
              <li>
                Attend regular dental checkups (every 6–8 weeks for adjustments)
              </li>
            </ul>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Proper care ensures both Invisalign and braces deliver a healthy,
              aligned smile tailored to your lifestyle.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Questions Answered on This Page */}
          <div className="bg-dark p-5 mt-10 text-white">
            <h2 className="text-4xl text-center font-cinzel mb-3">
              Questions Answered on This Page
            </h2>
            <hr />
            <div className="flex flex-col">
              <a
                className="text-justify font-tinos mt-3"
                href="#invisalign-vs-braces-overview"
              >
                Q.{" "}
                <span className="underline">
                  What are the main differences between Invisalign and braces?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#invisalign-vs-braces-comparison"
              >
                Q.{" "}
                <span className="underline">
                  How do the treatment processes for Invisalign and braces
                  compare?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#invisalign-vs-braces-comparison"
              >
                Q.{" "}
                <span className="underline">
                  What are the benefits of Invisalign vs. braces?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#invisalign-vs-braces-comparison"
              >
                Q.{" "}
                <span className="underline">
                  How do I care for Invisalign or braces?
                </span>
              </a>
            </div>
            <h2 className="text-4xl text-center font-cinzel mb-3 mt-3">
              People Also Ask
            </h2>
            <hr />
            <div className="flex flex-col mb-4">
              <a
                className="text-justify font-tinos mt-3"
                href="improve-your-smile-for-senior-pictures/#veneers-before-photos"
              >
                Q.{" "}
                <span className="underline">
                  When should I get veneers before senior photos?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="improve-your-smile-for-senior-pictures/#anesthesia-dental-bonding"
              >
                Q.{" "}
                <span className="underline">
                  Will I need anesthesia to have dental bonding done?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="improve-your-smile-for-senior-pictures/#composite-fillings-time"
              >
                Q.{" "}
                <span className="underline">
                  How long will it take to get composite fillings?
                </span>
              </a>
            </div>
          </div>

          {/* Q & A */}
          <div className="bg-gray-100 p-5 mt-10">
            <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
              Questions Answered on This Page
            </h2>
            <hr />
            <div className="flex flex-col">
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#invisalign-vs-braces-overview"
              >
                Q. What are the main differences between Invisalign and braces?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Invisalign uses removable, clear aligners for discreet
                treatment, while braces use fixed metal or ceramic brackets.
                Invisalign requires compliance to wear aligners 20–22 hours
                daily, while braces work continuously but are more visible.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#invisalign-vs-braces-comparison"
              >
                Q. How do the treatment processes for Invisalign and braces
                compare?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Invisalign involves digital scans and custom aligners changed
                every 1–2 weeks, with checkups every 6–8 weeks. Braces require
                bonding brackets and periodic wire adjustments every 4–8 weeks.
                Both take 6–24 months, depending on case complexity.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#invisalign-vs-braces-comparison"
              >
                Q. What are the benefits of Invisalign vs. braces?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Invisalign offers a nearly invisible look, removability for
                eating and hygiene, and comfort. Braces are effective for
                complex cases, require no compliance, and are often more
                affordable. The best choice depends on individual needs.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#invisalign-vs-braces-comparison"
              >
                Q. How do I care for Invisalign or braces?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Invisalign requires daily cleaning of aligners and regular
                oral hygiene. Braces need careful brushing around brackets and
                flossing. Both benefit from avoiding sticky foods and attending
                regular dental checkups.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#invisalign-vs-braces-comparison"
              >
                Q. Can Invisalign treat severe misalignments?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Invisalign can treat mild to moderate misalignments
                effectively and some severe cases with advancements like
                attachments. Braces are typically better for complex issues, as
                determined by your dentist.
              </p>
            </div>
          </div>

          {/* QR code */}
          <div className="bg-dark p-5 mt-10 text-white">
            <h2 className="text-3xl text-center font-cinzel mb-3">
              Quality Dental Services Can Transform Your Smile
            </h2>
            <p className="text-center font-tinos">
              By visiting us as soon as possible, our team can help get you the
              professional treatment you need. Instead of waiting around and
              allowing the symptoms to get worse, we can provide you with
              treatment options.
            </p>
            <div className="flex justify-evenly content-center gap-2 mt-5">
              <div className="flex justify-center flex-col items-center">
                <Link href="https://www.google.com/maps/dir/United+States/Revital+Dental,+4311+S+31st+St+Ste+145,+Temple,+TX+76502,+United+States/@35.1131018,-107.0696339,6.09z/data=!4m13!4m12!1m5!1m1!1s0x54eab584e432360b:0x1c3bb99243deb742!2m2!1d-106.5348379!2d38.7945952!1m5!1m1!1s0x86456b77cbcefa79:0xcf1db0a8e3bdced7!2m2!1d-97.3734765!2d31.0575554?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D">
                  <img
                    src="/dentist-map.webp"
                    alt=""
                    className="w-[200px] h-[200px]"
                  />
                </Link>
                <a href="" className="mt-2 underline text-center">
                  Let Us Help – Click for Directions to Revital Dental
                </a>
              </div>
              <div className="flex justify-center flex-col items-center">
                <Link href="/dental-checkup-qrcode.png">
                  <img
                    src="/dental-checkup-qrcode.png"
                    alt=""
                    className="w-[200px] h-[200px]"
                  />
                </Link>
                <p className="mt-2 text-center">
                  Scan here to view this page, Dental Checkup, on mobile
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly content-center items-center gap-2 mt-5">
              <Link href="/find-a-dentist">
                <img
                  src="/find-best-dentist-nav.webp"
                  alt=""
                  className="w-[200px] h-[200px]"
                />
              </Link>
              <Link href="/patient-information">
                <img
                  src="/patient-info-nav.jpeg"
                  alt=""
                  className="w-[200px] h-[200px]"
                />
              </Link>
              <Link href="/smile-gallery">
                <img
                  src="/smile-gallery-nav.jpeg"
                  alt=""
                  className="w-[200px] h-[200px]"
                />
              </Link>
            </div>
          </div>

          {/* Dental Terminology */}
          <div className="bg-dark p-5 mt-10 text-white">
            <h2 className="text-4xl font-cinzel mb-3">Dental Terminology</h2>
            <hr />
            <div className="space-y-10">
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Invisalign</h2>
                <p>
                  Invisalign is a brand of clear, removable aligners used to
                  straighten teeth discreetly, offering a nearly invisible
                  alternative to traditional braces.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Traditional Braces</h2>
                <p>
                  Traditional braces use fixed metal or ceramic brackets and
                  wires to apply pressure and correct teeth alignment, effective
                  for a wide range of orthodontic issues.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Clear Aligners</h2>
                <p>
                  Clear aligners are transparent, removable trays that gradually
                  shift teeth, with Invisalign being a popular brand known for
                  its aesthetic appeal and flexibility.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Orthodontics</h2>
                <p>
                  Orthodontics is the dental specialty focused on correcting
                  teeth and jaw alignment, using tools like Invisalign or braces
                  to achieve functional and aesthetic results.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Malocclusion</h2>
                <p>
                  Malocclusion refers to misalignment of teeth or jaws, which
                  both Invisalign and braces can correct, depending on the
                  severity and patient needs.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Dental Impressions</h2>
                <p>
                  Dental impressions are molds or digital scans of teeth used to
                  create custom orthodontic appliances, like Invisalign
                  aligners, for precise treatment.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Ceramic Braces</h2>
                <p>
                  Ceramic braces use tooth-colored or clear brackets to blend
                  with natural teeth, offering a less noticeable alternative to
                  metal braces.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Preventive Dentistry</h2>
                <p>
                  Preventive dentistry focuses on maintaining oral health,
                  including regular checkups to monitor the progress of
                  Invisalign or braces and ensure healthy teeth.
                </p>
                <hr className="mt-4" />
              </div>
            </div>
          </div>

          {/* Call section */}
          <div className="bg-primary p-5 mt-10 text-white rounded-2xl">
            <h2 className="text-4xl font-cinzel mb-3">Call Us Today</h2>
            <hr />
            <p className="font-tinos mt-5 text-justify">
              Choosing between Invisalign and braces is a personal decision.
              Our目的是 Our team at Revital Dental can help you find the best
              option for your smile. Call us at{" "}
              <a href="tel:254-207-0708" className="underline">
                254-207-0708.
              </a>
            </p>
          </div>

          {/* Related Links and QR */}
          <div className="bg-dark p-5 mt-10 text-white">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left side content */}
              <div className="flex-1">
                <h2 className="text-4xl font-cinzel mb-3">
                  Helpful Related Links
                </h2>
                <hr />
                <ul className="font-tinos mt-3 list-disc px-3">
                  <li className="mt-2">
                    American Dental Association (ADA).
                    <Link
                      href="https://www.ada.org/publications/cdt/glossary-dental-terms"
                      className="underline"
                    >
                      Glossary of Dental Clinical Terms. 2022
                    </Link>
                  </li>
                  <li className="mt-2">
                    American Academy of Cosmetic Dentistry® (AACD).
                    <Link href="http://aacd.com/" className="underline">
                      Home Page. 2022
                    </Link>
                  </li>
                  <li className="mt-2">
                    WebMD.
                    <Link
                      href="https://www.webmd.com/oral-health/default.htm"
                      className="underline"
                    >
                      WebMD’s Oral Care Guide. 2022
                    </Link>
                  </li>
                </ul>

                <h2 className="text-4xl font-cinzel mb-3 mt-10">
                  About our business and website security
                </h2>
                <hr />
                <ul className="font-tinos mt-3 list-disc px-3">
                  <li className="mt-2">
                    <div>Revital Dental was established in 2022.</div>
                  </li>
                  <li className="mt-2">
                    <p>
                      We accept the following payment methods: American Express,
                      Cash, Check, Discover, MasterCard, and Visa
                    </p>
                  </li>
                  <li className="mt-2">
                    <p>
                      We serve patients from the following counties: Bell
                      County, McLennan County and Coryell County
                    </p>
                  </li>
                  <li className="mt-2">
                    <p>
                      Norton Safe Web.{" "}
                      <Link
                        href="https://safeweb.norton.com/"
                        className="underline"
                      >
                        View Details
                      </Link>
                    </p>
                  </li>
                  <li className="mt-2">
                    Trend Micro Site Safety Center.
                    <Link
                      href="https://global.sitesafety.trendmicro.com/?url=/revitaldentaltx.com"
                      className="underline"
                    >
                      View Details
                    </Link>
                  </li>
                </ul>
              </div>

              {/* QR code on right */}
              <div className="mt-12 flex flex-col justify-center items-center md:w-[250px]">
                <Link href="/map-directions-qrcode.webp">
                  <img
                    src="/map-directions-qrcode.webp"
                    className="w-[150px] h-[150px]"
                    alt="Revital Dental Directions QR"
                  />
                </Link>
                <p className="font-tinos text-center mt-3">
                  Scan here to open directions to Revital Dental on mobile
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="right-section">
          <div className="bg-gray-100 px-8 p-5 w-[90%] mx-auto mt-5">
            <h2 className="text-2xl text-primary font-cinzel">
              Related Topics
            </h2>
            <hr />
            <ul className="font-tinos mt-2 list-disc px-3">
              <li className="mt-5">
                <Link
                  href="/temple-tx/emergency-dentist"
                  className="hover:underline"
                >
                  Emergency Dentist
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/dentures-and-partial-dentures"
                  className="hover:underline"
                >
                  Dentures and Partials
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/full-mouth-reconstruction"
                  className="hover:underline"
                >
                  Full Mouth Reconstruction
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/what-should-i-do-if-i-chip-my-tooth"
                  className="hover:underline"
                >
                  Chipped Tooth Help
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/when-is-a-tooth-extraction-necessary"
                  className="hover:underline"
                >
                  Tooth Extraction Guide
                </Link>
              </li>
              <hr />
              <li className="mt-5">
                <Link href="/dental-office" className="hover:underline">
                  Dental Office Temple, TX
                </Link>
              </li>
              <li className="mt-5">
                <Link href="/find-a-dentist" className="hover:underline">
                  Find a Dentist in Temple, TX
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center bg-primary px-8 p-5 w-[90%] mx-auto mt-5 rounded-lg">
            <h3 className="font-cinzel text-center text-4xl text-white">
              Call Us
            </h3>
            <h3 className="font-cinzel text-4xl text-center text-white">
              Today
            </h3>

            <img
              src="/phone-number-qrcode.png"
              alt=""
              className="w-[150px] pt-3 h-[150px] "
            />
            <p className="text-center font-tinos text-white pt-3">
              Scan here to call Revital <br /> Dental on mobile
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvisalignVsBraces;
