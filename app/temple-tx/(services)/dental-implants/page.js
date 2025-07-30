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
        <div className="bg-[url(/services/dental-implants.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">Dental Implants</h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Patients can enjoy a more comfortable and functional bite after
            losing teeth with dental implants. Implants act as artificial roots
            to anchor permanent teeth replacements. If you are missing one or
            more teeth or need to have one extracted, dental replacements can be
            a great option to restore your smile.
          </p>
          <p className="font-tinos  text-justify">
            Dental implants can be beneficial for people who want a tooth
            replacement option that closely imitates natural teeth. They can be
            a very effective long-term solution for missing teeth. Dental
            implants are available at Revital Dental in Temple and the
            surrounding area. Call our team at (254) 207-0708 to learn more
            about this service and set up an appointment.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="what-is-involved-dental-cleaning">
          {/* dark section */}
          <div
            className="bg-dark p-5 text-white"
            id="what-happens-during-dental-implant-process"
          >
            <h2 className="text-2xl font-cinzel mb-3">
              The Dental Implant Process
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Dental implants act as artificial tooth roots to support new
              replacement teeth. During the procedure, an incision is made in
              the patient’s gum to expose the bone where the implant will be
              placed. We will then insert the implant and suture the gum around
              the implant post. In some cases, a temporary denture is used
              instead of replacement teeth.
            </p>
            <p className="text-justify font-tinos mt-4">
              Following the surgery, the bone needs to heal around the dental
              implant. This process can take several weeks or months. Once it is
              sufficiently strong, a dentist can fit the permanent replacement
              teeth. According to the Mayo Clinic, some extra steps may be
              necessary. For patients with weak jawbones, a bone graft may be
              needed to ensure sufficient strength. After the bone has healed,
              an abutment connects a crown or dentures to the dental implant.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Dental implants act as artificial tooth roots to support new
              replacement teeth.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="how-to-care-for-dental-implants">
            <h2 className="font-cinzel text-2xl text-primary">
              How To Care for Dental Implants
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Caring for dental implants is very similar to caring for natural
              teeth, especially if the replacement teeth are permanent.
              Brushing, flossing, and rinsing with mouthwash is necessary for
              maintaining proper oral hygiene with implants. Getting regular
              checkups and teeth cleanings at the dentist are important for
              taking care of replacement teeth.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Dental implants may require extra cleaning to keep them in optimal
              condition. Removable, implant-supported dentures should be taken
              out at night and soaked in a denture solution. Patients can also
              use an oral irrigator to help clean below and around the dental
              implants.
            </p>
          </div>

          {/* Q & A */}
          <div className="mt-10" id="what-happens-after-implant-procedure">
            <h2 className="font-cinzel text-2xl text-primary">
              What To Expect After the Procedure
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              Following the procedure, it is common to have swelling and
              discomfort around the implantation site. Some patients may
              experience minor bleeding and bruising of the skin and gums in the
              treatment area. These side effects can be managed with pain
              medication and antibiotics if necessary. Patients can expect such
              side effects to subside after a few days.
            </p>
            <p className="font-tinos mt-2">
              After receiving dental implants, it is best to stick to eating
              soft foods while the bone heals. Most dental implant procedures
              use dissolvable stitches, so patients will not have to come back
              to get them removed. These stitches will usually fall out within
              seven to 10 days. Following the aftercare instructions and advice
              will help the healing process.
            </p>
            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Following the procedure, it is common to have swelling and
                discomfort around the implantation site.”
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

            <div className="mt-10" id="benefits-of-dental-implants">
              <h2 className="font-cinzel text-2xl text-primary">
                Benefits of Dental Implants
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Dental implants can be a good choice for many patients with
                missing teeth. Dental implants allow new teeth to feel, look,
                and function naturally. Here are some key benefits of dental
                implants:
              </p>

              <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
                <li className="mt-2">
                  <span className="font-bold">Comfortable: </span> Dental
                  implants act as tooth roots and stay firmly in place. This
                  firm foundation makes them more comfortable than dentures and
                  other replacement tooth options. Many patients report that
                  implants feel similar to their natural teeth.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Functional: </span>
                  The stability of implants makes them effective for eating,
                  talking, and cleaning. They function similarly to the teeth
                  they are replacing. Less permanent options may interfere more
                  with daily life.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Permanent: </span>
                  Dental implants are one of the most permanent tooth
                  replacement options. They can last a lifetime with good care.
                  Additionally, fixed replacement teeth on implants do not need
                  to be removed every day for cleaning.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Natural-looking: </span>
                  Implant-supported replacement teeth look like natural teeth.
                  The visible part of the dental implant is a cosmetic crown
                  made from a composite material that is color-matched to the
                  patient’s tooth enamel. It can be hard to tell the difference.
                  Many patients enjoy dental implants’ aesthetic appeal, as
                  others cannot tell the difference between the replacement and
                  natural teeth.
                </li>
              </ul>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Dental implants allow new teeth to feel, look, and function
                naturally.”
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
                  href="#what-happens-during-dental-implant-process"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens during the dental implant process?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#how-to-care-for-dental-implants"
                >
                  Q.{" "}
                  <span className="underline">
                    How to take care of dental implants?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#what-happens-after-implant-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens after the dental implant procedure?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#benefits-of-dental-implants"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the benefits of dental implants?
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
                  href="dental-veneers-and-dental-laminates#understanding-dental-laminates"
                >
                  Q.{" "}
                  <span className="underline">
                    How are laminates different from veneers?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="dental-veneers-and-dental-laminates#understanding-dental-veneers"
                >
                  Q. <span className="underline">What are dental veneers?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="dental-veneers-and-dental-laminates#placing-dental-veneers"
                >
                  Q.{" "}
                  <span className="underline">
                    How are dental veneers placed?
                  </span>
                </a>
              </div>
            </div>

            {/* Q & A */}

            <div className="bg-gray-100 p-5 mt-10 ">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#what-is-involved-dental-cleaning"
                >
                  Q. How do I know if I am a candidate for dental implants?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. According to WebMD, most healthy people are good candidates
                  for dental implants. However, weak or unsubstantial jawbone
                  mass may limit whether a patient can receive implants.
                  Restorative procedures like bone grafting can overcome this
                  issue in some cases. A dentist can determine whether a patient
                  is a candidate during an exam and consultation.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. What is the success rate of dental implants?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. According to the Cleveland Clinic, dental implants have a
                  success rate of up to 97%. Furthermore, they can last a
                  lifetime with proper care. Dental implants are one of the most
                  permanent solutions for missing teeth.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. How much do dental implants cost?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The cost of dental implants will vary depending on the
                  patient’s needs, bone quantity, and the treatment area. Dental
                  implants may qualify for some insurance coverage, but
                  situations will vary. People interested in receiving this
                  procedure should contact their insurance provider and receive
                  a consultation to learn more about the cost.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. Are dental implants removable?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The dental implant is permanent. The replacement teeth that
                  sit on them can be fixed or removable. Fixed dentures are the
                  preferred option for many patients due to their stability and
                  comfort.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. Do I need full dentures to get implants?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. No, implants may support one or more replacement teeth.
                  Some patients receive partial dentures with multiple teeth,
                  while others receive a full arch of teeth. Dental implants are
                  a flexible solution for each patient’s needs.
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
                  <h2 className="italic text-xl">Abutment</h2>
                  <p>
                    An abutment is a component that attaches to the dental
                    implant so a professional can place a dental crown to
                    provide patients with an artificial, aesthetically pleasing
                    and fully-functional smile.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Bridge</h2>
                  <p>
                    Multiple replacement teeth that are fixed in place via
                    attachment to dental implants, natural adjacent teeth, or a
                    combination of the two.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Crown</h2>
                  <p>
                    A crown is an artificial tooth, usually consisting of
                    porcelain, which covers the top of the implant to provide
                    people with an aesthetically pleasing and fully-functional
                    tooth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Implant</h2>
                  <p>
                    A dental implant is an artificial tooth root that is placed
                    into your jaw to hold a replacement tooth or bridge. Dental
                    implants may be an option for people who have lost a tooth
                    or teeth due to periodontal disease, an injury, or some
                    other reason.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Endosteal (endosseous)</h2>
                  <p>
                    Endosteal is a type of dental implant that a professional
                    places in the alveolar and basal bone of the mandible that
                    transcends only one cortical plate.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Eposteal (subperiosteal)</h2>
                  <p>
                    Eposteal is a type of dental implant that conforms to
                    whichever edentulous surface of an alveolar bone is
                    superior.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Implant-Supported Bridge</h2>
                  <p>
                    An implant-supported bridge is a dental bridge that
                    professionals fix in place with the use of dental implants
                    inserted in the jaw to create a sturdy set of artificial
                    teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Osseointegration</h2>
                  <p>
                    Osseointegration is the process in which a titanium dental
                    implant fuses with the surrounding bone over several months
                    after an oral health professional places the implant in the
                    jaw.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontal</h2>
                  <p>Literally “around the tooth”</p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Resorption</h2>
                  <p>
                    Resorption is the process in which the body absorbs the
                    calcium from the jaw since there are no tooth roots to cause
                    the necessary stimulation and proceeds to use the calcium in
                    other areas.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Transosteal (transosseous)</h2>
                  <p>
                    Transosteal is a type of dental implant that includes
                    threaded posts which penetrate the superior and inferior
                    cortical bone plates of the jaw.
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
