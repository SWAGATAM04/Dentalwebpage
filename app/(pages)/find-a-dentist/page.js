import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { FaYelp } from "react-icons/fa";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Book from "@/components/Book";

import Footer from "@/components/Footer";
import ScrollAppointmentBanner from "@/components/ScrollAppointmentBanner";
const cinzel = Cinzel({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  display: "swap",
});

const Services = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* intro section */}
        <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[125px]  border-y-[10px] border-dark mx-2">
          <div className="bg-[url(/find-a-dentist.webp)] bg-cover my-10"></div>

          <div className="px-10 py-10 space-y-3">
            <h2 className="text-5xl font-cinzel text-primary">
              Find a Dentist in
            </h2>
            <p className="font-cinzel text-primary">Temple, TX</p>
            <p className="font-tinos  text-justify">
              Finding a new dentist can be a challenge. Before making a
              selection, patients should research each provider's qualifications
              and services. It is crucial to find a dentist who is the right fit
              for your needs to protect your oral health for years to come.
            </p>
            <p className="font-tinos  text-justify">
              Dental care is available at Revital Dental in Temple and the
              surrounding area. Our team offers various dentistry services to
              help patients achieve and maintain a healthy mouth. Call us at
              (254) 207-0708 to learn more about our services or schedule an
              appointment today.
            </p>
          </div>
          <div className="py-10">
            <Form />
          </div>
        </section>

        {/* explanation */}
        <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
          {/* left section */}
          <div className="left-section " id="type-of-dentist">
            {/* dark section */}
            <div className="bg-dark p-5 text-white">
              <h2 className="text-2xl font-cinzel mb-3">
                Understand What To Search For
              </h2>
              <hr />
              <p className="text-justify font-tinos mt-4">
                When searching for a new dentist, people should consider what
                dental services they need. People should determine which branch
                of dentistry they require treatment from when looking for a
                dentist. While general dentists perform routine checkups and
                cleanings, not every practice offers specialty treatments.
              </p>
              <p className="text-justify font-tinos mt-4">
                There are many online resources that people can use as well.
                People can learn more information about the specifications of
                various types of dental work and locate providers in the nearby
                area. Internet research can confirm that a dental provider has
                the right qualifications and degrees. Do not hesitate to ask
                prospective dentists about their qualifications and experience.
              </p>
            </div>

            {/* question and answer section */}
            {/* quote */}
            <div className="relative inline-block mt-10">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “All dentists perform routine checkups and cleanings, but not
                every practice offers specialty treatments.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>
            {/* Q & A */}
            <div className="mt-10" id="general-dentist">
              <h2 className="font-cinzel text-2xl text-primary">
                What to Look for In a General Dentist
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                A general dentist is a partner in a patient’s oral health. They
                track each patient’s family history and ensure they receive
                regular checkups and professional cleanings. A general dentist
                can also help patients maintain regular dental care, educate
                them on daily hygiene, and provide common dental services
                in-office. They may also offer some restorative services, such
                as crowns, bridges, or dentures, and some emergency procedures
                and cavity care as needed.
              </p>
              <p className="font-tinos mt-2 text-justify">
                People looking for a general dentist should do their research
                and find a dentist that helps them feel comfortable and in
                control of their oral health. It helps to ask for referrals from
                friends or family and consider each dentist’s credentials and
                qualifications. Scheduling a consultation or calling the dental
                office can also allow people to evaluate the dentist and address
                any questions or concerns.
              </p>
            </div>

            {/* quote */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “A general dentist can also help patients maintain regular
                dental care, educate them on daily hygiene, and provide common
                dental services in-office.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>
            {/* Q & A */}
            <div className="mt-10" id="right-fit-dentist">
              <h2 className="font-cinzel text-2xl text-primary">
                Finding the Right Fit
              </h2>
              <hr />
              <p className="font-tinos mt-2">
                Since dental health is an important aspect of overall health, it
                is crucial to find a dentist who is the right fit. Finding the
                right dentist gives people a comfortable place to receive
                routine check-ups and a safe and trusted place to turn for a
                procedure or dental emergency. Look for a practice that is
                clean, comfortable, and relaxing. The dental team should be
                friendly and reassuring from the moment each patient walks
                through the door. Many patients are nervous about visiting the
                dentist. The right provider understands dental anxiety and knows
                how to combat nervousness.
              </p>
              <p className="font-tinos mt-2">
                People should also consider their preferences and needs when
                looking for the right dentist. Some patients may have a strong
                preference for a male or female dentist. Larger dental practices
                often employ several dentists who may rotate their duties.
                Patients who opt for a larger practice may discover that they
                can not choose their dentist. Patients who prefer working with
                one dentist may choose a solo practice instead. A smaller dental
                team can ensure that a patient sees the same provider during
                each visit.
              </p>

              {/* quotes */}
              <div className="relative inline-block mt-10 w-full">
                <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                  “Since dental health is an important aspect of overall health,
                  it is crucial to find a dentist who is the right fit.”
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

              <div className="mt-10" id="find-dentist-tools">
                <h2 className="font-cinzel text-2xl text-primary">
                  Helpful Resources
                </h2>
                <hr />
                <p className="font-tinos mt-2 text-justify">
                  Insurance companies can provide a list of qualified dental
                  providers. Keep in mind that different practices have varying
                  payment policies. Patients who plan to use dental insurance
                  must confirm that their chosen provider accepts their
                  insurance plan. Uninsured patients may want to research
                  information about cash payments or payment plans. It is
                  beneficial to ask about a provider's policies before seeking
                  treatment.
                </p>
                <p className="font-tinos mt-2 text-justify">
                  Patients can use the American Dental Association or state
                  licensing board as resources to check a dentist’s
                  qualifications. These organizations reveal information about a
                  provider's license and professional history. For patients
                  struggling to find a provider, the American Dental Association
                  (ADA) can provide information about dental providers based on
                  location and specialty. Dentists that are members of the
                  American Dental Association make five pledges in the{" "}
                  <span>
                    <Link
                      className=" border-b-2"
                      href="https://www.mouthhealthy.org/all-topics-a-z/ethics-and-dentistry/"
                    >
                      ADA Principles of Ethics and Code of Professional Conduct.
                    </Link>
                  </span>
                </p>
              </div>

              {/* quotes */}
              <div className="relative inline-block mt-10 w-full">
                <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                  “Patients can use the American Dental Association or state
                  licensing board as resources to check a dentist’s
                  qualifications.”
                </h2>
                <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
              </div>

              <div className="mt-10" id="patient-review-sites">
                <h2 className="font-cinzel text-2xl text-primary">
                  Weighing Patient Reviews
                </h2>
                <hr />
                <p className="font-tinos mt-2 text-justify">
                  A majority of internet users use online reviews when choosing
                  to work with local businesses. Reviews on sites such as Yelp
                  and Google Reviews can provide helpful insight into whether a
                  dentist is the right fit. These sites collect feedback from
                  current or former patients. While this information can be
                  useful, it may not always be accurate.
                </p>
                <p className="font-tinos mt-2 text-justify">
                  This information is not enough when looking for a new dentist.
                  It is beneficial to look at reviews on multiple websites.
                  While online reviews can be a great starting point when
                  searching for a dentist, the information is not comprehensive.
                  People should make sure to conduct additional research beyond
                  just reading online reviews.
                </p>
              </div>
              <div className="relative inline-block mt-10 w-full">
                <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                  “Reviews on sites such as Yelp and Google Reviews can provide
                  helpful insight into whether a dentist is the right fit.”
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
                  <h2
                    id="type-of-dentist"
                    className="text-justify text-primary font-tinos mt-3"
                  >
                    Q. What kind of dentist do I need?
                  </h2>
                  <p className="font-tinos md:ps-4 mt-2">
                    A. Patients should visit a general dentist about twice a
                    year. General dentists can provide routine care like
                    checkups and cleanings. Depending on the patient’s needs,
                    they may also need a provider who can deliver specialized
                    care. Our team can help determine what additional services a
                    patient may require during a check-up.
                  </p>

                  <h2
                    id="find-qualified-dentist"
                    className="text-justify text-primary font-tinos mt-3"
                  >
                    Q. How can I find a qualified dentist?
                  </h2>
                  <p className="font-tinos md:ps-4 mt-2">
                    A. Many patients choose their new dentist over the Internet.
                    Provider websites can provide a wealth of information, and
                    the American Dental Association search tool can help, too.
                    Insurance companies can also recommend in-network dentists.
                  </p>

                  <h2
                    id="payment-options"
                    className="text-justify text-primary font-tinos mt-3"
                  >
                    Q. Do dentists accept cash payments or payment plans?
                  </h2>
                  <p className="font-tinos md:ps-4 mt-2">
                    A. Each dental provider has different payment policies.
                    Offices offer different options, such as cash payments or
                    installments. People should speak with dental providers in
                    advance.
                  </p>

                  <h2
                    id="importance-checkups"
                    className="text-justify text-primary font-tinos mt-3"
                  >
                    Q. Why are regular dental check-ups important?
                  </h2>
                  <p className="font-tinos md:ps-4 mt-2">
                    A. People must have regular dental appointments, not only
                    when there is a problem. Many dental problems do not have
                    symptoms until the advanced stages of the disease process.
                    Regular dental check-ups can ensure that patients are
                    maintaining proper oral hygiene and prevent larger problems
                    from occurring.
                  </p>

                  <h2
                    id="six-months-checkup"
                    className="text-justify text-primary font-tinos mt-3"
                  >
                    Q. Why should I see a dentist every six months?
                  </h2>
                  <p className="font-tinos md:ps-4 mt-2">
                    A. Making an appointment every six months prevents many
                    oral-related problems. A visit every six months means there
                    is a better chance of catching any signs of gum disease
                    while it is still reversible. Every patient is different;
                    our team can help determine how often a patient should
                    receive a routine check-up.
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
                  and allowing the symptoms to get worse, we can provide you
                  with treatment options.
                </p>
                <div className="flex justify-evenly content-center gap-2 mt-5">
                  <div className="flex justify-center flex-col items-center">
                    <img
                      src="/dentist-map.webp"
                      alt=""
                      className="w-[200px] h-[200px]"
                    />
                    <a href="" className="mt-2 underline text-center">
                      Let Us Help – Click for Directions to Revital Dental
                    </a>
                  </div>
                  <div className="flex justify-center flex-col items-center">
                    <img
                      src="/dental-checkup-qrcode.png"
                      alt=""
                      className="w-[200px] h-[200px]"
                    />
                    <p className="mt-2 text-center">
                      Scan here to view this page, Dental Checkup, on mobile
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly content-center items-center gap-2 mt-5">
                  <img
                    src="/find-best-dentist-nav.webp"
                    alt=""
                    className="w-[200px] h-[200px]"
                  />
                  <img
                    src="/general-dentistry-services-nav.webp"
                    alt=""
                    className="w-[200px] h-[200px]"
                  />
                  <img
                    src="/dental-cleaning-and-examinations-nav.webp"
                    alt=""
                    className="w-[200px] h-[200px]"
                  />
                </div>
              </div>

              {/* two call */}
              <div className="bg-dark p-5 mt-10 text-white">
                <h2 className="text-4xl font-cinzel mb-3">
                  Dental Terminology
                </h2>
                <hr />
                <div className="space-y-10 ">
                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                    <p>
                      Cosmetic dentistry is generally used to refer to any
                      dental work that improves the appearance (though not
                      necessarily the function) of a person’s teeth, gums,
                      and/or bite.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Decay</h2>
                    <p>
                      Tooth decay occurs when the enamel of the tooth begins to
                      deteriorate due to the erosion caused by plaque and tartar
                      on the teeth.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Dental Caries</h2>
                    <p>
                      Dental caries, commonly known as cavities, occur when
                      proper oral hygiene is not maintained, allowing plaque to
                      form and create tiny holes in the teeth.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Dental Checkup</h2>
                    <p>
                      A dental checkup is an appointment where the dentist
                      cleans your teeth, identifies any signs of infection, and
                      removes the infection at least once every six months.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Dental Filling</h2>
                    <p>
                      A dental filling is used to restore the structure of a
                      tooth by filling it with materials like metal, alloy,
                      porcelain, or plastic to restore its function and
                      appearance.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Dental Prophylaxis</h2>
                    <p>
                      Dental prophylaxis is a professional cleaning procedure
                      that removes plaque, tartar, and stains from the teeth to
                      maintain oral health.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Dental Sealants</h2>
                    <p>
                      Dental sealants are resinous materials applied to the
                      chewing surfaces of the posterior teeth to prevent
                      cavities by shielding them from plaque.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Dentist</h2>
                    <p>
                      A dentist, also known as a dental surgeon, specializes in
                      diagnosing, preventing, and treating diseases and
                      conditions of the oral cavity.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Gingivitis</h2>
                    <p>
                      Gingivitis is the inflammation of gum tissue caused by
                      plaque buildup and poor oral hygiene, which can lead to
                      infection if untreated.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Preventive Dentistry</h2>
                    <p>
                      Preventive dentistry focuses on maintaining oral health
                      through measures that prevent plaque buildup, tartar
                      formation, and infections.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Tartar</h2>
                    <p>
                      Tartar forms when plaque hardens and becomes difficult to
                      remove. It requires professional treatment for removal.
                    </p>
                    <hr className="mt-4" />
                  </div>

                  <div className="mt-5 font-tinos">
                    <h2 className="italic text-xl">Tooth Enamel</h2>
                    <p>
                      Tooth enamel is the visible outer surface of the tooth
                      that serves as a protective barrier to the underlying
                      dentin and dental pulp.
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
                  checkup or for help with your dental questions, please call
                  our team at{" "}
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
                        <Link href="#" className="hover:underline">
                          American Dental Association (ADA). Glossary of Dental
                          Clinical Terms. 2022
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="#" className="hover:underline">
                          American Academy of Cosmetic Dentistry® (AACD). Home
                          Page. 2022
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="#" className="hover:underline">
                          WebMD. WebMD’s Oral Care Guide. 2022
                        </Link>
                      </li>
                    </ul>

                    <h2 className="text-4xl font-cinzel mb-3 mt-10">
                      About our business and website security
                    </h2>
                    <hr />
                    <ul className="font-tinos mt-3 list-disc px-3">
                      <li className="mt-2">
                        <Link href="#" className="hover:underline">
                          Revital Dental was established in 2022.
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="#" className="hover:underline">
                          We accept the following payment methods: American
                          Express, Cash, Check, Discover, MasterCard, and Visa
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="#" className="hover:underline">
                          We serve patients from the following counties: Bell
                          County, McLennan County and Coryell County
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="#" className="hover:underline">
                          Norton Safe Web. View Details
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="#" className="hover:underline">
                          Trend Micro Site Safety Center. View Details
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* QR code on right */}
                  <div className="mt-12 flex flex-col justify-center items-center md:w-[250px]">
                    <img
                      src="/map-directions-qrcode.webp"
                      className="w-[150px] h-[150px]"
                      alt="Revital Dental Directions QR"
                    />
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
                  <Link
                    href="/temple-tx/teethxpress"
                    className="hover:underline"
                  >
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
      </div>
      <div className="mt-5">
        <Book />
      </div>
      <Footer />
      <ScrollAppointmentBanner />
    </>
  );
};

export default Services;
