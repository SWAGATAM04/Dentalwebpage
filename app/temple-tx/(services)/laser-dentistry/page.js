import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import Form from "@/components/Form";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

const LaserDentistry = () => {
  return (
    <>
      {/* Intro section */}
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2 md:mt-[125px] border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/services/laser-dentistry.jpg)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">Laser Dentistry</h2>
          <p className="font-cinzel">Temple, TX</p>
          <p className="font-tinos text-justify">
            Laser dentistry is a modern, innovative approach to dental care that
            uses focused light energy to perform a variety of dental procedures
            with precision and minimal discomfort. This advanced technology
            allows dental professionals to treat issues such as gum disease,
            tooth decay, and soft tissue concerns with greater accuracy and less
            invasiveness compared to traditional methods.
          </p>
          <p className="font-tinos text-justify">
            At Revital Dental, our team utilizes state-of-the-art laser
            technology to enhance patient comfort and improve treatment
            outcomes. To learn more or schedule a consultation for laser
            dentistry, contact our Temple office at (254) 207-0708.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* Explanation section */}
      <section className="md:grid md:grid-cols-[3fr_1fr] md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* Left section */}
        <div className="left-section" id="what-is-laser-dentistry">
          {/* Dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              What is Laser Dentistry?
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Laser dentistry involves the use of specialized lasers to treat
              dental conditions. The term "laser" stands for Light Amplification
              by Stimulated Emission of Radiation. In dental procedures, lasers
              deliver precise energy in the form of light to target specific
              areas, such as tooth enamel, gum tissue, or decayed areas, without
              affecting surrounding tissues. This technology is used for
              procedures like cavity removal, gum reshaping, and bacterial
              reduction during root canal treatments.
            </p>
            <p className="text-justify font-tinos mt-4 mb-5">
              The benefits of laser dentistry include reduced pain, minimal
              bleeding, faster recovery times, and often the elimination of the
              need for anesthesia in certain procedures. Patients may experience
              less anxiety due to the absence of drills or scalpels. Our dental
              team at Revital Dental ensures that laser treatments are tailored
              to each patient’s needs for optimal results.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Laser dentistry offers a precise and minimally invasive approach
              to treating dental issues, enhancing patient comfort and
              recovery.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="laser-dentistry-procedures">
            <h2 className="font-cinzel text-2xl text-primary">
              Common Laser Dentistry Procedures
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Laser dentistry is versatile and can be used for both hard tissue
              (teeth) and soft tissue (gums) procedures. For hard tissue, lasers
              can detect cavities, prepare teeth for fillings, or remove decay
              with precision. For soft tissue, lasers are used to reshape gums,
              treat gum disease by removing bacteria, or perform frenectomies
              (correcting tongue-tie). The dental professional will assess the
              patient’s condition to determine if laser treatment is
              appropriate.
            </p>
            <p className="font-tinos mt-2">
              During a laser procedure, the dentist uses a handheld device that
              emits a focused beam of light. The laser’s energy interacts with
              the targeted tissue, cutting, vaporizing, or sterilizing it as
              needed. Patients may hear a slight humming sound, but the
              procedure is generally quieter and less intimidating than
              traditional methods.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Lasers can reduce the need for sutures and promote faster
              healing, making them ideal for patients with dental anxiety.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10">
            <h2 className="font-cinzel text-2xl text-primary">
              Benefits of Regular Laser Dental Care
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Regular dental care, including laser treatments when appropriate,
              helps maintain oral health and prevents complications. Laser
              dentistry can address issues early, such as gum inflammation or
              small cavities, before they progress into more serious conditions.
              Our dental team recommends regular checkups every six months to
              monitor oral health and determine if laser treatments are needed.
            </p>
            <p className="font-tinos mt-2">
              To complement laser treatments, patients are encouraged to
              maintain proper at-home oral hygiene. Recommendations include:
            </p>
            <ul className="font-tinos list-disc pl-4 mt-2">
              <li>Brushing twice daily with fluoride toothpaste</li>
              <li>Flossing once a day</li>
              <li>Using an antibacterial mouthwash</li>
              <li>Avoiding smoking and excessive sugary foods</li>
            </ul>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Regular dental visits combined with laser treatments can prevent
              serious oral health issues and maintain a healthy smile.”
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
                href="#what-is-laser-dentistry"
              >
                Q. <span className="underline">What is laser dentistry?</span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#laser-dentistry-procedures"
              >
                Q.{" "}
                <span className="underline">
                  What procedures can be performed with laser dentistry?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#laser-dentistry-procedures"
              >
                Q.{" "}
                <span className="underline">
                  What are the benefits of laser dentistry?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#laser-dentistry-procedures"
              >
                Q.{" "}
                <span className="underline">
                  How often should I have a dental checkup with laser
                  treatments?
                </span>
              </a>
            </div>
            <h2 className="text-4xl text-center font-cinzel mb-3 mt-3">
              People Also Ask
            </h2>
            <hr />
            <div className="flex flex-col">
              <a
                className="text-justify font-tinos mt-3"
                href="lumineers#lumineers-procedure"
              >
                Q.{" "}
                <span className="underline">
                  What is the process for getting Lumineers?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="lumineers#lumineers-procedure"
              >
                Q.{" "}
                <span className="underline">
                  What are the benefits of Lumineers?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="lumineers#lumineers-procedure"
              >
                Q.{" "}
                <span className="underline">How do I care for Lumineers?</span>
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
                href="#what-is-laser-dentistry"
              >
                Q. What is laser dentistry?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Laser dentistry uses focused light energy to perform dental
                procedures with precision. It can treat both hard tissue (teeth)
                and soft tissue (gums) issues, such as cavity removal, gum
                reshaping, or bacterial reduction, with minimal discomfort and
                faster recovery.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#laser-dentistry-procedures"
              >
                Q. What procedures can be performed with laser dentistry?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Laser dentistry is used for procedures like cavity detection,
                tooth preparation for fillings, gum reshaping, treatment of gum
                disease, frenectomies, and teeth whitening. The specific
                procedure depends on the patient’s needs and the dentist’s
                recommendation.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#laser-dentistry-procedures"
              >
                Q. What are the benefits of laser dentistry?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Benefits include reduced pain, minimal bleeding, faster
                healing, and often no need for anesthesia. Lasers are precise,
                minimizing damage to surrounding tissues, and can reduce patient
                anxiety by eliminating the need for drills or scalpels.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#laser-dentistry-procedures"
              >
                Q. How often should I have a dental checkup with laser
                treatments?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Regular dental checkups are recommended every six months.
                During these visits, your dentist will assess whether laser
                treatments are needed to address specific issues like gum
                disease or early decay.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#laser-dentistry-procedures"
              >
                Q. Is laser dentistry safe?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Yes, laser dentistry is safe when performed by a trained
                dental professional. The FDA has approved dental lasers for
                various procedures, and protective measures, such as special
                eyewear, are used to ensure patient safety.
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
                <h2 className="italic text-xl">Laser Dentistry</h2>
                <p>
                  Laser dentistry uses focused light energy to perform dental
                  procedures, treating issues like cavities, gum disease, and
                  soft tissue abnormalities with precision and minimal
                  discomfort.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Hard Tissue Laser</h2>
                <p>
                  A hard tissue laser is used to cut or shape teeth, remove
                  decay, or prepare teeth for fillings, offering a precise
                  alternative to traditional drills.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Soft Tissue Laser</h2>
                <p>
                  A soft tissue laser is used for procedures involving the gums
                  or other soft tissues, such as gum reshaping, bacterial
                  removal, or frenectomies.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Gum Disease</h2>
                <p>
                  Gum disease, or periodontal disease, is an infection of the
                  gums caused by plaque buildup, which can be treated
                  effectively with laser dentistry to remove bacteria and
                  diseased tissue.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Frenectomy</h2>
                <p>
                  A frenectomy is a procedure to remove or modify the frenum, a
                  small fold of tissue that restricts tongue or lip movement,
                  often performed using lasers for precision and minimal
                  bleeding.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Cavity Detection</h2>
                <p>
                  Cavity detection involves identifying areas of tooth decay,
                  which can be done using lasers to detect early signs of
                  cavities without invasive tools.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Dental Pulp</h2>
                <p>
                  Dental pulp is the soft tissue inside the tooth containing
                  nerves and blood vessels, which can be treated with lasers
                  during procedures like root canals to remove infected tissue.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Preventive Dentistry</h2>
                <p>
                  Preventive dentistry focuses on maintaining oral health to
                  prevent issues like cavities or gum disease, often
                  incorporating laser treatments for early intervention.
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
              Laser dentistry offers a comfortable and efficient way to maintain
              your oral health. Our team at Revital Dental is here to answer
              your questions and schedule your consultation. Call us at{" "}
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
                  href="/temple-tx/kid-friendly-dentist"
                  className="hover:underline"
                >
                  Kid Friendly Dentist
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/oral-hygiene-basics"
                  className="hover:underline"
                >
                  Oral Hygiene Basics
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/why-are-my-gums-bleeding"
                  className="hover:underline"
                >
                  Why Are My Gums Bleeding
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/braces-for-teens"
                  className="hover:underline"
                >
                  Alternative to Braces for Teens
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/invisalign-or-braces"
                  className="hover:underline"
                >
                  Invisalign or Braces
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

export default LaserDentistry;
