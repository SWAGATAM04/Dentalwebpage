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
        <div className="bg-[url(/educations/chip-my-tooth.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            What Should I Do If I Chip My Tooth
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            There are many reasons why a chipped tooth can occur, from an
            accident to merely chewing. If a chipped tooth occurs, professional
            dental care is necessary to receive proper evaluation and treatment.
            It is essential to seek prompt treatment to prevent the problem from
            worsening.
          </p>
          <p className="font-tinos  text-justify">
            If you have a chipped tooth, do not hesitate to seek treatment.
            Revital Dental in Temple and the surrounding area is here to help.
            Call us today at (254) 207-0708 to schedule an appointment or learn
            more about our services.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="chipped-tooth-common">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Chipped Teeth Are Common
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              A chipped tooth is a common dental injury. According to the
              American Association of Endodontists, chipped teeth account for a
              majority of dental injuries. Although a chipped tooth can induce
              panic and anxiety, it is typically a mild problem that we can fix
              through various methods.
            </p>
            <p className="text-justify font-tinos mt-4">
              People should remain calm so they can take the proper steps to fix
              this problem. The best thing for patients to do after chipping a
              tooth is to focus on their breath and slow it down. While not all
              chipped teeth will require treatment, patients should visit our
              dentist to ensure that they receive the necessary treatment to
              restore and protect their teeth.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “According to the American Association of Endodontists, chipped
              teeth account for a majority of dental injuries.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="after-chipping-tooth">
            <h2 className="font-cinzel text-2xl text-primary">
              What To Do About a Chipped Tooth
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              People suffering from a chipped tooth should schedule a dental
              appointment since professional treatment is the only way to fix it
              permanently. It is important to immediately take certain steps
              after chipping a tooth to address pain and protect the tooth and
              inside of the mouth from further injury. According to the American
              Dental Association, people should rinse their mouth with warm
              water right away to clean it.
            </p>

            <p className="font-tinos mt-2 text-justify">
              After rinsing, they should apply pressure to stop any bleeding and
              apply a cold compress to reduce swelling. People should be sure to
              save any pieces of the chipped tooth and wrap them in wet gauze to
              bring to our dentist. While waiting to see our dentist, people can
              use over-the-counter pain medication to manage pain and
              discomfort.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “It is important to immediately take certain steps after chipping
              a tooth to address pain and protect the tooth and inside of the
              mouth from further injury.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="child-vs-adult-chip">
            <h2 className="font-cinzel text-2xl text-primary">
              Chipped Tooth in a Child vs. Adult
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Although chipping a tooth is common for both adults and children,
              there are different concerns for each. Chipped primary teeth are
              especially common in children. We recommend treatments to repair
              the damaged tooth based on the patient’s age and how badly the
              tooth is injured.
            </p>

            <p className="font-tinos mt-2">
              When treating chipped primary teeth in children, the main concern
              is to prevent damage to the underlying permanent tooth. Unlike an
              adult, a child’s permanent teeth are not fully developed and will
              require immediate attention if a chip occurs. Regardless of
              whether the chipped tooth occurs in a child or adult, it is
              important to see our dentist as quickly as possible for treatment.
            </p>
            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “When treating chipped primary teeth in children, the main
                concern is to prevent damage to the underlying permanent tooth.”
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

            <div className="mt-10" id="repair-methods-chip">
              <h2 className="font-cinzel text-2xl text-primary">
                Repairing a Chipped Tooth
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                There are various methods to repair a chipped tooth, depending
                on the state of the patient’s tooth and the type of injury. In
                some cases, our dentist can reattach the broken piece of a
                tooth. If the damage is minimal, our dentist may only need to
                use cosmetic contouring to polish the tooth’s surface or smooth
                a jagged edge. Other options include veneers to cover a chip or
                dental bonding to fill in missing tooth structure.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Chips that go below the tooth’s surface may require more
                extensive repair, such as a root canal or extraction. A root
                canal is necessary when the damage enters the pulp and infects
                it. Extraction is the last resort when a root canal is not
                enough to save a tooth. Patients should contact us to find out
                what repair options are available.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “There are various methods to repair a chipped tooth, depending
                on the state of the patient’s tooth and the type of injury.”
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
                  href="#chipped-tooth-common"
                >
                  Q.{" "}
                  <span className="underline">
                    How common is a chipped tooth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#after-chipping-tooth"
                >
                  Q.{" "}
                  <span className="underline">
                    What steps should happen after chipping a tooth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#child-vs-adult-chip"
                >
                  Q.{" "}
                  <span className="underline">
                    How is a child’s chipped tooth different from an adult’s?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#repair-methods-chip"
                >
                  Q.{" "}
                  <span className="underline">
                    What methods are available to repair a chipped tooth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#maintain-treated-tooth"
                >
                  Q.{" "}
                  <span className="underline">
                    How should a treated chipped tooth be maintained?
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
                  href="what-do-i-do-if-i-damage-my-dentures/#how-dentures-damaged"
                >
                  Q.{" "}
                  <span className="underline">
                    How do dentures get damaged?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="what-do-i-do-if-i-damage-my-dentures/#care-for-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I care for my dentures?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="what-do-i-do-if-i-damage-my-dentures/#damaged-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    What should I do if I have damaged my dentures?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="maintain-treated-tooth">
              <h2 className="font-cinzel text-2xl text-primary">
                Maintaining a Treated Chipped Tooth
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                After treatment for a chipped tooth, patients must maintain a
                regular oral care routine. This maintenance includes brushing
                twice a day and flossing at least once. Patients should also
                follow all after-care instructions to take care of the repaired
                tooth and protect it from further damage.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Other maintenance tips include not biting down on the treated
                tooth and refining from chewing on hard foods and objects.
                Following the repair, patients should also attend all follow-up
                appointments and schedule regular dental check-ups. These
                appointments will allow our dentist to check the repair and
                protect patients’ overall oral health to prevent a chip from
                happening again.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “After treatment for a chipped tooth, patients must maintain a
                regular oral care routine.”
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
                  <h2 className="italic text-xl">Abscess</h2>
                  <p>
                    A dental abscess is a pocket of pus that forms in the tooth
                    root from a bacterial infection.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Contouring</h2>
                  <p>
                    A treatment that involves removing a small amount of tooth
                    enamel with a drill to sculpt a more aesthetic shape and
                    create a better fit for the surrounding teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Facial Cellulitis</h2>
                  <p>
                    Facial cellulitis is a condition in which an infection from
                    an abscess or plaque in the teeth causes pain and spreads
                    throughout the face.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Impacted Wisdom Tooth</h2>
                  <p>
                    An impacted wisdom tooth is a tooth that does not erupt from
                    the gums properly and can cause pain and become infected
                    without professional extraction.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Irreversible Pulpitis</h2>
                  <p>
                    Irreversible pulpitis is when pain in the tooth occurs
                    spontaneously or continues after removing a hot/cold
                    substance. Normal pulpitis stops hurting once the irritant
                    is removed.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Lateral Luxation</h2>
                  <p>
                    Lateral luxation is the displacement of a tooth in the wrong
                    direction while it is still attached to the gums.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Pericoronitis</h2>
                  <p>
                    Pericoronitis is the inflammation of soft tissues
                    surrounding a tooth that has not fully erupted from the
                    gums, causing pain.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Root Canal</h2>
                  <p>
                    The chamber within the root of the tooth that contains the
                    pulp.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Avulsion</h2>
                  <p>
                    Tooth avulsion occurs when a tooth completely displaces from
                    the socket due to an accident or health condition. It can be
                    replanted with immediate dental care.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Fracture</h2>
                  <p>
                    A tooth fracture can result from trauma such as sports
                    injuries, biting hard objects, or falls. Treatment depends
                    on the severity of the crack.
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
