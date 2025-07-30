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
        <div className="bg-[url(/educations/when-is-tooth-extraction-necessary.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            When Is a Tooth Extraction Necessary
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Although it is best to preserve a natural tooth, there are times
            when a tooth extraction is necessary. An extraction may be the best
            option to maintain oral health due to trauma, disease, or crowding.
            Tooth extraction involves the complete removal of one or more teeth
            from the jaw bone.
          </p>
          <p className="font-tinos  text-justify">
            Tooth extraction is available at Revital Dental in Temple and the
            surrounding area. Our team can extract teeth gently and safely to
            preserve your oral health. Call us at (254) 207-0708 to learn more
            about our services or schedule an appointment.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="tooth-extraction-reasons">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">A Normal Procedure</h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              While it is best to preserve natural teeth, many reasons can
              necessitate tooth extraction. Sometimes a filling or crown is not
              enough to restore a tooth. The American Dental Association
              suggests the extraction of teeth that have suffered severe trauma,
              have extreme tooth decay or disease, or are crowding the
              surrounding teeth. It is also normal for patients to have an
              extraction or two before orthodontic treatment.
            </p>
            <p className="text-justify font-tinos mt-4">
              Many tooth extractions are relatively simple and performed
              in-office. For teeth that are visible about the gum line, we will
              numb the extraction site and remove the tooth with forceps. Broken
              or impacted teeth require a more involved procedure.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “The American Dental Association suggests the extraction of teeth
              that have suffered severe trauma, have extreme tooth decay or
              disease, or are crowding the surrounding teeth.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="infection-spread-risk">
            <h2 className="font-cinzel text-2xl text-primary">
              Preventing Infection
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              According to the National Institute of Dental and Craniofacial
              Research, gum disease is the most common cause of tooth loss in
              adults. Gum disease occurs when bacteria get below the gum line
              and causes infections. Without treatment, oral bacterial leads to
              gum recession, damage to the jawbone, loose teeth, and even tooth
              loss.
            </p>

            <p className="font-tinos mt-2 text-justify">
              Research has also shown chronic dental infections can cause
              inflammation that contributes to cardiovascular disease, stroke,
              and many other related diseases. While a root canal can often save
              a tooth from decay, sometimes a tooth is beyond saving due to lost
              structure and stability. Tooth extraction can prevent damaging
              decay and infection from spreading.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Tooth extraction can prevent damaging decay and infection from
              spreading.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="wisdom-tooth-removal">
            <h2 className="font-cinzel text-2xl text-primary">
              Overcrowded or Impacted Teeth
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              In some cases, it is beneficial to have crowded or impacted teeth
              extracted. Impacted wisdom teeth do not have enough room to grow.
              Extraction can prevent pain, infection, and other dental problems.
              While not all wisdom teeth need removal, it is necessary once they
              start causing problems. In some cases, wisdom teeth do not fully
              break through the gums and can cause crowding issues. A partially
              erupted wisdom tooth is especially susceptible to cavities.
            </p>

            <p className="font-tinos mt-2">
              Patients may also need teeth extracted before receiving braces.
              Orthodontics involves the process of properly aligning the teeth,
              which may be tough without enough room. Crowded teeth increase a
              patient’s risk of developing gum disease and cavities. Extracting
              teeth can relieve crowding and impacted teeth.
            </p>
            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Extraction can prevent pain, infection, and other dental
                problems.”
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

            <div className="mt-10" id="when-restoration-fails">
              <h2 className="font-cinzel text-2xl text-primary">
                When Tooth Restoration Is Not Enough
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Typically, the first option to restore a damaged tooth is a
                crown or filling. If the damage is too severe, trying to save a
                tooth may put oral health at further risk. A filling may put the
                tooth at risk for shattering, while a tooth may not be strong
                enough to support a crown. Root canals are also not possible
                when there is too much tooth damage.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Each tooth has a limit to how many times it can be worked on
                before it starts to fail. Redoing a crown or root canal only
                buys so much time. After several fillings, crowns, and root
                canals, there will not be much of the tooth left to save. At
                that point, tooth extraction is the best option to maintain oral
                health.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “If the damage is too severe, trying to save a tooth may put
                oral health at further risk.”
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
                  href="#tooth-extraction-reasons"
                >
                  Q.{" "}
                  <span className="underline">
                    Why would a tooth need to be extracted?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#infection-spread-risk"
                >
                  Q.{" "}
                  <span className="underline">
                    Why is stopping infection from spreading important?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#wisdom-tooth-removal"
                >
                  Q.{" "}
                  <span className="underline">
                    Why do I need my wisdom teeth or other teeth removed?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#when-restoration-fails"
                >
                  Q.{" "}
                  <span className="underline">
                    When is restoration not enough to save a tooth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#trauma-tooth-extraction"
                >
                  Q.{" "}
                  <span className="underline">
                    What sorts of trauma can necessitate tooth extraction?
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
                  href="what-should-i-do-if-i-chip-my-tooth/#child-vs-adult-chip"
                >
                  Q.{" "}
                  <span className="underline">
                    How is a child’s chipped tooth different from an adult’s?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="what-should-i-do-if-i-chip-my-tooth/#repair-methods-chip"
                >
                  Q.{" "}
                  <span className="underline">
                    What methods are available to repair a chipped tooth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="what-should-i-do-if-i-chip-my-tooth/#maintain-treated-tooth"
                >
                  Q.{" "}
                  <span className="underline">
                    How should a treated chipped tooth be maintained?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="trauma-tooth-extraction">
              <h2 className="font-cinzel text-2xl text-primary">
                Trauma and Tooth Extraction
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Teeth are tough but not indestructible. Traumatic dental
                injuries can occur from a sports injury, car accident, or even a
                simple slip and fall. While many injuries are minor, if the
                tooth becomes severely damaged to the point where restoration is
                not possible, an extraction will be necessary.
              </p>
              <p className="font-tinos mt-2 text-justify">
                After sustaining tooth trauma, patients should schedule an
                appointment quickly to improve their outcomes. Our team can look
                for signs of additional damage that may not be immediately
                obvious. Severely fractured teeth can be very loose and unable
                to be restored with dental work, thus making tooth extraction
                necessary. Patients should take any dental trauma seriously,
                even if it seems mild.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “While many injuries are minor, if the tooth becomes severely
                damaged to the point where restoration is not possible, an
                extraction will be necessary.”
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
                  Q. How is a chipped tooth diagnosed?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Our dentist can diagnose a chipped tooth by visibly
                  inspecting the patient’s mouth. They will also ask about any
                  symptoms and the event that may have caused the chip.
                  Sometimes determining the extent of the damage can be
                  difficult and may require the use of magnifying glasses,
                  X-rays, or other tests.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. How long does it take to repair a chipped tooth?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The length of time it takes to repair a chip will depend on
                  the extent of damage to the tooth. Our dentist will tell the
                  patient how long they can expect their treatment to take
                  during their consultation. In most cases, it only takes one
                  office visit to fix a chipped tooth.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Who is a good candidate for cosmetic contouring?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Cosmetic contouring is best for people with minor cosmetic
                  problems like small chips. The patient’s enamel needs to be
                  thick enough since cosmetic contouring removes one to two
                  millimeters of enamel from the tooth’s surface. If the
                  patient’s enamel is too thin, then we may suggest a different
                  repair method.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. What are the risk factors associated with a chipped tooth?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Weakened teeth are more likely to chip than strong and
                  healthy ones. Tooth decay and cavities are common factors that
                  reduce tooth strength and make chips more likely to occur.
                  Teeth grinding, eating acid-producing foods, and acid reflux
                  can damage the tooth enamel and weaken it.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. How is a veneer applied?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. First, our dentist will take a mold of the patient’s tooth
                  to create the veneer. Then we will clean the patient’s tooth
                  and use dental cement to bond the veneer to the tooth. An
                  ultraviolet light hardens the cement quickly, and the patient
                  can leave the office with their improved smile.
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
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry is generally used to refer to any dental
                    work that improves the appearance (though not necessarily
                    the function) of a person’s teeth, gums and/or bite.
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
                  <h2 className="italic text-xl">Dental Caries</h2>
                  <p>
                    Dental caries are also known as cavities and result from a
                    lack of proper oral hygiene leaving plaque that forms tiny
                    holes in the teeth.
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
                  <h2 className="italic text-xl">Dental Filling</h2>
                  <p>
                    A dental filling involves restoring the structure of the
                    tooth by using metal, alloy, porcelain or plastic to fill
                    the tooth.
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
                  <h2 className="italic text-xl">Dental Sealants</h2>
                  <p>
                    Dental sealants contain a resinous material that we apply to
                    the chewing surfaces of the posterior teeth to prevent
                    dental caries.
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
                  <h2 className="italic text-xl">Gingivitis</h2>
                  <p>
                    Gingivitis is the inflammation of gum tissue that results
                    from plaque, other infections in the mouth and poor oral
                    hygiene.
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
                  <h2 className="italic text-xl">Tartar</h2>
                  <p>
                    Tartar forms when plaque builds up on the surface of the
                    teeth and calcifies into a hard surface that is much more
                    difficult to remove and will require professional treatment.
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
                <Link href="/blogs" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/dental-anxiety"
                  className="hover:underline"
                >
                  Dental Anxiety
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/oral-cancer-screening"
                  className="hover:underline"
                >
                  Oral Cancer Screening
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/do-i-need-a-root-canal"
                  className="hover:underline"
                >
                  Do I Need a Root Canal?
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/options-for-replacing-missing-teeth"
                  className="hover:underline"
                >
                  Options for Missing Teeth
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
