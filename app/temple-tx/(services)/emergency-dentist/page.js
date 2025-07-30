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
        <div className="bg-[url(/services/emergency-dentist.webp)] bg-cover my-20"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Emergency Dentist
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            While patients can avoid many oral problems with preventative care
            and regular visits to the dentist, emergency dental treatment is
            occasionally necessary. Dentists may administer this type of care
            during or outside of regular office hours to help patients with
            various oral problems, such as infections or missing teeth.
            Emergency dental treatment is care administered to relieve mouth
            pain without prior scheduling.
          </p>
          <p className="font-tinos  text-justify">
            Emergency dental treatment is available at Revital Dental in Temple
            and the surrounding area. We use this type of treatment to care for
            many common mouth problems to improve patients' oral health. Proper
            care and treatment are essential for helping patients recuperate
            from a dental emergency.
          </p>
          <p className="font-tinos  text-justify">
            If you are experiencing severe mouth pain and need immediate medical
            treatment, call us at (254) 207-0708 to make an appointment and have
            your oral health restored.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="emergency-difference">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              How Emergency Dentistry Works
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Most dental practices offer routine checkups and cleanings with
              appointments. For most minor problems, patients can call ahead to
              schedule an appointment within a few days to resolve the issue.
              Emergency dentistry treats patients dealing with significant
              dental trauma who need immediate care.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Emergency dentistry treats patients dealing with significant
              dental trauma who need immediate care.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="when-to-seek">
            <h2 className="font-cinzel text-2xl text-primary">
              When To Visit an Emergency Dentist
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Not all oral problems require emergency dental care, so patients
              must examine their situation before making an appointment. Most
              minor issues can wait a few days for a scheduled appointment.
              However, there are several reasons to seek emergency dental care:
            </p>
            <ol className="font-tinos text-justify list-disc pl-4 mt-2">
              <li>
                <span className="font-bold">Restorative emergencies: </span>{" "}
                Accidents can occur at any time, and in the event of a missing
                or chipped tooth, it is best to seek immediate care. Restorative
                emergencies require dental care to preserve teeth, so they
                remain functional. Dentists can then replace teeth to restore
                the patient’s smile.
              </li>
              <li>
                <span className="font-bold">Severe gum pain:</span> According to
                WebMD, patients should visit the dentist if minor tooth, jaw, or
                gum pain lasts more than two days. However, those who are in
                extreme pain should visit the dentist immediately. Pain that
                persists despite taking over-the-counter medications, such as
                Aleve®, Tylenol®, or Advil®, could indicate a serious infection
                or gum disease.
              </li>
              <li>
                <span className="font-bold">Tooth abscess: </span> Tooth
                abscesses are caused by pockets of pus that develop underneath
                teeth. In addition to being extremely painful, a tooth abscess
                can lead to a life-threatening infection if left untreated.
                Seeking immediate care allows dentists to drain the pus that
                causes the pain before the problem becomes more severe.
              </li>
              <li>
                <span className="font-bold">Lost fillings:</span> When patients
                lose cavity fillings or crowns, the opening is susceptible to
                infection. Replacing lost crowns and fillings eliminates pain
                and reduces the chance of infection setting in. Waiting to
                receive this treatment could elevate patients’ pain.
              </li>
            </ol>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “…there are several reasons to seek emergency dental care.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="why-seek">
            <h2 className="font-cinzel text-2xl text-primary">
              Benefits of Emergency Dental Care
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              Emergency dental treatment helps relieve mouth pain quickly and
              effectively. Dental trauma can occur from an accident or an
              injury. Seeking immediate care when a problem occurs prevents it
              from becoming a more extensive issue requiring harsher treatments.
              By taking control of dental emergencies and visiting the dentist
              immediately, patients can drastically improve their oral health.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Seeking immediate care when a problem occurs prevents it from
                becoming a more extensive issue requiring harsher treatments.”
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

            <div className="mt-10" id="types-of-treatment">
              <h2 className="font-cinzel text-2xl text-primary">
                Treatments for Dental Emergencies
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Since there are many types of dental emergencies, treatment
                options vary. The dentist will first examine the problem to
                determine the best course of treatment. After diagnosing the
                issue, the dentist can either treat the infection, remove the
                infected tooth, or replace missing tooth fragments. The dentist
                may also prescribe pain medication or antibiotics to aid in
                recovery.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Since there are many types of dental emergencies, treatment
                options vary.”
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
                  href="#what-makes-different"
                >
                  Q.{" "}
                  <span className="underline">
                    What makes emergency dentistry different?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#when-to-seek"
                >
                  Q.{" "}
                  <span className="underline">
                    When should I seek emergency dental care?
                  </span>
                </a>
                <a className="text-justify font-tinos mt-3" href="#why-seek">
                  Q.{" "}
                  <span className="underline">
                    Why should I seek emergency dental care?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#types-of-treatment"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the different types of dental emergency treatments?
                  </span>
                </a>
                <a className="text-justify font-tinos mt-3" href="#what-to-do">
                  Q.{" "}
                  <span className="underline">
                    What should I do while waiting to get to the emergency
                    dentist?
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
                  href="full-mouth-reconstruction#candidate-for-reconstruction"
                >
                  Q.{" "}
                  <span className="underline">
                    Who is a good candidate for full mouth reconstruction?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="full-mouth-reconstruction#why-need-reconstruction"
                >
                  Q.{" "}
                  <span className="underline">
                    Why would someone want or need a complete mouth
                    reconstruction?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="full-mouth-reconstruction#types-of-reconstruction"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the different full mouth reconstruction treatments?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="what-to-do">
              <h2 className="font-cinzel text-2xl text-primary">
                What To Do While Waiting For Emergency Dental Treatment
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                If a patient is suffering from any kind of dental trauma, the
                first thing to do is contact the dentist for instructions.
                Treatment options vary depending upon the type of problem. For a
                lost filling or crown, patients can use a small piece of
                sugarless gum to cover the opening temporarily. Mouth pain can
                sometimes be alleviated with over-the-counter medications, while
                extensive dental trauma may require patients to pack their
                mouths with gauze.
              </p>
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “If a patient is suffering from any kind of dental trauma, the
                first thing to do is contact the dentist for instructions.”
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
                    Does emergency dental care hurt?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. While many emergency dental treatments are uncomfortable,
                  dentists will try to keep patients comfortable as possible.
                  More pain may occur during the recovery period. The dentist
                  can provide pain medication to keep patients comfortable
                  during the recovery process.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Is emergency dental care preventable?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. According to the Texas A&M University Health Science
                  Center, most dental emergencies are preventable with proper
                  preventative care. If patients neglect regular oral care,
                  minor issues can quickly escalate into major problems that
                  require extensive intervention. However, unpreventable
                  accidents do happen occasionally.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    How can a displaced tooth be preserved during a dental
                    emergency?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The American Academy of Endodontists states that a
                  dislodged tooth can be preserved and restored with proper
                  medical care. After locating the fragment or whole tooth, the
                  patient should place it in a glass of milk or warm saltwater.
                  This preserves the tooth until the dentist can replace it.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    How is a restorative emergency different from another dental
                    emergency?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Restorative emergencies are often cosmetic and functional
                  in nature, while other dental emergencies typically result in
                  more pain. A chipped tooth may be uncomfortable, but depending
                  upon its placement, cosmetic appearance or functionality may
                  be a bigger concern than pain. Because of this, the dentist
                  may use dental cement or glue to fasten the fragment back in
                  place before restoring its appearance.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    What qualifies as a dental emergency?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Any type of dental trauma can require emergency dental
                  care. Whether it is caused by an infected tooth, diseased
                  gums, or an accident, a dental emergency needs quick
                  intervention to relieve pain. Therefore, any oral health
                  problem that demands immediate attention qualifies as a dental
                  emergency.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    How does emergency dental treatment benefit oral health?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Ignoring dental problems can lead to deteriorating oral
                  health. While preventative care is the first line of defense
                  against major dental problems, emergency dental procedures may
                  eliminate the issue once it occurs. By making patients aware
                  of the contributing factors that led to the problem, emergency
                  dental treatment may prevent the issue from recurring and lead
                  to better overall health.
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
                {[
                  {
                    term: "Abscess",
                    definition:
                      "A dental abscess is a pocket of pus that forms in the tooth root from a bacterial infection.",
                  },
                  {
                    term: "Dentist",
                    definition:
                      "A dentist, also known as a dental surgeon, is a doctor who specializes in the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.",
                  },
                  {
                    term: "Dental Filling",
                    definition:
                      "A dental filling involves restoring the structure of the tooth by using metal, alloy, porcelain, or plastic to fill the tooth.",
                  },
                  {
                    term: "Facial Cellulitis",
                    definition:
                      "Facial cellulitis is a condition in which an infection from an abscess or plaque in the teeth causes pain and spreads throughout the face.",
                  },
                  {
                    term: "Impacted Wisdom Tooth",
                    definition:
                      "An impacted wisdom tooth is a tooth that does not erupt from the gums properly and can cause pain and become infected without professional extraction.",
                  },
                  {
                    term: "Irreversible Pulpitis",
                    definition:
                      "Irreversible pulpitis is when the pain in the tooth occurs spontaneously or continues after removing the hot/cold substance. Normal pulpitis stops hurting once the stimulus is removed.",
                  },
                  {
                    term: "Lateral Luxation",
                    definition:
                      "Lateral luxation is the displacement of a tooth that moves it in the wrong direction while it is still attached to the gums.",
                  },
                  {
                    term: "Pericoronitis",
                    definition:
                      "Pericoronitis is the inflammation of soft tissues surrounding a tooth that does not fully erupt from the gums and causes pain.",
                  },
                  {
                    term: "Tooth Avulsion",
                    definition:
                      "Tooth avulsion is when the tooth completely displaces from the socket due to an accident or other health issues. The tooth can be replanted if immediate care is provided.",
                  },
                  {
                    term: "Tooth Fracture",
                    definition:
                      "A tooth fracture can result from multiple sources including an accidental elbow to the face, biting on something hard, or falling face first.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="mt-5 font-tinos">
                    <h2 className="italic text-xl">{item.term}</h2>
                    <p>{item.definition}</p>
                    <hr className="mt-4" />
                  </div>
                ))}
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
