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
        <div className="bg-[url(/services/zoom-teeth-whitening.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Zoom Teeth Whitening
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Beautiful, bright, white teeth are a sign of good health and a
            youthful appearance. Many people have teeth stained from coffee,
            smoking, or other substances, making their smile appear dull or
            yellow. ZOOM!® teeth whitening is a professional whitening system
            administered by a dentist that brightens teeth several shades whiter
          </p>
          <p className="font-tinos  text-justify">
            Zoom teeth whitening is available at Revital Dental in Temple and
            the surrounding area. Professional whitening treatment with a Zoom
            whitening dentist gives patients better results and a gorgeous
            smile. Patients with a big event coming up, such as a wedding, class
            reunion, or party, can wow their friends and family with a dazzling
            smile. Call us at (254) 207-0708 to find out more.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="how-zoom-whitening-works">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              How Zoom Whitening Works
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Zoom teeth whitening uses several powerful ingredients to reduce
              staining and brighten smiles. It comes in a gel formula, made with
              hydrogen peroxide. This formula is much more powerful and
              effective than over-the-counter products. The dentist will coat
              the teeth with this gel to start the whitening session. Then, the
              dentist uses a special light to activate the gel and remove
              staining on the teeth. The typical treatment session takes just
              over an hour and includes a five-minute fluoride treatment. With
              Zoom, patients will see whiter teeth after only a few visits.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “This formula is much more powerful and effective than
              over-the-counter products.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="zoom-vs-home-whitening">
            <h2 className="font-cinzel text-2xl text-primary">
              Advantages of Zoom Over Home Teeth Whitening
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Deciding between at-home whitening versus professional whitening
              depends on a variety of factors. Home whitening kits are popular
              today, but professional whitening is much more effective, fast,
              and safe for patients. The biggest reason patients prefer
              professional whitening like Zoom is because of the quick results.
              Whitening kits from the drugstore or supermarket may not be as
              impressive as the results from Zoom whitening. Patients who want
              whiter teeth faster and with more dramatic results should consider
              professional teeth whitening.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Patients prefer Zoom because it is gentle enough for sensitive
              teeth and has the added supervision of the dental provider during
              application. Choosing a Zoom whitening dentist also helps make
              sure the patient's teeth and gums do not experience enamel or
              sensitivity issues. According to a study from the Journal of
              Evidence Based Dental Practice, overaggressive tooth whitening at
              home may cause tooth sensitivity.
            </p>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Home whitening kits are popular today, but professional whitening
              is much more effective, fast, and safe for patients.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="preparing-for-whitening">
            <h2 className="font-cinzel text-2xl text-primary">
              How To Prepare for Teeth Whitening
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              Preparing for Zoom whitening is fairly simple and easy. Our team
              recommends that patients start with a recent dental exam and
              cleaning. Before coming into the office on the day of the
              procedure, patients should brush and floss. It may also be more
              comfortable to apply lip balm before the treatments so the lips do
              not get too dry during the whitening process. Other than that,
              there are no special things to do before treatment. Patients
              should be able to drive themselves to and from the procedure as no
              anesthesia is required.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “It may also be more comfortable to apply lip balm before the
                treatments so the lips do not get too dry during the whitening
                process.”
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

            <div className="mt-10" id="during-treatment">
              <h2 className="font-cinzel text-2xl text-primary">
                What To Expect During Treatment
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Before starting the treatment process, Our team will help
                patients understand what happens at each appointment. At the
                beginning, we will greet patients and bring them back to the
                treatment area. Here are the steps in the Zoom whitening
                process.
              </p>

              <ol className="font-tinos text-justify list-disc pl-4 mt-2">
                <li>
                  <span className="font-bold"> Setup:</span>
                  The dental provider will take pictures of the current shade of
                  teeth and give information on what type of results to expect.
                  Next, the dentist places cheek retractors into the mouth to
                  pull back the lips and expose the teeth for the whitening
                  treatment.
                </li>
                <li>
                  <span className="font-bold">Gel Application:</span> The next
                  part of the process involves the proprietary Zoom gel. The
                  dentist coats the patient's teeth with the whitening gel and
                  uses Zoom light to activate the gel. Return Treatment: For
                  optimal results, patients should return for additional
                  whitening treatments. Many patients complete about three
                  treatments.
                </li>
                <li>
                  <span className="font-bold">Return Treatment:</span> For
                  optimal results, patients should return for additional
                  whitening treatments. Many patients complete about three
                  treatments.
                </li>
                <li>
                  <span className="font-bold">After Whitening:</span> Patients
                  may get a home touch-up whitening kit to help maintain the
                  results. When using the home trays, coat the tray with
                  whitening gel and wear on the teeth for about two hours.
                  Patients should store the touch-up kit in a cool, dry place.
                </li>
              </ol>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “For optimal results, patients should return for additional
                whitening treatments.”
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
                  href="#how-zoom-whitening-works"
                >
                  Q.{" "}
                  <span className="underline">
                    How does Zoom Whitening work?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#zoom-vs-home-whitening"
                >
                  Q.{" "}
                  <span className="underline">
                    Why choose Zoom whitening over whitening at home?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#preparing-for-whitening"
                >
                  Q.{" "}
                  <span className="underline">
                    What does a patient need to do to prepare for teeth
                    whitening?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#during-treatment"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens during treatment?
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

            <div className="bg-gray-100 p-5 mt-10">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="is-zoom-right"
                >
                  Q.{" "}
                  <span className="underline">
                    Is Zoom teeth whitening right for me?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Patients who have healthy teeth and gums and commit to a
                  solid oral health routine are good candidates for professional
                  whitening. According to the American Dental Association,
                  whitening does not work for patients with dental implants,
                  crowns, or other restorations for the teeth. Whitening
                  treatment is also not recommended for pregnant or
                  breastfeeding women.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="does-whitening-hurt"
                >
                  Q.{" "}
                  <span className="underline">
                    Does professional whitening hurt?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Zoom teeth whitening does not cause any pain or discomfort.
                  The dentist coats the teeth with a gel, which is painless. The
                  light to activate the product also does not cause discomfort.
                  Patients with sensitive teeth should talk to their dentist
                  about treatment.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="zoom-cost"
                >
                  Q.{" "}
                  <span className="underline">
                    How much does a Zoom whitening dentist treatment cost?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Before the treatment, the dentist will go over the costs
                  with the patient. Professional whitening costs vary, depending
                  on each individual situation. After whitening, it is important
                  to protect the investment to avoid staining the teeth.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="is-whitening-permanent"
                >
                  Q.{" "}
                  <span className="underline">
                    Is professional whitening permanent?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Zoom teeth whitening is not a permanent solution for white
                  teeth. Patients may need to schedule repeat treatments
                  depending on their eating habits. If patients avoid foods that
                  stain the teeth, they may not need to return for another
                  treatment until a year or two later.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="is-zoom-safe"
                >
                  Q.{" "}
                  <span className="underline">
                    Is Zoom teeth whitening treatment safe?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Visiting a dentist to get professional whitening in the
                  office helps patients protect their gums and teeth enamel.
                  Patients with sensitivity or gum irritation would benefit from
                  treatments under their dentist's supervision. If patients opt
                  for an over-the-counter product, they run the risk of using
                  too much, which could cause irritation.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="maintain-results"
                >
                  Q.{" "}
                  <span className="underline">
                    What can I do to maintain my results from professional
                    whitening?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. It is essential to keep up with excellent brushing and
                  flossing habits after Zoom teeth whitening. The dentist may
                  recommend a specific brand of toothpaste to help maintain
                  results. It is also important to continue with regular dental
                  check-ups.
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
              <div className="space-y-10">
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Bleachorexia</h2>
                  <p>
                    Bleachorexia is the excessive and repeated use of teeth
                    whitening products without professional guidance, often
                    leading to enamel erosion and gum damage.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Carbamide Peroxide</h2>
                  <p>
                    Carbamide peroxide is a bleaching agent that breaks down
                    into hydrogen peroxide and urea, used in many professional
                    and at-home teeth whitening treatments.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry focuses on enhancing the appearance of
                    teeth, gums, and bites, including treatments like whitening,
                    veneers, and reshaping.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Deeper Teeth Stains</h2>
                  <p>
                    These are stains that penetrate beyond the enamel into the
                    dentin layer, often caused by dark foods, drinks, or
                    smoking, requiring professional whitening solutions.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentin Hypersensitivity</h2>
                  <p>
                    This condition causes sharp pain in teeth due to exposed
                    dentin, typically triggered by hot, cold, or acidic stimuli
                    as a result of enamel wear.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist is a licensed medical professional specializing in
                    oral health, including diagnosis, prevention, and treatment
                    of dental diseases and conditions.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Hydrogen Peroxide</h2>
                  <p>
                    Hydrogen peroxide is a common ingredient in teeth whitening
                    solutions, known for its ability to break down stains and
                    lighten tooth color.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Relief ACP</h2>
                  <p>
                    Relief ACP, or amorphous calcium phosphate, is a dental gel
                    that helps reduce tooth sensitivity and promote enamel
                    repair during whitening treatments.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Stained Dentin</h2>
                  <p>
                    Stained dentin refers to discoloration within the inner
                    layer of the tooth, usually requiring professional treatment
                    to restore brightness.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Surface Enamel</h2>
                  <p>
                    Surface enamel is the outermost protective layer of the
                    tooth, vulnerable to staining and erosion but crucial for
                    tooth strength and appearance.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Surface Teeth Stains</h2>
                  <p>
                    Surface teeth stains occur on the enamel due to substances
                    like coffee, tea, wine, or tobacco, and are typically
                    treatable with whitening solutions.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">
                    Teeth Whitening Concentrate
                  </h2>
                  <p>
                    Teeth whitening concentrate is the active bleaching agent in
                    whitening treatments, more potent and effective when
                    administered professionally.
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
