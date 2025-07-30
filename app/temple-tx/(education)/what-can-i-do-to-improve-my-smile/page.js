import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { FaYelp } from "react-icons/fa";
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
        <div className="bg-[url(/educations/what-can-i-do-to-improve-my-smile.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            What Can I Do to Improve My Smile
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Brightening your smile can enhance your overall appearance. Most
            people have at least one aspect of their smile that they would like
            to improve. Fortunately, many options are available to enhance a
            smile’s appearance — from proper maintenance to restorative and
            cosmetic treatments.
          </p>
          <p className="font-tinos  text-justify">
            Revital Dental in Temple and the surrounding area can help you
            improve your smile. Our team will help determine the right treatment
            to help you meet your smile goals. Contact us at (254) 207-0708 to
            learn more about our services or schedule an appointment.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="reasons-improve-smile">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">Improving Smiles</h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              A beautiful smile is not only pleasing to the eye but also has
              social and health benefits. Some common reasons people seek
              treatment to improve their smiles include issues such as gaps,
              chips, stains, missing teeth, and large or receding gums. Since a
              smile is one of the first things people see, treatments to improve
              the smile can help people feel more confident about their
              appearance.
            </p>
            <p className="text-justify font-tinos mt-4">
              A healthy smile can enhance people’s relationships, communication,
              and self-esteem. The right treatment can correct damage and help
              patients smile with pride. According to at least one study,
              happiness with one’s smile has been directly correlated with
              higher levels of self-confidence. No matter the dental issue,
              there is a treatment that can help patients achieve the smile
              results they want.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “A beautiful smile is not only pleasing to the eye but also has
              social and health benefits.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="importance-understanding-dentist">
            <h2 className="font-cinzel text-2xl text-primary">
              Addressing Concerns
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Everyone has a unique smile, so patients need to find a dentist
              who understands their wants and needs. Seeking professional help
              to improve a smile is a big decision that should involve thorough
              research and consideration. Communication throughout the treatment
              process is an important part of ensuring that the patient is
              comfortable throughout the process and satisfied with their
              results.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Patients should seek treatment from a dentist who values their
              input and is open to discussing any questions or concerns. It is
              important for patients to receive the necessary information and
              professional input before going into the treatment process.
              Listening to such concerns allows Revital Dental to create a
              customized treatment plan to improve each patient’s smile.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Everyone has a unique smile, so it is essential for patients to
              find a dentist who understands their wants and needs.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="smile-care-techniques">
            <h2 className="font-cinzel text-2xl text-primary">
              Maintaining a Healthy Smile
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              A smile’s health plays an important role in its appearance. Proper
              dental care techniques play a vital role in sustaining and
              improving a healthy smile. Although a healthy smile is not
              achieved overnight, developing healthy dental habits can help
              improve the look and health of teeth. Some techniques that support
              healthy teeth and gums include:
            </p>
            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>Brushing teeth twice a day</li>
              <li>Flossing at least once a day</li>
              <li>Limiting staining foods or drinks</li>
              <li>Receiving prompt dental treatment</li>
              <li>Scheduling regular dental check-ups</li>
            </ul>
            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Proper dental care techniques play a vital role in sustaining
                and improving a healthy smile.”
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

            <div className="mt-10" id="restorative-methods">
              <h2 className="font-cinzel text-2xl text-primary">
                Restorative Methods
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Restorative dental procedures are available to help repair the
                appearance and function of a patient’s teeth. The primary focus
                of restorative methods is to replace damaged or missing tooth
                structure. There are two types of restorative methods, direct
                and indirect. Direct dental restorations involve placing a
                filling directly into a prepped and cleaned tooth cavity.
              </p>
              <p className="font-tinos mt-2 text-justify">
                The creation of indirect dental restorations occurs outside of
                the mouth cavity to fix more severe dental damage. The common
                types of indirect restorative methods include veneers, dental
                crowns, inlays, onlays, and dental bridges. Patients should
                consult our dentist to learn about the available options.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Restorative dental procedures are available to help repair the
                appearance and function of a patient’s teeth.”
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
                  href="#reasons-improve-smile"
                >
                  Q.{" "}
                  <span className="underline">
                    What reasons cause people to want to improve their smile?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#importance-understanding-dentist"
                >
                  Q.{" "}
                  <span className="underline">
                    Why is it important for patients to discuss their concerns
                    with a dentist that understands them?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#smile-care-techniques"
                >
                  Q.{" "}
                  <span className="underline">
                    What care techniques help maintain a healthy smile?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#restorative-methods"
                >
                  Q.{" "}
                  <span className="underline">
                    What restorative methods can help patients improve their
                    smiles?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#cosmetic-treatments"
                >
                  Q.{" "}
                  <span className="underline">
                    What cosmetic treatments can patients receive?
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
                  href="oral-hygiene-basics/#home-care-routine"
                >
                  Q.{" "}
                  <span className="underline">
                    What should a home oral care routine include?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="oral-hygiene-basics/#diet-and-tooth-decay"
                >
                  Q.{" "}
                  <span className="underline">
                    How can a person’s diet help with tooth decay?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="oral-hygiene-basics/#maintaining-healthy-smile"
                >
                  Q.{" "}
                  <span className="underline">
                    How does one maintain a healthy smile?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="cosmetic-treatments">
              <h2 className="font-cinzel text-2xl text-primary">
                Cosmetic Treatments
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Cosmetic treatments can help patients improve the appearance of
                stained, discolored, worn, chipped, broken, or misshapen teeth.
                The most common cosmetic dental treatment is teeth whitening.
                This procedure can brighten and whiten teeth quickly and
                effectively. Dental veneers are a cosmetic treatment that
                consists of placing thin shells over teeth to fix crookedness,
                chips, or discoloration.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Other popular cosmetic treatments include dental bonding and
                enamel shaping. Dental bonding involves adhering tooth-colored
                composite material to the surface of badly stained, broken, or
                chipped teeth. During enamel shaping, the tooth is reshaped by
                filing or removing the enamel. Patients interested in receiving
                cosmetic treatment should talk to our dentist to find the right
                one for their needs.
              </p>
            </div>
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Cosmetic treatments can help patients improve the appearance of
                stained, discolored, worn, chipped, broken, or misshapen teeth.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            {/* Q & A */}
            <div className="bg-gray-100 p-5 mt-10">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Is teeth whitening a safe procedure?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. When done properly, teeth whitening is a safe procedure
                  that does not damage the tooth’s nerves or affect the enamel’s
                  mineral content. Although it is a minimally invasive
                  treatment, some people may experience side effects like teeth
                  sensitivity or gum irritation. Both of these side effects
                  should diminish over time.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Is teeth whitening permanent?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Teeth whitening is not permanent. The effects vary for each
                  person but may last anywhere between three months to three
                  years. Patients who receive this procedure will need to
                  receive additional treatments to whiten intrinsic and
                  extrinsic tooth discoloration every so often.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. When are dental crowns necessary?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dental crowns may be necessary for various situations to
                  restore tooth appearance and function after a restorative
                  dental procedure. Crowns can protect and reinforce cracked,
                  worn down, or broken teeth. These dental restorations can also
                  hold a dental bridge in place, cover misshapen or discolored
                  teeth, or support a tooth with a large filling.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Does teeth whitening work on crowns or veneers?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Teeth whitening solution removes stains from the tooth
                  enamel. Dental restorations such as crowns and veneers do not
                  consist of enamel but consist of strong materials designed to
                  be stain-resistant. Crowns and veneers do not respond to teeth
                  whitening. However, they should not stain or require whitening
                  in the first place.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. What are veneers used to treat?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Veneers are a versatile dental restoration that can treat
                  many dental issues. Typically, veneers protect and improve the
                  appearance of teeth that have chipped, cracked, minor breaks,
                  or have thin enamel. They can also cover stained or misshapen
                  teeth.
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
                    Bleachorexia is a condition where individuals excessively
                    use teeth whitening products without professional guidance,
                    leading to enamel erosion and gum damage.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Carbamide Peroxide</h2>
                  <p>
                    Carbamide peroxide is a bleaching agent containing hydrogen
                    peroxide, commonly used in teeth whitening treatments for
                    its effectiveness in breaking down stains.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry includes dental procedures aimed at
                    improving the aesthetic appearance of teeth, gums, and
                    smile, such as whitening, veneers, and reshaping.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Deeper Teeth Stains</h2>
                  <p>
                    Deeper teeth stains are discolorations that affect the
                    internal layers of the tooth and often require professional
                    treatment due to resistance to surface whitening products.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentin Hypersensitivity</h2>
                  <p>
                    Dentin hypersensitivity occurs when the protective enamel
                    layer is worn down, exposing the dentin and causing sharp
                    pain in response to temperature or pressure changes.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist is a healthcare professional specializing in the
                    prevention, diagnosis, and treatment of oral diseases and
                    conditions involving the teeth and gums.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Hydrogen Peroxide</h2>
                  <p>
                    Hydrogen peroxide is an active ingredient in many whitening
                    products that breaks down stains and lightens the natural
                    color of teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Relief ACP</h2>
                  <p>
                    Relief ACP (Amorphous Calcium Phosphate) is a dental gel
                    used to reduce sensitivity and promote enamel
                    remineralization after teeth whitening or irritation.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Stained Dentin</h2>
                  <p>
                    Stained dentin refers to discoloration that affects the
                    layer beneath enamel, often requiring in-office treatments
                    to effectively brighten and restore tooth color.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Surface Enamel</h2>
                  <p>
                    Surface enamel is the visible, outermost layer of a tooth
                    that provides protection and aesthetic appeal. It is highly
                    mineralized and can be stained by dietary habits.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Surface Teeth Stains</h2>
                  <p>
                    Surface teeth stains affect the enamel and are commonly
                    caused by dark-colored foods, beverages, or smoking. These
                    stains can often be removed with whitening products.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">
                    Teeth Whitening Concentrate
                  </h2>
                  <p>
                    Teeth whitening concentrate refers to the professional-grade
                    bleaching agents used in dental offices, offering stronger
                    and more consistent results than over-the-counter options.
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

export default Services;
