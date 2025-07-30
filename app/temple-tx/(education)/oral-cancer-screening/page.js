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
        <div className="bg-[url(/educations/oral-cancer-screening.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Oral Cancer Screening
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Oral cancer screenings can identify the signs of disease before it
            has spread. This may be beneficial to those in high-risk groups.
            Regular oral cancer screenings can give patients the advantage of
            treating cancer in the early stages when there is a higher chance
            for remission.
          </p>
          <p className="font-tinos  text-justify">
            Oral cancer screenings are available at Revital Dental in Temple and
            the surrounding area. Early detection may make cancer treatment more
            effective. Call us at (254) 207-0708 to schedule an appointment
            today.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="oral-cancer-screening-frequency">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Why Have Regular Oral Cancer Screenings?
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Regular oral cancer screenings can be as important as regular
              dental checkups. Fortunately, patients can ask to get both
              procedures done at the same time. As per the National Cancer
              Institute, oral cancer symptoms tend not to appear until the
              disease has spread. Early detection may make oral cancer easier to
              treat when the chances for remission are higher.
            </p>
            <p className="text-justify font-tinos mt-4">
              According to WebMD, everyone should have a dental checkup at least
              once a year. However, experts have yet to reach a consensus on how
              often patients should go in for an oral cancer screening. A
              dentist may be able to conduct a comprehensive exam to determine
              how frequently a patient should have screenings.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Early detection may make oral cancer easier to treat when the
              chances for remission are higher.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="oral-cancer-risk-factors">
            <h2 className="font-cinzel text-2xl text-primary">
              Groups at High Risk for Oral Cancer
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Certain groups may benefit from regular oral cancer screenings
              more than others. Common risk factors include but are not limited
              to:
            </p>

            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>A history of oral cancer</li>
              <li>Certain types of human papillomavirus (HPV)</li>
              <li>Regular consumption of a lot of alcohol</li>
              <li>Excessive amounts of time spent in the sun</li>
              <li>Tobacco use, in any form</li>
            </ul>
            <p className="font-tinos mt-2 text-justify">
              Patients may find it beneficial to consult a professional about
              their medical history to better determine their risk for oral
              cancer.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Some groups may benefit from regular oral cancer screenings more
              than others.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="oral-cancer-screening-limits">
            <h2 className="font-cinzel text-2xl text-primary">
              Limitations of Oral Cancer Screenings
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Although regular oral cancer screenings are integral to
              maintaining good health, Mayo Clinic points out that it may be
              difficult to detect abnormal cells through a simple visual exam.
              Thus, there is always a possibility that a small sign of cancer or
              precancerous lesion could go undetected.
            </p>

            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>The back of the throat</li>
              <li>The gums</li>
              <li>The insides of the cheeks</li>
              <li>The outside and the inside of the lips</li>
              <li>The roof of the mouth</li>
              <li>The tongue</li>
            </ul>
            <p className="font-tinos mt-2">
              Patients with dentures must remove the devices to allow Revital
              Dental to check the tissue underneath, along with the area
              underneath the jaw.
            </p>
            <p className="font-tinos mt-2">
              All in all, the screening should take less than five minutes.
            </p>
            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “There is no special preparation required for an oral cancer
                screening, and patients can typically expect screening to take
                place during a routine dental appointment.”
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

            <div className="mt-10" id="oral-cancer-screening-expect">
              <h2 className="font-cinzel text-2xl text-primary">
                What to Expect During an Oral Cancer Screening
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Oral cancer screening requires no special preparation, and
                patients can typically expect screening to take place during a
                routine dental appointment. In most cases, a basic oral cancer
                screening will consist of the dentist taking a thorough look at
                all the parts of the patient's mouth, including:
              </p>
              <p className="font-tinos mt-2 text-justify">
                Dental bonding is one of the simplest, quickest, most
                affordable, and least invasive cosmetic dental procedures
                available. It necessitates removing very little enamel and
                generally only requires anesthesia when performed to fill a
                cavity, to reshape the tooth through drilling, or to fix a chip
                near the nerve. Any preparation is minimal. Revital Dental works
                closely with each patient to make sure they know what to expect.
                The entire process takes about 30 to 60 minutes per tooth and
                can be completed in one appointment.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Dental bonding is one of the simplest, quickest, cheapest, and
                least invasive cosmetic dental procedures available.”
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
                  href="#oral-cancer-screening-frequency"
                >
                  Q.{" "}
                  <span className="underline">
                    How frequently should I get an oral cancer screening?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#oral-cancer-risk-factors"
                >
                  Q.{" "}
                  <span className="underline">
                    Am I at high risk for developing oral cancer?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#oral-cancer-screening-limits"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the limits of oral cancer screenings?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#oral-cancer-screening-expect"
                >
                  Q.{" "}
                  <span className="underline">
                    What can I expect during my oral cancer screening?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#oral-cancer-additional-tests"
                >
                  Q.{" "}
                  <span className="underline">
                    Are there any additional tests after oral cancer screenings?
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
                  href="options-for-replacing-missing-teeth/#replace-missing-teeth"
                >
                  Q.{" "}
                  <span className="underline">
                    How can a dentist replace missing teeth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="options-for-replacing-missing-teeth/#durable-option-missing-teeth"
                >
                  Q.{" "}
                  <span className="underline">
                    What is the most durable option for replacing missing teeth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="options-for-replacing-missing-teeth/#age-affect-replacement-options"
                >
                  Q.{" "}
                  <span className="underline">
                    How does age affect your options when it comes to replacing
                    missing teeth?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="oral-cancer-additional-tests">
              <h2 className="font-cinzel text-2xl text-primary">
                Additional Tests After Oral Cancer Screenings
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Depending on the patient's situation, the dentist may perform
                special tests in addition to the basic screening. More in-depth
                oral cancer screenings can involve the patient rinsing their
                mouth with blue dye to make any unusual cells more visible.
                Additionally, the dentist may choose to shine a light in the
                patient's mouth during the exam. This light will "highlight"
                abnormal tissue by making it appear white.
              </p>
              <p className="font-tinos mt-2 text-justify">
                If any of these tests find signs of oral cancer or any possibly
                cancerous lesions, then the patient should undergo a biopsy.
                This procedure consists of removing a sample of cells for
                laboratory testing. The patient may also need to make a
                follow-up appointment to see if the abnormal area has grown or
                changed since detection.
              </p>
            </div>
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Depending on the patient’s situation, the dentist may perform
                special tests in addition to the basic screening.”
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
                  id="clear-aligners-after-braces"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Can I get clear aligners if I have already had traditional
                  braces before?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes. It is common for patients to get clear aligners after
                  not having worn their retainers enough after traditional
                  braces. Clear aligners may help shift your teeth back into
                  place and restore your smile.
                </p>

                <h2
                  id="are-veneers-reversible"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Are veneers reversible?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. No. While veneers are removable, another set of veneers
                  must always replace them. This is because veneers require
                  removing tooth enamel, which cannot grow back.
                </p>

                <h2
                  id="dental-bonding-lifespan"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. How long does dental bonding last?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The answer varies on a case-by-case basis. Dental bonding
                  may last for three to 10 years before needing a touch-up or
                  replacement.
                </p>

                <h2
                  id="composite-filling-duration"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. How long will my composite filling last?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. For most healthy patients, composite fillings will last
                  seven to 10 years. However, they may last longer under certain
                  circumstances.
                </p>

                <h2
                  id="cosmetic-dentistry-teens"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Are teens too young for cosmetic dentistry?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. No. Teens are at an especially vulnerable point in their
                  lives where their self-esteem is at its most fragile. Cosmetic
                  dentistry may help. Revital Dental can determine whether or
                  not any of the above treatments are right for you.
                </p>

                <h2
                  id="oral-cancer-screening-stages"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What are the stages of oral cancer?
                </h2>
                <ul className="list-disc font-tinos md:ps-4 mt-2">
                  <li>
                    Stage 0: Abnormal cells are present but haven’t become
                    cancerous
                  </li>
                  <li>
                    Stage 1: Tumor is &le; 2 cm and hasn’t spread to lymph nodes
                  </li>
                  <li>
                    Stage 2: Tumor is &le; 4 cm with no lymph node involvement
                  </li>
                  <li>
                    Stage 3: Tumor is &gt; 4 cm or has spread to one lymph node
                    (not distant)
                  </li>
                  <li>
                    Stage 4:Tumor may be any size and has spread to distant
                    parts of the body
                  </li>
                </ul>
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
                  <h2 className="italic text-xl">Dental Caries</h2>
                  <p>
                    Dental caries, commonly known as cavities, are areas of
                    decay on the teeth caused by the buildup of plaque and acid
                    that erode the enamel.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Root Canal</h2>
                  <p>
                    A root canal is a dental procedure used to treat infection
                    at the center of a tooth by removing the infected tissue and
                    sealing the area.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Oral Hygiene</h2>
                  <p>
                    Oral hygiene refers to the practice of maintaining clean
                    teeth and gums, which involves regular brushing, flossing,
                    and professional dental cleanings.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Bruxism</h2>
                  <p>
                    Bruxism is the involuntary grinding, gnashing, or clenching
                    of teeth, often occurring during sleep and leading to tooth
                    damage, headaches, and jaw pain.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontitis</h2>
                  <p>
                    Periodontitis is a severe gum infection that damages the
                    soft tissue and bone supporting the teeth, often resulting
                    from untreated gingivitis.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Plaque</h2>
                  <p>
                    Plaque is a sticky, colorless film of bacteria that forms on
                    the teeth and gums, contributing to tooth decay and gum
                    disease if not properly cleaned.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Fluoride Treatment</h2>
                  <p>
                    Fluoride treatment is a dental procedure where fluoride is
                    applied to teeth to help prevent cavities, reduce plaque,
                    and promote enamel remineralization.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Implant</h2>
                  <p>
                    A dental implant is a metal post surgically placed in the
                    jawbone to serve as a replacement for a missing tooth root,
                    providing a strong base for artificial teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Sensitivity</h2>
                  <p>
                    Tooth sensitivity is a condition where the teeth become
                    painful in response to hot, cold, or sweet stimuli due to
                    exposed dentin or gum recession.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Sealants</h2>
                  <p>
                    Dental sealants are thin plastic coatings applied to the
                    chewing surface of back teeth to prevent cavities by sealing
                    out food and plaque.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Gum Recession</h2>
                  <p>
                    Gum recession occurs when the gum tissue pulls away from the
                    teeth, exposing the tooth roots and leading to sensitivity
                    and higher risk of decay.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Extraction</h2>
                  <p>
                    Tooth extraction is the removal of a tooth from its socket
                    in the jaw, often due to decay, infection, or crowding of
                    teeth.
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
