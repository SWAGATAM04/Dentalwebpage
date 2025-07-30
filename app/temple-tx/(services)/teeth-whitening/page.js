import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { FaYelp } from "react-icons/fa";
import Image from "next/image";
import Form from "@/components/Form";

const cinzel = Cinzel({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  display: "swap",
});

const Services = () => {
  return (
    <>
      {/* intro section */}
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[125px]  border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/services/teeth-whitening.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">Teeth Whitening</h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Everyone deserves a smile that they can be proud of. One of the most
            common ways to enhance a smile is through teeth whitening.
            Professional whitening achieves long-lasting results by removing
            stains and discoloration.
          </p>
          <p className="font-tinos  text-justify">
            Teeth whitening can help you achieve a brighter, more beautiful
            smile. Revital Dental offers teeth whitening procedures in Temple
            and the surrounding area so you can smile with confidence. Call us
            at (254) 207-0708 to learn more about our services or schedule an
            appointment.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="benefits-of-teeth-whitening">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Benefits of Teeth Whitening at the Dentist’s Office
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Teeth whitening at the dentist’s office is the safest and most
              effective method of achieving whiter teeth. In-office whitening
              occurs under carefully monitored conditions. Teeth whitening under
              professional supervision allows for safe, controlled, pain-free
              treatment.
            </p>
            <p className="text-justify font-tinos mt-4">
              Professional whitening products use a stronger concentration of
              hydrogen peroxide than over-the-counter products. Thus the
              whitening process takes less time to achieve better results.
              Treatment under a dentist’s care ensures that sensitive gums are
              not irritated during the whitening process. The results should be
              long-lasting with careful oral hygiene practices.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Teeth whitening under professional supervision allows for safe,
              controlled, pain-free treatment.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="consultation-for-teeth-whitening">
            <h2 className="font-cinzel text-2xl text-primary">
              What to Expect at the Consultation
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Before the teeth whitening procedure, people will need to attend a
              consultation. This appointment will allow the patient to discuss
              their dental history, overall health, and teeth goals. It is also
              crucial to bring up any ongoing dental issues, such as teeth and
              gum problems that will require treatment before teeth whitening
              can occur.
            </p>
            <p className="font-tinos mt-2 text-justify">
              We will also examine the patient’s teeth to see if they will
              benefit from whitening treatments. It is important to note that
              existing dental work, such as crowns and veneers, will not respond
              to conventional whitening agents. If treatments are a viable
              option, we will help determine which whitening product or
              technique will be the most effective.
            </p>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “This appointment will allow the patient to discuss their dental
              history, overall health, and teeth goals.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="duration-of-teeth-whitening">
            <h2 className="font-cinzel text-2xl text-primary">
              Teeth Whitening Treatment Length
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              Teeth whitening done in the office is the quickest method to
              whiten teeth. People can achieve much brighter teeth more quickly
              in-office because the concentration of bleaching solution is much
              stronger than other options. Professional teeth whitening requires
              an appointment.
            </p>
            <p className="font-tinos mt-2">
              Teeth can get three to eight shades whiter with several 30 to
              60-minute sessions. Other tooth whitening treatments are available
              that can whiten teeth in a single two-hour session. People
              interested in teeth whitening should contact us for information
              about the available treatment options.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Teeth whitening done in the office is the quickest method to
                whiten teeth.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="flex flex-wrap justify-center text-lg font-cinzel bg-primary text-white p-5 mt-5 rounded-2xl">
                <FaYelp className="text-2xl me-2" />
                Check out what others are saying about our dental services on
                Yelp:&nbsp;
                <Link
                  href="https://www.yelp.com/biz/revital-dental-temple"
                  className="underline hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dental Crowns and Dental Bridges in Temple, TX
                </Link>
              </h2>
            </div>

            <div className="mt-10" id="who-can-get-teeth-whitening">
              <h2 className="font-cinzel text-2xl text-primary">
                Who Should Get Teeth Whitening at the Dentist
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Teeth whitening at the dentist is best for people with moderate
                to severe discoloration and staining. These stains can occur due
                to aging, smoking, medications, and certain foods and drinks.
                People with yellow or brown discoloration on their teeth are
                ideal candidates for professional teeth whitening. Pregnant and
                lactating women should also not receive teeth whitening.
              </p>
              <p className="font-tinos mt-2 text-justify">
                We do not recommend teeth whitening for people with gum disease,
                worn down enamel, and existing decay. Cavities and damage will
                require treatment before a person can whiten their teeth. People
                with teeth that are gray or purple may not respond to bleaching.
                People interested in teeth whitening can speak with our team to
                determine the best-suited options for their needs.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Teeth whitening at the dentist is best for people with moderate
                to severe discoloration and staining.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            <div className="bg-dark p-5 mt-10 text-white">
              <h2 className="text-4xl text-center font-cinzel mb-3">
                Questions Answered on This Page
              </h2>
              <hr />
              <div className="flex flex-col">
                <a
                  className="text-justify font-tinos mt-3"
                  href="#benefits-of-teeth-whitening"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the benefits of teeth whitening at a dentist’s
                    office?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#consultation-for-teeth-whitening"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens during a consultation for teeth whitening?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#duration-of-teeth-whitening"
                >
                  Q.{" "}
                  <span className="underline">
                    How long does teeth whitening treatment take?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#who-can-get-teeth-whitening"
                >
                  Q.{" "}
                  <span className="underline">
                    Who can get their teeth whitened at the dentist?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#maintain-teeth-whitening-results"
                >
                  Q.{" "}
                  <span className="underline">
                    How can people maintain their results?
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
                  href="teethxpress#benefits-of-teethxpress"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the benefits of TeethXpress?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="teethxpress#teethxpress-candidate"
                >
                  Q.{" "}
                  <span className="underline">
                    Am I a good candidate for TeethXpress?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="teethxpress#teethxpress-aftercare"
                >
                  Q.{" "}
                  <span className="underline">
                    What should I expect after the procedure?
                  </span>
                </a>
              </div>
            </div>

            {/* Q & A */}
            <div className="mt-10" id="maintain-teeth-whitening-results">
              <h2 className="font-cinzel text-2xl text-primary">
                Follow-Up Care
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Although professional teeth whitening is not permanent, people
                can help their results last longer with proper care and
                maintenance. People should avoid smoking and food and drinks
                that stain teeth, such as coffee, tea, or red wine. It is also
                essential to brush teeth twice a day, floss daily, and use
                mouthwash to reduce plaque.
              </p>
              <p className="font-tinos mt-2 text-justify">
                People can also use whitening toothpaste as per the dentist’s
                recommendation, such as Colgate Total SF Fresh + Whitening ™
                Toothpaste, hello® Naturally Whitening Toothpaste, or Colgate®
                Optic White® Toothpaste. Keep up with regular dental
                appointments for teeth cleaning. Patients can discuss touch-up
                treatments at six-month intervals with our team.
              </p>
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Although professional teeth whitening is not permanent, people
                can help their results last longer with proper care and
                maintenance.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            <div className="bg-gray-100 p-5 mt-10">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Is teeth whitening a safe procedure?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. It is considered a safe procedure. There are possible side
                  effects, though. The teeth may become more sensitive during
                  treatment. Gums can become irritated from the whitening
                  process. These symptoms should go away once the whitening
                  products are no longer being used.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Do I need to get my teeth cleaned before a teeth whitening
                    procedure?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A professional tooth cleaning removes plaque and tartar,
                  which makes the teeth whitening procedure more effective. It
                  also helps to keep the color uniform while whitening. During
                  the dental cleaning appointment, the exam can identify any
                  tooth decay or gum diseases that need to be treated before
                  whitening.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Can I get teeth whitening if I have crowns or a bridge?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Whitening products only work on natural teeth. A person
                  with implants, crowns, or bridges can speak with our team
                  about maintaining tooth coloration across all teeth. People
                  with previous dental work can still receive a whitening
                  treatment.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Can I still get teeth whitening if I have other dental
                    concerns or issues?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Our dental team can assess a patient’s oral health to
                  determine the right treatment course to get the desired
                  results. Gum disease and tooth decay may need to be treated
                  before whitening for the desired results. A consultation from
                  our dental team will help you find solutions for good oral
                  health.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Does dental insurance cover teeth whitening?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Most dental insurance plans do not cover teeth whitening or
                  other cosmetic procedures. Every insurance plan is different.
                  People interested in teeth whitening should contact their
                  insurance provider for more information.
                </p>
              </div>
            </div>

            {/* QR code */}
            <div className="bg-dark p-5 mt-10 text-white">
              <h2 className="text-3xl text-center font-cinzel mb-3">
                Quality Dental Services Can Transform Your Smile
              </h2>
              <p className="text-center font-tinos">
                By visiting us as soon as possible, our team can help get you
                the professional treatment you need. Instead of waiting around
                and allowing the symptoms to get worse, we can provide you with
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

            {/* two call */}
            <div className="bg-dark p-5 mt-10 text-white">
              <h2 className="text-4xl font-cinzel mb-3">Dental Terminology</h2>
              <hr />
              <div className="space-y-10 ">
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Bleachorexia</h2>
                  <p>
                    Bleachorexia refers to the excessive use of whitening
                    products without dental supervision, leading to enamel
                    erosion and gum irritation.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry includes procedures that enhance the
                    appearance of your teeth and smile, such as veneers,
                    whitening, and bonding.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Imaging</h2>
                  <p>
                    Cosmetic imaging uses digital tools to show patients a
                    preview of their smile after cosmetic treatments, helping
                    them make informed decisions.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Crown Lengthening</h2>
                  <p>
                    Crown lengthening is a procedure that reshapes gum tissue
                    and bone to expose more of a tooth for cosmetic or
                    restorative purposes.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Crown</h2>
                  <p>
                    A dental crown is a custom-made cap that covers a damaged or
                    decayed tooth to restore its shape, strength, and
                    appearance.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist is a healthcare professional trained to diagnose,
                    treat, and prevent oral health issues affecting the teeth,
                    gums, and mouth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Full Mouth Rehabilitation</h2>
                  <p>
                    Full mouth rehabilitation combines multiple dental
                    procedures to restore the health, function, and aesthetics
                    of the entire mouth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Smile Selection Guide</h2>
                  <p>
                    A smile selection guide helps patients visualize different
                    smile styles to choose the one that best fits their facial
                    features and preferences.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Smile Shape Guide</h2>
                  <p>
                    A smile shape guide offers options for tooth shapes and
                    smile designs, helping customize cosmetic treatments to meet
                    aesthetic goals.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tetracycline</h2>
                  <p>
                    Tetracycline is an antibiotic known to cause permanent tooth
                    discoloration, especially when taken during childhood or
                    tooth development.
                  </p>
                  <hr className="mt-4" />
                </div>
              </div>
            </div>

            {/* call section */}
            <div className="bg-primary p-5 mt-10 text-white rounded-2xl">
              <h2 className="text-4xl font-cinzel mb-3">
                Call Us to Get More Details
              </h2>
              <hr />
              <p className="font-tinos mt-5 text-justify">
                Following through with dental checkups is how patients can
                ensure that their smile stays healthy and free of decay or
                disease. Our dental team is here to help. To schedule a dental
                checkup or for help with your dental questions, please call our
                team at{" "}
                <a href="tel:254-207-0708" className="underline">
                  254-207-0708.
                </a>
              </p>
            </div>

            {/* call qr */}
            {/* two call */}
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
                        We accept the following payment methods: American
                        Express, Cash, Check, Discover, MasterCard, and Visa
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
        </div>

        {/* Right section */}
        <div className="right-section ">
          <div className="bg-gray-100 px-8 p-5 w-[90%] mx-auto mt-5">
            <h2 className="text-2xl text-primary font-cinzel">
              Related Topics
            </h2>
            <hr />
            <ul className="font-tinos mt-2 list-disc px-3">
              <li className="mt-5">
                <Link
                  href="/temple-tx/smile-makeover"
                  className="hover:underline"
                >
                  Smile Makeover
                </Link>
              </li>
              <li className="mt-5">
                <Link href="/temple-tx/lumineers" className="hover:underline">
                  Lumineers
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/snap-on-smile"
                  className="hover:underline"
                >
                  Snap-On Smile
                </Link>
              </li>
              <li className="mt-5">
                <Link href="/temple-tx/teethxpress" className="hover:underline">
                  TeethXpress
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/dental-veneers-and-dental-laminates"
                  className="hover:underline"
                >
                  Dental Veneers & Laminates
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

export default Services;
