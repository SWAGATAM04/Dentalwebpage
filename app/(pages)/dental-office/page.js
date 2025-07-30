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
          <div className="bg-[url(/dental-office.webp)] bg-cover my-10"></div>

          <div className="px-10 py-10 space-y-3">
            <h2 className="text-5xl font-cinzel text-primary">Dental Office</h2>
            <p className="font-cinzel text-primary">Temple, TX</p>
            <p className="font-tinos  text-justify">
              When choosing a dentist, there are many options to consider,
              including the type of practice you want to go to receive services.
              One option is a dental office, a practice owned and run by a
              single provider. A dental office can provide many personalized
              benefits for patients.
            </p>
            <p className="font-tinos  text-justify">
              Revital Dental is a dental office in Temple. Call us at (254)
              207-0708 to see if a dental office is the right fit for you and
              schedule an appointment.
            </p>
          </div>
          <div className="py-10">
            <Form />
          </div>
        </section>

        {/* explanation */}
        <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
          {/* left section */}
          <div className="left-section " id="difference-dental-office-center">
            {/* dark section */}
            <div className="bg-dark p-5 text-white">
              <h2 className="text-2xl font-cinzel mb-3">
                Dental Office vs. Dental Center
              </h2>
              <hr />
              <p className="text-justify font-tinos mt-4">
                Dental offices are run by a single provider offering traditional
                dental services, the conventional model many people are familiar
                with from their childhood. However, dental centers, which have
                multiple practitioners often covering various specialties, are
                becoming a growing trend.
              </p>
              <p className="text-justify font-tinos mt-4">
                One of the appeals of a dental center is the availability of
                several providers at once. However, this can lead to a more
                impersonal dentist-patient relationship. One of the benefits of
                a dental office is knowing who will be providing treatment and
                developing a level of trust and knowledge. Determining the right
                type of dental practice will depend on the patient’s needs and
                other various factors.
              </p>
            </div>

            {/* question and answer section */}
            {/* quote */}
            <div className="relative inline-block mt-10">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Dental offices are run by a single provider offering
                traditional dental services.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>
            {/* Q & A */}
            <div className="mt-10" id="who-benefits-dental-office">
              <h2 className="font-cinzel text-2xl text-primary">
                The Right Patient for a Dental Office
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                When determining where to receive dental care, think about what
                is most important in terms of atmosphere and type of service. A
                single-provider dental office offers a level of personalized
                care that cannot be found elsewhere. Patients who desire a
                warmer relationship with their dentist may benefit from a dental
                office.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Single-provider offices are more likely to get to know their
                patients and their specific oral health needs better. When it is
                time for an appointment, the dentist knows details beyond what
                is included in the patient chart. If quick, impersonal health
                care visits are a turnoff, a dental office may be the right
                option.
              </p>
            </div>

            {/* quote */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “A single-provider dental office offers a level of personalized
                care that cannot be found elsewhere.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>
            {/* Q & A */}
            <div className="mt-10" id="benefits-dental-office">
              <h2 className="font-cinzel text-2xl text-primary">
                Benefits of a Dental Office
              </h2>
              <hr />
              <p className="font-tinos mt-2">
                Dental offices benefit from a smaller staff focused on providing
                patients with a quality experience. Dentists and their patients
                have more freedom in how they interact and more leverage in
                their treatment plans. These patients often trust their dentist
                more and are more open to treatment recommendations.
              </p>
              <p className="font-tinos mt-2">
                Patients are also often given more time in a dental office.
                Longer appointment times provide the dentist a chance to learn
                more about the patient’s oral health, overall health history,
                and fears about treatment. By taking the time to know their
                patients fully, a dental office can avoid falling victim to a
                "one size fits all" approach. Sometimes a treatment can be less
                aggressive or avoided altogether due to the significant
                advantage of knowing a patient’s long-term oral health history.
              </p>
              <p className="font-tinos mt-2">
                A dental office can make sure a patient’s preferences in
                communication, education, and specialized care are all taken
                into consideration.
              </p>

              {/* quotes */}
              <div className="relative inline-block mt-10 w-full">
                <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                  “A dental office can make sure a patient’s preferences in
                  communication, education, and specialized care are all taken
                  into consideration.”
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

              <div className="mt-10" id="education-requirements-dental-office">
                <h2 className="font-cinzel text-2xl text-primary">
                  Education Requirements
                </h2>
                <hr />
                <p className="font-tinos mt-2 text-justify">
                  A dental office is owned and operated by someone who attended
                  four years of dental school after college and is a licensed
                  Doctor of Dental Surgery or a Doctor of Dental Medicine. This
                  person is responsible for the diagnosis of dental disease and
                  treatment planning for the patient. Individual states also
                  have licensing requirements, which include two exams covering
                  written and clinical components.
                </p>
                <p className="font-tinos mt-2 text-justify">
                  Many dentists who manage their own offices also take business
                  courses. The American Dental Association even offers an
                  executive program in dental practice management. Patients who
                  receive services at a dental office can be assured that their
                  provider has the credentials to provide comprehensive
                  treatment.
                </p>
              </div>

              {/* quotes */}
              <div className="relative inline-block mt-10 w-full">
                <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                  “A dental office is owned and operated by someone who has
                  attended four years of dental school after college and is a
                  licensed Doctor of Dental Surgery or a Doctor of Dental
                  Medicine.”
                </h2>
                <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
              </div>

            

              <div className="mt-10">
                <h2 className="font-cinzel text-2xl text-primary">
                  The Dental Office Team
                </h2>
                <hr />
                <p className="font-tinos mt-2 text-justify">
                  There can be{" "}
                  <span>
                    {" "}
                    <Link href="https://www.dentalcare.com/en-us">
                      several types of dental professionals
                    </Link>
                  </span>{" "}
                  working in a given dental office, including the dentist, the
                  dental hygienist (responsible for preventative treatment such
                  as professional cleaning), and the dental assistant (helps the
                  dentist during specific procedures)
                </p>
                <p className="font-tinos mt-2 text-justify">
                  Other members of the office staff include the receptionist and
                  office manager who help the practice run smoothly. These staff
                  members assist with check-in, appointment scheduling, billing
                  and other necessary paperwork.
                </p>
              </div>
              <div className="relative inline-block mt-10 w-full">
                <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                  “In a dental office there are typically several types of
                  dental professionals.”
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
