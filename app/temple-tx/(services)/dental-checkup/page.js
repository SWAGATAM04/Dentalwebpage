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
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[125px] border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/services/dental-checkup.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">Dental Checkup</h2>
          <p className="font-cinzel">Temple, TX</p>
          <p className="font-tinos  text-justify">
            If a patient is having a dental checkup for the first time, or if
            they have not been to the dentist in a while, they often find
            themselves wondering what a dental checkup is. During this routine
            appointment, a dental professional will check the smile, teeth, and
            gums for infection, decay, and disease, such as cavities or
            periodontitis (gum disease).
          </p>
          <p className="font-tinos  text-justify">
            At some point during the checkup, they will also be given guidance
            on home care. This allows them to keep their smile in the best shape
            possible between checkups. Scheduling your checkup is as easy as
            calling our Revital Dental team in Temple at (254) 207-0708.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="what-is-involved-dental-cleaning">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">Dental Cleaning</h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              During the dental cleaning, the dental professional will remove
              the plaque — a buildup of bacteria that deposits onto the teeth.
              To do this, the dental professional will scrape the teeth above
              and below the gum line with special tools. The teeth may be rinsed
              periodically during this process. Then, the dental professional
              will floss between the teeth. If the patient does not floss
              regularly, they may find this to be a little uncomfortable; but if
              they include flossing as part of their daily oral care practice,
              this discomfort will go away over time.
            </p>
            <p className="text-justify font-tinos mt-4 mb-5">
              At the end of the dental cleaning, the dental professional will
              polish the teeth. This polishing helps protect the teeth against
              the buildup of plaque so they stay shiny and smoother longer. The
              polish is applied with a spinning brush and a paste. This paste
              resembles toothpaste but is slightly coarse so it can better
              eliminate any residue that might have been missed. When the dental
              professional is done cleaning the teeth, the patient may be asked
              to rinse and gargle with mouthwash.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “During the dental cleaning, the dental professional will remove
              the plaque — a buildup of bacteria that deposits onto the teeth.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="dentist-look-for-dental-examination">
            <h2 className="font-cinzel text-2xl text-primary">
              Dental Examination
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              The dentist will speak to the patient about their dental history.
              They may ask the patient about medications and illnesses, or
              whether they have any allergies, concerns, or anxieties. Always be
              honest with our dental team so they can provide the best care
              possible.
            </p>
            <p className="font-tinos mt-2">
              The dental professional will check the teeth for any signs of
              concern by using a small mirror to look around the mouth. During
              this examination, they will be looking for swelling, sores, cuts
              or lesions, gum recession, and{" "}
              <Link
                href="https://www.mouthhealthy.org/all-topics-a-z/tooth-decay"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                tooth decay
              </Link>
              . One of the most important things they will look for is spaces
              between the gums and teeth called dental pockets. Dental pockets
              pose a risk to health and may indicate gum disease. The dental
              professional may recommend home care and monitoring to protect the
              smile.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “These X-rays are important for your dental team to be able to
              check the roots beneath your gum line, which could otherwise not
              be seen during a routine checkup.”
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
                Dental Checkup in Temple, TX
              </Link>
            </h2>
          </div>
          {/* Q & A */}
          <div className="mt-10">
            <h2 className="font-cinzel text-2xl text-primary">
              The Importance of Regular Dental Care
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Our dental team recommends that all patients return to the office
              for dental checkups at least once every six months. By scheduling
              regular appointments and cleanings, our dental team will be able
              to monitor the smile for any signs of concern. Waiting too long
              between checkups gives more time for plaque to build up, which may
              lead to cavities, tooth decay, receding gums, and more. Patients
              will also be taught what they can do to prevent these issues
              during checkups.
            </p>
            <p className="font-tinos mt-2">
              Keeping oral health on track starts at home. To prevent oral
              health issues between dental checkups, our dental team may make
              several recommendations for at-home oral care. These oral hygiene
              techniques may include:
            </p>
            <ul className="font-tinos list-disc  pl-4 mt-2">
              <li>
                Brushing the teeth at least twice a day with a fluoride
                toothpaste
              </li>
              <li>Flossing daily</li>
              <li>Using a mouthwash</li>
              <li>
                Avoid smoking or other activities detrimental to oral health
              </li>
            </ul>

            {/* Questions Answered on This Page */}
            <div className="relative inline-block mt-10">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “To prevent oral health issues between dental checkups, our
                dental team may make several recommendations for at-home oral
                care.”
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
                  href="#what-is-involved-dental-cleaning"
                >
                  Q.{" "}
                  <span className="underline">
                    What is involved in the dental cleaning portion of a
                    checkup?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q.{" "}
                  <span className="underline">
                    What does the dentist look for in a dental examination?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. <span className="underline">Why are x-rays taken?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q.{" "}
                  <span className="underline">
                    How often should someone have a dental checkup?
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
                  href="dental-crowns-and-dental-bridges#what-are-dental-crowns-used-for"
                >
                  Q.{" "}
                  <span className="underline">
                    What are dental crowns used for?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="dental-crowns-and-dental-bridges#how-dental-bridges-work-with-dental-crowns"
                >
                  Q.{" "}
                  <span className="underline">
                    How do dental bridges work with dental crowns?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="dental-crowns-and-dental-bridges#why-should-i-get-a-dental-crown"
                >
                  Q.{" "}
                  <span className="underline">
                    Why should I get a dental crown?
                  </span>
                </a>
              </div>
            </div>

            {/* Q & A */}

            <div className="bg-gray-100 p-5 mt-10 ">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Questions Answered on This Page
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#what-is-involved-dental-cleaning"
                >
                  Q. What happens during a dental cleaning?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. During a dental cleaning, a dental professional will use
                  specialized dental tools to clean the teeth. These tools
                  include a scraping tool that looks like a small metal hook to
                  remove buildup from the surface of the teeth and an electric
                  toothbrush with coarse toothpaste to clean and shine the
                  teeth. Together with a dental mouthwash, a dental cleaning
                  will remove buildup from the teeth and protect them from
                  bacteria.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. What is a dental exam?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A dental exam is very similar to a dental checkup. Just
                  like a checkup, a dental professional checks the teeth for any
                  sign of concern and cleans the teeth. The difference is that
                  with a dental exam, the dental professional will also check
                  other areas that may be affected by oral health, like the head
                  and neck. This exam is usually only recommended for new
                  patients.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. What is a dental X-ray?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A dental X-ray is like other X-rays, but this one looks
                  specifically at the mouth. More specifically, this X-ray looks
                  at the roots and areas beneath the gum line where the dental
                  professional otherwise would not be able to see. Dental X-rays
                  are important for checking for signs of disease or other oral
                  health concerns around the roots of the teeth.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. What happens if someone waits too long for a dental
                  checkup?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Bacteria naturally attach to the surface of the teeth as
                  they are used to eat. While at-home oral care can help to
                  remove much of this bacteria, it is next to impossible to
                  remove all of it without professional dental tools. Waiting
                  too long between dental checkups gives these bacteria time to
                  settle onto the teeth and turn into plaque and tartar. If this
                  buildup is not removed, it could lead to tooth decay or
                  disease over time and create further oral health concerns.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. What at-home care should be done between dental checkups?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Recommended at-home dental care includes brushing twice a
                  day and flossing at least once a day. Also, dental care
                  professionals suggest patients use a mouthwash that includes
                  fluoride. Patients may be advised to avoid smoking, eating
                  sugary foods, and other activities that are known to be
                  harmful to oral health.
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
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry is generally used to refer to any dental
                    work that improves the appearance (though not necessarily
                    the function) of a person’s teeth, gums and/or bite.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Caries</h2>
                  <p>
                    Dental caries are also known as cavities and result from a
                    lack of proper oral hygiene leaving plaque that forms tiny
                    holes in the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Filling</h2>
                  <p>
                    A dental filling involves restoring the structure of the
                    tooth by using metal, alloy, porcelain or plastic to fill
                    the tooth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Sealants</h2>
                  <p>
                    Dental sealants contain a resinous material that we apply to
                    the chewing surfaces of the posterior teeth to prevent
                    dental caries.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Gingivitis</h2>
                  <p>
                    Gingivitis is the inflammation of gum tissue that results
                    from plaque, other infections in the mouth and poor oral
                    hygiene.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tartar</h2>
                  <p>
                    Tartar forms when plaque builds up on the surface of the
                    teeth and calcifies into a hard surface that is much more
                    difficult to remove and will require professional treatment.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Decay</h2>
                  <p>
                    Tooth decay is when the enamel of the tooth begins to decay
                    and cause erosion from plaque and tartar on the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Checkup</h2>
                  <p>
                    A dental checkup is an appointment that involves cleaning
                    the teeth, identifying any signs of infection and removing
                    said signs of infection at least once every six months in
                    the office.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Prophylaxis</h2>
                  <p>
                    A dental prophylaxis is a professional and detailed cleaning
                    that involves the removal of plaque, calculus and stains
                    from the teeth.
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
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Preventive Dentistry</h2>
                  <p>
                    Preventive dentistry is the dentistry that focuses on
                    maintaining oral health in order to prevent the spread of
                    plaque, the formation of tartar and infections in the mouth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Enamel</h2>
                  <p>
                    Tooth enamel is the protective visible outer surface of a
                    tooth that contains the dentin and dental pulp.
                  </p>
                  <hr className="mt-4" />
                </div>
              </div>
            </div>

            {/* call section */}
            <div className="bg-primary p-5 mt-10 text-white rounded-2xl">
              <h2 className="text-4xl font-cinzel mb-3">Call Us Today</h2>
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
