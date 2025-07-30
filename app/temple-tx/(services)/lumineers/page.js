import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import Form from "@/components/Form";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

const Lumineers = () => {
  return (
    <>
      {/* Intro section */}
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2 md:mt-[125px] border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/services/lumineers.jpg)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">Lumineers</h2>
          <p className="font-cinzel">Temple, TX</p>
          <p className="font-tinos text-justify">
            Lumineers are ultra-thin, custom-made dental veneers designed to
            enhance the appearance of your smile without the need for extensive
            tooth preparation. Made from patented Cerinate porcelain, Lumineers
            are as thin as contact lenses, offering a minimally invasive
            solution to improve the color, shape, and alignment of teeth for a
            natural, radiant smile.
          </p>
          <p className="font-tinos text-justify">
            At Revital Dental, our team specializes in applying Lumineers to
            transform smiles with minimal discomfort and long-lasting results.
            To learn more or schedule a consultation for Lumineers, contact our
            Temple office at (254) 207-0708.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* Explanation section */}
      <section className="md:grid md:grid-cols-[3fr_1fr] md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* Left section */}
        <div className="left-section" id="what-are-lumineers">
          {/* Dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">What Are Lumineers?</h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Lumineers are a premium brand of dental veneers that are thinner
              and stronger than traditional veneers, requiring little to no
              removal of natural tooth enamel. They are custom-crafted to fit
              over the front surface of teeth, correcting imperfections such as
              discoloration, chips, gaps, or misalignment. The application
              process is typically painless, and Lumineers can last up to 20
              years with proper care.
            </p>
            <p className="text-justify font-tinos mt-4 mb-5">
              Unlike traditional veneers, Lumineers often do not require
              drilling or anesthesia, making them a reversible and less invasive
              cosmetic dentistry option. Our dental team at Revital Dental
              ensures a precise fit and natural appearance, tailored to each
              patient’s unique smile.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Lumineers provide a minimally invasive way to achieve a flawless
              smile, with no drilling or anesthesia required in most cases.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="lumineers-procedure">
            <h2 className="font-cinzel text-2xl text-primary">
              The Lumineers Procedure
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              The process of getting Lumineers typically involves two to three
              visits. During the first visit, the dentist evaluates the
              patient’s oral health and takes impressions of the teeth to design
              the Lumineers. A shade guide is used to match the veneers to the
              desired tooth color. The impressions are sent to a certified
              Lumineers laboratory for fabrication.
            </p>
            <p className="font-tinos mt-2">
              At the second visit, the Lumineers are bonded to the teeth using a
              strong adhesive, with minimal or no tooth preparation. The dentist
              ensures proper alignment and fit, and the patient leaves with a
              transformed smile. A follow-up visit may be scheduled to check the
              results and make any necessary adjustments.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Lumineers are custom-designed to blend seamlessly with your
              natural teeth, creating a bright, confident smile.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10">
            <h2 className="font-cinzel text-2xl text-primary">
              Caring for Lumineers
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Lumineers require the same care as natural teeth to maintain their
              appearance and durability. Our dental team recommends regular
              dental checkups every six months to monitor the condition of the
              Lumineers and overall oral health. Proper care can prevent
              staining and ensure the veneers remain strong and vibrant.
            </p>
            <p className="font-tinos mt-2">
              To keep Lumineers in top condition, patients should follow these
              at-home care recommendations:
            </p>
            <ul className="font-tinos list-disc pl-4 mt-2">
              <li>
                Brushing twice daily with a non-abrasive fluoride toothpaste
              </li>
              <li>Flossing daily to remove plaque between teeth</li>
              <li>
                Avoiding hard foods or biting non-food items to prevent chipping
              </li>
              <li>
                Limiting staining foods and drinks, such as coffee, tea, or red
                wine
              </li>
            </ul>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “With proper care, Lumineers can last up to 20 years, giving you a
              long-lasting, beautiful smile.”
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
                href="#what-are-lumineers"
              >
                Q. <span className="underline">What are Lumineers?</span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#lumineers-procedure"
              >
                Q.{" "}
                <span className="underline">
                  What is the process for getting Lumineers?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#lumineers-procedure"
              >
                Q.{" "}
                <span className="underline">
                  What are the benefits of Lumineers?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#lumineers-procedure"
              >
                Q.{" "}
                <span className="underline">How do I care for Lumineers?</span>
              </a>
            </div>
            <h2 className="text-4xl text-center font-cinzel mb-3 mt-3">
              People Also Ask
            </h2>
            <hr />
            <div className="flex flex-col">
              <a
                className="text-justify font-tinos mt-3"
                href="root-canal-treatment#root-canal-process"
              >
                Q.{" "}
                <span className="underline">
                  What happens during root canal treatment?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="root-canal-treatment#prevent-root-canal"
              >
                Q.{" "}
                <span className="underline">
                  How can someone prevent the need for a root canal?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="root-canal-treatment#root-canal-alternative"
              >
                Q.{" "}
                <span className="underline">
                  What is an alternative to root canal treatment?
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
                href="#what-are-lumineers"
              >
                Q. What are Lumineers?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Lumineers are ultra-thin dental veneers made from Cerinate
                porcelain, designed to improve the appearance of teeth by
                covering imperfections like discoloration, chips, or gaps with
                minimal tooth preparation.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#lumineers-procedure"
              >
                Q. What is the process for getting Lumineers?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. The process involves an initial consultation with impressions
                and shade matching, followed by a visit to bond the custom-made
                Lumineers to the teeth. Minimal tooth preparation is needed, and
                the procedure is typically completed in two to three visits.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#lumineers-procedure"
              >
                Q. What are the benefits of Lumineers?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Lumineers offer a minimally invasive, reversible option for
                enhancing smiles. They require little to no tooth reduction, are
                durable, resist staining, and provide a natural-looking result
                with minimal discomfort.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#lumineers-procedure"
              >
                Q. How do I care for Lumineers?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Care for Lumineers includes brushing twice daily with
                non-abrasive toothpaste, flossing daily, avoiding hard foods,
                and limiting staining substances like coffee or wine. Regular
                dental checkups every six months are also recommended.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#lumineers-procedure"
              >
                Q. Are Lumineers reversible?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Yes, because Lumineers typically require minimal or no tooth
                reduction, they can often be removed without damaging the
                natural teeth, making them a reversible cosmetic option.
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
                <h2 className="italic text-xl">Lumineers</h2>
                <p>
                  Lumineers are ultra-thin dental veneers made from Cerinate
                  porcelain, designed to enhance the appearance of teeth with
                  minimal tooth preparation, covering imperfections like
                  discoloration or chips.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Dental Veneers</h2>
                <p>
                  Dental veneers are thin shells of porcelain or composite resin
                  bonded to the front of teeth to improve their appearance,
                  addressing issues like discoloration, gaps, or misalignment.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                <p>
                  Cosmetic dentistry focuses on improving the appearance of
                  teeth, gums, or bite, with procedures like Lumineers, veneers,
                  and teeth whitening to enhance smile aesthetics.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Tooth Enamel</h2>
                <p>
                  Tooth enamel is the hard, protective outer layer of the tooth,
                  which Lumineers cover without requiring significant reduction
                  due to their ultra-thin design.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Cerinate Porcelain</h2>
                <p>
                  Cerinate porcelain is a patented, durable, and translucent
                  material used to create Lumineers, offering a natural
                  appearance and resistance to staining.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Dental Bonding</h2>
                <p>
                  Dental bonding is the process of adhering materials, like
                  Lumineers or veneers, to the tooth surface using a strong
                  adhesive to enhance appearance or function.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Preventive Dentistry</h2>
                <p>
                  Preventive dentistry focuses on maintaining oral health to
                  prevent issues, including regular checkups to monitor the
                  condition of Lumineers and natural teeth.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Teeth Whitening</h2>
                <p>
                  Teeth whitening is a cosmetic procedure to lighten the color
                  of teeth, often complemented by Lumineers for a uniformly
                  bright and aesthetically pleasing smile.
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
              Lumineers can transform your smile with a minimally invasive
              approach. Our team at Revital Dental is here to guide you through
              the process and answer your questions. Call us at{" "}
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

export default Lumineers;
