import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import Form from "@/components/Form";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

const SnapOnSmile = () => {
  return (
    <>
      {/* Intro section */}
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2 md:mt-[125px] border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/services/snap-on-smile.jpg)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">Snap-On Smile</h2>
          <p className="font-cinzel">Temple, TX</p>
          <p className="font-tinos text-justify">
            Snap-On Smile is a non-invasive, removable dental appliance that
            fits over your existing teeth to create a beautiful, natural-looking
            smile. This custom-made solution is perfect for those seeking a
            temporary or affordable cosmetic enhancement to address issues like
            stained, chipped, misaligned, or missing teeth without permanent
            alterations.
          </p>
          <p className="font-tinos text-justify">
            At Revital Dental, our team offers Snap-On Smile as a quick and
            comfortable way to transform your smile. To learn more or schedule a
            consultation, contact our Temple office at (254) 207-0708.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* Explanation section */}
      <section className="md:grid md:grid-cols-[3fr_1fr] md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* Left section */}
        <div className="left-section" id="what-is-snap-on-smile">
          {/* Dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              What is Snap-On Smile?
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Snap-On Smile is a patented, removable dental arch made from a
              durable, stain-resistant resin material. It snaps securely over
              your natural teeth, providing an instant cosmetic improvement
              without the need for drilling, injections, or adhesives. It’s an
              ideal option for patients who want a temporary or cost-effective
              alternative to veneers or other permanent cosmetic procedures.
            </p>
            <p className="text-justify font-tinos mt-4 mb-5">
              Snap-On Smile is customized to fit your teeth perfectly, offering
              a comfortable and natural appearance. It can be used for special
              occasions or daily wear and is suitable for both upper and lower
              teeth. At Revital Dental, we ensure a precise fit to enhance your
              smile’s aesthetics and boost your confidence.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Snap-On Smile offers a quick, non-invasive way to achieve a
              stunning smile without permanent changes to your teeth.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="snap-on-smile-procedure">
            <h2 className="font-cinzel text-2xl text-primary">
              The Snap-On Smile Procedure
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              The process for getting a Snap-On Smile typically requires two
              visits. During the first visit, the dentist evaluates your oral
              health, discusses your aesthetic goals, and takes impressions of
              your teeth. You’ll also choose the shade and shape of your Snap-On
              Smile to match your desired look. These impressions are sent to a
              specialized laboratory to create your custom appliance.
            </p>
            <p className="font-tinos mt-2">
              At the second visit, the dentist ensures the Snap-On Smile fits
              comfortably and securely over your teeth. Adjustments may be made
              for optimal fit and appearance. The process is entirely
              non-invasive, requiring no tooth preparation or anesthesia, and
              you can start wearing your Snap-On Smile immediately.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Snap-On Smile is a versatile, affordable solution for enhancing
              your smile for special events or everyday confidence.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10">
            <h2 className="font-cinzel text-2xl text-primary">
              Caring for Snap-On Smile
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Snap-On Smile is easy to maintain with proper care. Our dental
              team recommends regular dental checkups every six months to ensure
              your natural teeth and the appliance remain in good condition.
              When not in use, the Snap-On Smile should be stored in its
              provided case to prevent damage.
            </p>
            <p className="font-tinos mt-2">
              To keep your Snap-On Smile looking its best, follow these at-home
              care recommendations:
            </p>
            <ul className="font-tinos list-disc pl-4 mt-2">
              <li>
                Clean the appliance daily with a soft toothbrush and
                non-abrasive cleaner
              </li>
              <li>
                Remove the Snap-On Smile when eating or drinking staining
                beverages
              </li>
              <li>
                Brush and floss your natural teeth daily to maintain oral health
              </li>
              <li>
                Avoid chewing hard or sticky foods while wearing the appliance
              </li>
            </ul>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “With proper care, Snap-On Smile can provide a beautiful,
              temporary smile solution for years.”
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
                href="#what-is-snap-on-smile"
              >
                Q. <span className="underline">What is Snap-On Smile?</span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#snap-on-smile-procedure"
              >
                Q.{" "}
                <span className="underline">
                  What is the process for getting Snap-On Smile?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#snap-on-smile-procedure"
              >
                Q.{" "}
                <span className="underline">
                  What are the benefits of Snap-On Smile?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#snap-on-smile-procedure"
              >
                Q.{" "}
                <span className="underline">
                  How do I care for Snap-On Smile?
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
                href="teeth-whitening#duration-of-teeth-whitening"
              >
                Q.{" "}
                <span className="underline">
                  How long does teeth whitening treatment take?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="teeth-whitening#who-can-get-teeth-whitening"
              >
                Q.{" "}
                <span className="underline">
                  Who can get their teeth whitened at the dentist?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="teeth-whitening#maintain-teeth-whitening-results"
              >
                Q.{" "}
                <span className="underline">
                  How can people maintain their results?
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
                href="#what-is-snap-on-smile"
              >
                Q. What is Snap-On Smile?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Snap-On Smile is a removable, custom-fitted dental appliance
                made from durable resin that snaps over your natural teeth to
                improve their appearance, addressing issues like stains, chips,
                or gaps without permanent changes.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#snap-on-smile-procedure"
              >
                Q. What is the process for getting Snap-On Smile?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. The process involves an initial consultation with impressions
                and shade selection, followed by a second visit to fit the
                custom-made Snap-On Smile. No tooth preparation or anesthesia is
                required, and it’s completed in two visits.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#snap-on-smile-procedure"
              >
                Q. What are the benefits of Snap-On Smile?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Snap-On Smile is non-invasive, affordable, and reversible,
                offering an instant smile transformation. It’s comfortable,
                customizable, and ideal for temporary or budget-conscious
                cosmetic enhancements.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#snap-on-smile-procedure"
              >
                Q. How do I care for Snap-On Smile?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Clean the appliance daily with a soft toothbrush and
                non-abrasive cleaner, remove it when eating or drinking staining
                beverages, and store it in its case when not in use. Maintain
                regular oral hygiene for your natural teeth.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#snap-on-smile-procedure"
              >
                Q. How long does Snap-On Smile last?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. With proper care, Snap-On Smile can last 3–5 years or longer,
                depending on usage and maintenance. Regular dental checkups help
                ensure its longevity and the health of your natural teeth.
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
                <h2 className="italic text-xl">Snap-On Smile</h2>
                <p>
                  Snap-On Smile is a removable, custom-fitted dental appliance
                  made from resin that covers natural teeth to improve their
                  appearance, addressing cosmetic issues like stains, chips, or
                  gaps.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                <p>
                  Cosmetic dentistry focuses on improving the appearance of
                  teeth, gums, or bite, with solutions like Snap-On Smile,
                  veneers, and teeth whitening to enhance smile aesthetics.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Dental Veneers</h2>
                <p>
                  Dental veneers are thin shells of porcelain or resin bonded to
                  teeth to improve their appearance, while Snap-On Smile offers
                  a removable alternative to traditional veneers.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Resin Material</h2>
                <p>
                  Resin material is a durable, tooth-colored substance used in
                  Snap-On Smile to create a natural-looking, stain-resistant
                  appliance that fits over existing teeth.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Tooth Enamel</h2>
                <p>
                  Tooth enamel is the hard, protective outer layer of the tooth,
                  which Snap-On Smile covers without requiring alteration due to
                  its non-invasive design.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Preventive Dentistry</h2>
                <p>
                  Preventive dentistry focuses on maintaining oral health to
                  prevent issues, including regular checkups to monitor the
                  condition of Snap-On Smile and natural teeth.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Teeth Whitening</h2>
                <p>
                  Teeth whitening is a cosmetic procedure to lighten teeth,
                  often complemented by Snap-On Smile for a uniformly bright and
                  aesthetically pleasing smile.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Dental Arch</h2>
                <p>
                  A dental arch refers to the curved structure of the upper or
                  lower teeth, which Snap-On Smile is designed to fit over to
                  enhance the smile’s appearance.
                </p>
                <hr className="mt-4" />
              </div>
            </div>
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

export default SnapOnSmile;
