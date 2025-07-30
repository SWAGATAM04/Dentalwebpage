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
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[125px] border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/services/full-mouth-reconstruction.webp)] bg-cover my-20"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Full mouth reconstruction
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Full mouth reconstruction is the rebuilding or replacement of
            damaged or missing teeth. This dental treatment can help patients
            restore their mouths from extensive damage, pervasive decay, and
            other comprehensive problems. Correcting such damage can help you
            enjoy a healthier and happier life.
          </p>
          <p className="font-tinos  text-justify">
            Full mouth reconstruction is available from Revital Dental in Temple
            and the surrounding area. There are numerous treatment options to
            help restore teeth form and function. Contact us today at (254)
            207-0708 to schedule an appointment or learn more about our
            services.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="candidate-for-reconstruction">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Candidates for Full Mouth Reconstruction
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Patients who have dental problems throughout their entire mouths
              and require extensive restoration are good candidates for full
              mouth reconstruction. These problems may result from significant
              trauma during an accident, decay, wear from grinding, or
              habit-based damage. Other treatment candidates include people with
              severe dental conditions from birth, such as amelogenesis,
              dentinogenesis imperfecta, and ectodermal dysplasia.
            </p>
            <p className="text-justify font-tinos mt-4">
              Some reconstruction treatments involve surgery, particularly
              implants or procedures that necessitate bone grafting. This
              typically requires that the patient is in good overall health.
              Therefore, a full mouth reconstruction may not be an immediate
              option for patients with other health issues.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Patients who have dental problems throughout their entire mouths
              and require extensive restoration are good candidates for full
              mouth reconstruction.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="why-need-reconstruction">
            <h2 className="font-cinzel text-2xl text-primary">
              Reasons Someone May Want or Need a Complete Mouth Reconstruction
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Various functional and cosmetic conditions may justify a full
              mouth reconstruction as a treatment. Patients should have a
              consultation with our team to will discuss their options. Some
              common reasons that people may want or need this procedure
              include:
            </p>
            <ol className="font-tinos text-justify list-disc pl-4 mt-2">
              <li>
                <span className="font-bold">Aesthetic improvement: </span> It is
                not uncommon for patients to seek a complete mouth
                reconstruction for aesthetic reasons. Discoloration, wear,
                missing teeth, and other issues may not impact function but can
                have an adverse cosmetic effect. Full reconstruction can help
                patients improve their self-esteem and enjoy the smiles they
                have always wanted.
              </li>
              <li>
                <span className="font-bold">Dental decay or disease: </span>{" "}
                Dental decay and other disease affecting the teeth can also
                necessitate reconstruction. In most cases, decay alone can be
                treated with less extensive procedures. However, if left
                untreated, tooth decay can put teeth at risk of needing
                replacement.
              </li>
              <li>
                <span className="font-bold">Gum disease: </span>
                Oral health can play a big role in the necessity for a complete
                mouth reconstruction. Gum disease can result in losing multiple
                teeth. This is especially likely if a problem goes unaddressed
                for too long.
              </li>
              <li>
                <span className="font-bold">Oral trauma:</span> A full mouth
                reconstruction may be necessary to restore the proper function
                of the teeth after significant trauma. Extensive cracking,
                chipping, and damage can require comprehensive treatment.
                Long-term damage from wear can also cause a person to want or
                need this treatment.
              </li>
            </ol>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Various functional and cosmetic conditions may justify a full
              mouth reconstruction as a treatment.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="types-of-reconstruction">
            <h2 className="font-cinzel text-2xl text-primary">
              Full Mouth Reconstruction Treatment Options
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              The process of a full mouth reconstruction varies from patient to
              patient, depending on their preferences and needs. Full mouth
              reconstructions can include almost any dental procedure and
              combination of treatments. Some of the most common procedures
              performed during treatment include dental implants, dentures,
              crowns, inlays, and onlays.
            </p>
            <p className="font-tinos mt-2">
              Additionally, a complete mouth reconstruction may involve bone
              grafting, especially when implants are chosen. Dental deep
              cleanings are also an option to combat moderate to severe gum
              disease. People with gaps of missing teeth can choose to receive a
              dental bridge, while porcelain veneers are an option for people
              with misaligned or discolored teeth in the front.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “The process of a full mouth reconstruction varies from patient
                to patient, depending on their preferences and needs.”
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

            <div className="mt-10" id="top-vs-bottom-reconstruction">
              <h2 className="font-cinzel text-2xl text-primary">
                Top Mouth and Bottom Mouth Reconstructions
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                A common alternative to full mouth reconstruction is a partial
                treatment of just the upper or lower mouth. The treatments for
                both parts of the mouth are similar. However, according to the
                Mayo Clinic, the jawbone, which is at the bottom of the mouth,
                may require bone grafting if it is overly weakened or damaged.
              </p>
              <p className="font-tinos mt-2 text-justify">
                This can also happen with the top of the mouth but is less
                common. Some reconstruction of the jawbone and gums may be
                necessary to create a healthy smile even if implants are not
                used.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “A common alternative to full mouth reconstruction is a partial
                treatment of just the upper or lower teeth.”
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
                  href="#candidate-for-reconstruction"
                >
                  Q.{" "}
                  <span className="underline">
                    Who is a good candidate for full mouth reconstruction?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#why-need-reconstruction"
                >
                  Q.{" "}
                  <span className="underline">
                    Why would someone want or need a complete mouth
                    reconstruction?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#types-of-reconstruction"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the different full mouth reconstruction treatments?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#top-vs-bottom-reconstruction"
                >
                  Q.{" "}
                  <span className="underline">
                    What is the difference between top and bottom mouth
                    reconstruction?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#cosmetic-reconstruction"
                >
                  Q.{" "}
                  <span className="underline">
                    Do people get cosmetic full mouth reconstruction?
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
                  href="invisalign#invisalign-pros-cons"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the pros and cons of Invisalign?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="invisalign#invisalign-care"
                >
                  Q.{" "}
                  <span className="underline">
                    How do I use and care for Invisalign aligners?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="invisalign#invisalign-duration"
                >
                  Q.{" "}
                  <span className="underline">
                    How long will I have to wear Invisalign aligners?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="cosmetic-reconstruction">
              <h2 className="font-cinzel text-2xl text-primary">
                Cosmetic Complete Mouth Reconstructions
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Not all full mouth reconstructions are strictly functional.
                While restoring the mouth can help with speech, comfort, and
                eating, WebMD states that improving a smile’s appearance can
                also boost self-esteem. Some procedures that a part of full
                mouth reconstructions are also considered cosmetic, such as
                tooth replacements, veneers, gum contouring, orthodontics,
                whitening, and more.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Many people aspire to have a beautiful smile. While a full mouth
                reconstruction is not always necessary to achieve this, it can
                be a good option. Even when functional improvement is necessary,
                patients can also choose to include some cosmetic treatments to
                enhance their smiles’ appearance.
              </p>
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Cosmetic full mouth reconstructions can include tooth
                replacements, veneers, gum contouring, orthodontics, whitening,
                and more.”
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
                  Q.{" "}
                  <span className="underline">
                    How long does a full mouth reconstruction take?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The length of the procedure can vary depending on how
                  extensive the treatment needs to be. We typically perform full
                  mouth reconstructions over multiple sessions that can span
                  anywhere from a few weeks to a year. Our team will provide
                  patients with a time estimate before starting the treatment
                  process.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    How much does a full mouth reconstruction cost?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A full mouth reconstruction is a comprehensive treatment
                  that involves multiple procedures. The cost will vary for each
                  patient depending on their treatment process and insurance
                  coverage. People should contact their insurance provider for
                  more information before seeking treatment.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Are there functional benefits to a complete mouth
                    reconstruction?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes, having a complete and healthy set of teeth can improve
                  eating, speaking, comfort, and more. Patients with extensive
                  dental damage or other issues may benefit functionally from a
                  complete mouth reconstruction. Additionally, reconstruction
                  can help with long-term oral hygiene.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Which is the best type of full mouth reconstruction?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. There is no best type of full mouth reconstruction. Every
                  patient’s situation and needs are different. The best
                  treatment process for one patient will not be the best for
                  another. We will talk about all a patient’s options during
                  their consultation.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Are X-rays a part of full mouth reconstructions?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. X-rays are an important part of many dental treatments,
                  including full mouth reconstructions. They allow us to
                  identify and diagnose issues so we can provide the best
                  treatment options. Today’s X-ray technology is safe and
                  advanced, so patients do not have to worry about getting them
                  done.
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
