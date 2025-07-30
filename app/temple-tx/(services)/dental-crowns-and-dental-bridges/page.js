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
        <div className="bg-[url(/services/dental-crowns.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Dental Crowns and Dental Bridges
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            One of the most common dental treatments involves fixing tooth
            decay. The first line of defense against a cavity is a filling.
            However, deeper decay may require more extensive repair. In such
            cases, dentists may rely on a dental crown treatment or a dental
            cap.
          </p>
          <p className="font-tinos  text-justify">
            Dental crown treatment is available at Revital Dental in Temple and
            the surrounding area. Crowns help restore a tooth that has
            significant damage with a custom-sized cap that fits over the old
            tooth. We provide dental crowns and restorations for our patients.
            For broken, damaged, or decaying teeth, crowns may be the right
            solution. Call us at (254) 207-0708 to get your teeth problems
            checked out today.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="what-are-dental-crowns-used-for">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Dental Crowns Explained
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              According to the American College of Prosthodontists, the most
              common dental restoration is a single dental crown. Dentists
              utilize dental crowns in a variety of treatment situations. Crowns
              may help protect vulnerable teeth from further decay. They may cap
              damaged teeth and cover deep fillings. Crowns often complete
              dental implants or cover teeth treated with root canals. Dentists
              can work with their dental lab and the patient to create
              custom-fitting dental crowns that may restore a tooth's shape and
              size to near perfect.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Dentists can work with their dental lab and the patient to create
              custom-fitting dental crowns that may restore a tooth’s shape and
              size to near perfect.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div
            className="mt-10"
            id="how-dental-bridges-work-with-dental-crowns"
          >
            <h2 className="font-cinzel text-2xl text-primary">
              How Dental Bridges Work with Dental Crowns
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              It is not uncommon for patients to get dental crowns to complete a
              dental bridge. According to WebMD, bridges fill in the gap left
              behind by a missing tooth. If a patient has a single missing
              tooth, dentists may restore it by creating a dental appliance that
              anchors to the two adjacent teeth. The dentist must reshape the
              two abutment teeth to secure the dental bridge. Reshaping these
              teeth involves removing much of the enamel. The abutment teeth are
              topped with dental crowns which attach to the new artificial tooth
              that makes up the middle piece of the bridge.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “The dentist must reshape the two abutment teeth to secure the
              dental bridge.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="why-should-i-get-a-dental-crown">
            <h2 className="font-cinzel text-2xl text-primary">
              Why Patients Get a Dental Crown
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Some patients may choose dental crowns to avoid further damage or
              decay to an existing tooth or to maintain an aesthetically
              pleasing smile. Crowns can also help prevent tooth loss that could
              lead to additional oral health problems and more expensive dental
              work. Additionally, patients may find crowns help them maintain a
              normal bite and keep the teeth from shifting.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Crowns also help prevent tooth loss that could lead to
                additional oral health problems and more expensive dental work.”
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

            <div className="mt-10" id="what-is-it-like-to-get-a-dental-crown">
              <h2 className="font-cinzel text-2xl text-primary">
                Receiving a Dental Crown Step-by-Step
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                It may take a few appointments for a patient to receive a crown.
                In many cases, the dental crown procedure is part of another
                dental treatment plan, such as a root canal. Here is the
                step-by-step process for getting a dental crown:
              </p>

              <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
                <li>
                  <span className="font-bold">Before the Crown.</span> The
                  dentist treats any problems before starting the dental crown
                  creation process. Any infections or cavities must be addressed
                  or filled. Sometimes, an old crown needs replacement. In this
                  case, the dentist will remove the remnants first.
                </li>
                <li>
                  <span className="font-bold">Preparation.</span> Next, the
                  dentist must prepare the tooth for the crown. The dentist or
                  another member of our team will shave down the tooth to make
                  room for the crown. Then, the dental staff makes a series of
                  impressions to send to the lab. Some patients receive a
                  temporary crown at the end of this appointment.
                </li>
                <li>
                  <span className="font-bold">Crown Delivery.</span> Once the
                  crown is ready for delivery, the patient must return to the
                  office for placement. First, the dentist tries on the crown to
                  make sure it feels and looks right in the mouth. If it fits
                  correctly, the dentist uses dental cement to glue it in place
                  permanently.
                </li>
              </ul>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “In many cases, the dental crown procedure is part of another
                dental treatment plan, such as a root canal.”
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
                  href="#what-are-dental-crowns-used-for"
                >
                  Q.{" "}
                  <span className="underline">
                    What are dental crowns used for?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#how-dental-bridges-work-with-dental-crowns"
                >
                  Q.{" "}
                  <span className="underline">
                    How do dental bridges work with dental crowns?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#why-should-i-get-a-dental-crown"
                >
                  Q.{" "}
                  <span className="underline">
                    Why should I get a dental crown?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#what-is-it-like-to-get-a-dental-crown "
                >
                  Q.{" "}
                  <span className="underline">
                    What is it like to go through the process of receiving a
                    dental crown?
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
                  href="dental-implants#what-happens-during-dental-implant-process"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens during the dental implant process?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="dental-implants#how-to-care-for-dental-implants"
                >
                  Q.{" "}
                  <span className="underline">
                    How to take care of dental implants?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="dental-implants#what-happens-after-implant-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens after the dental implant procedure?
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
                  Q. Does getting a dental crown hurt?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. During preparation, the dentist may numb the area for the
                  patient's comfort. After fitting, patients may have a little
                  soreness in the area where the crown sits for a few days. Pain
                  that continues well after the crown fitting may indicate a
                  poor fit, which requires a return visit for an adjustment.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. Does a dental crown look natural?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Most dental crowns look just like the rest of the natural
                  teeth. Dentists work to help patients select a natural-looking
                  shade for the new dental crown that matches the other teeth.
                  Today's dental crowns are indistinguishable from permanent
                  teeth.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. Does a dental crown need replacement?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dental crowns need replacement over time. The crown's
                  material and the patient's oral health may determine how often
                  they will need replacement. On average, it takes five to 15
                  years before crowns require replacement.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. Are crowns a cost-effective choice?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Patients should discuss dental crown options with their
                  insurance provider to see if crowns are covered. Crowns that
                  are part of a treatment plan, such as tooth decay repair, may
                  have a higher likelihood of insurance coverage. The choice of
                  material for the crown also influences the cost.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. How long will it take to get a crown?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The length of the dental crown treatment is dependent on
                  several factors. Crowns that are part of a root canal or
                  another intensive treatment may take longer because of the
                  other steps in the procedure. Talk to the dentist to get an
                  idea about how long the crown process will take.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. What are the alternatives to getting a crown?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Patients may have other options besides dental crowns,
                  depending on their case and situation. For some patients, a
                  filling, inlay, or onlay may be sufficient to restore the
                  tooth. Pulling the tooth may also be a viable alternative to a
                  dental crown.
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
                  <h2 className="italic text-xl">Allograft</h2>
                  <p>
                    An allograft is a graft of tissue from a donor within the
                    same species as the patient that is not a genetic relative.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Alveolar Ridge</h2>
                  <p>
                    The alveolar ridge is the bony ridge for one of the jaw
                    ridges located on the roof of the mouth or on the bottom of
                    the mouth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Autograft</h2>
                  <p>
                    An autograft is a graft of tissue from one portion of an
                    individual’s body to another.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Bleachorexia</h2>
                  <p>
                    Bleachorexia is when people continue to abuse teeth
                    whitening solutions without consulting professionals,
                    causing significant damage to their enamel and gums in the
                    process.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cap Splint</h2>
                  <p>
                    A cap splint is a plastic or metallic device that
                    professionals may use to treat mandible or maxillary
                    fractures and cover crowns of teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry is generally used to refer to any dental
                    work that improves the appearance (though not necessarily
                    the function) of a person’s teeth, gums and/or bite.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Crown Lengthening</h2>
                  <p>
                    Crown lengthening is a surgical procedure that increases the
                    extent of a tooth structure for restorative or esthetic
                    purposes.
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
                  <h2 className="italic text-xl">Dentin Hypersensitivity</h2>
                  <p>
                    Dentin hypersensitivity is when the enamel wears down on the
                    tooth enough that the dentin faces exposure and will cause
                    great levels of pain when a person applies pressure to the
                    tooth or drinks hot/cold beverages.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist, also known as a dental surgeon, is a doctor who
                    specializes in the diagnosis, prevention, and treatment of
                    diseases and conditions of the oral cavity.
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

export default Services;
