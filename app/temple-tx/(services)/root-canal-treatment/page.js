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
        <div className="bg-[url(/services/root-canal-treatment.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Root Canal Treatment
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            A root canal is a restorative dental procedure that saves millions
            of teeth from inflammation and infection each year. Root canal
            treatment involves removing the damaged pulp and nerves from inside
            the tooth to eliminate bacteria and prevent the infection from
            spreading. If you have an infected tooth, root canal treatment may
            be able to save it.
          </p>
          <p className="font-tinos  text-justify">
            Root canal treatment is available at Revital Dental in Temple and
            the surrounding area. This procedure can relieve dental pain and
            save your tooth. Call us at (254) 207-0708 to learn more about our
            services or schedule an appointment today.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="what-is-root-canal">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Understanding Root Canals
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Below the enamel and dentin, there is pulp at the center of a
              tooth. The pulp contains blood vessels, nerves, and connective
              tissue. When the pulp becomes injured or infected, the patient may
              experience swelling, infection, and pain. Even when outwardly
              apparent symptoms are not present, bacteria within the root canal
              may cause decay and damage to the jawbone. In many cases, a root
              canal may be necessary to save the tooth.
            </p>
            <p className="text-justify font-tinos mt-4">
              A root canal can remove the infected or inflamed pulp to prevent
              further issues. Various situations can call for a root canal, such
              as repeat dental work on the same tooth, cracks or chips, deep
              cavities, or a tooth injury. Signs that a patient may need root
              canal treatment include bumps along the gums, darkening gums,
              severe pain or sensitivity while biting or chewing, and swollen or
              tender gums. People should be aware that the signs of root canal
              infection or injury are not always obvious and that a thorough
              examination may be necessary for diagnosis.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “A root canal can remove the infected or inflamed pulp to prevent
              further issues.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="root-canal-benefits">
            <h2 className="font-cinzel text-2xl text-primary">
              Root Canal Treatment Benefits
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              The goal of root canal treatment is to save and preserve the
              natural tooth. One of the biggest benefits of root canals is
              getting rid of pain and infection in the mouth. Additional
              benefits include:
            </p>
            <ol className="font-tinos text-justify list-disc pl-4 mt-2">
              <li>
                <span className="font-bold">Improved appearance:</span> After
                root canal treatment, the patient will receive a crown or
                filling that restores their tooth’s aesthetic appearance.
              </li>
              <li>
                <span className="font-bold">
                  Reduced risk for further decay:
                </span>{" "}
                Removal of the infected dental pulp prevents the bacteria from
                spreading and damaging the surrounding teeth.
              </li>
              <li>
                <span className="font-bold">Restored function:</span> Root
                canals restore a tooth’s health to function like any other
                tooth.
              </li>
              <li>
                <span className="font-bold">Saving the natural tooth:</span>{" "}
                Root Nothing can replace the look and function of a natural
                tooth.
              </li>
            </ol>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              ” The goal of root canal treatment is to save and preserve the
              natural tooth.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="root-canal-process">
            <h2 className="font-cinzel text-2xl text-primary">
              The Root Canal Process and Potential Complications
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              According to Healthline, root canal treatment typically involves
              four steps. First, we will take an X-ray of the infected tooth and
              numb the treatment site. Next, we will place a dental dam, or
              small protective sheet, over the area to protect the spot from
              saliva and bacteria during the procedure. Then we will make a
              small incision near the tooth’s crown to expose the infected pulp
              before removing the infected tissue and cleaning out the pathways.
              Once the canals are clean, we may apply a topical antibiotic to
              kill any remaining infection. Once the tooth is filled and sealed,
              we will place a crown or other restoration to protect the tooth
              and restore its functionality.
            </p>
            <p className="font-tinos mt-2">
              As with any semi-invasive procedure, root canal treatment is not
              without its risks. In some cases, the damage is too extensive for
              treatment to be viable. If root canal treatment occurs in this
              situation, it could result in tooth loss. Though rare, root canal
              treatment can also result in abscesses. This typically only occurs
              if the improper infected pulp removal occurs or if the antibiotics
              are ineffective. Although there is a risk for potential
              complications, root canal treatments are generally safe and
              effective, with a success rate between 86-98%.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Although there is a risk for potential complications, root
                canal treatments are generally safe and effective, with a
                success rate between 86-98%.”
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

            <div className="mt-10" id="prevent-root-canal">
              <h2 className="font-cinzel text-2xl text-primary">
                Preventing the Need for Root Canal Treatment
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Although root canals are effective procedures to restore
                infected or damaged teeth, it is best to avoid the need for a
                root canal in the first place. Preventing the need for root
                canal treatment is simple, maintain a good oral hygiene routine.
                Since root canals are often necessary due to tooth decay, people
                can help prevent this by brushing twice and flossing once every
                day.
              </p>
              <p className="font-tinos mt-2 text-justify">
                It is also essential to attend regular dental appointments and
                seek dental attention as soon as possible when pain or
                discomfort arises. People can also take certain actions to avoid
                tooth damage than can necessitate root canal treatment. This
                includes avoiding acidic foods and beverages, not chewing on
                ice, and wearing a mouthguard while playing sports and at night
                if teeth grinding occurs.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Although root canals are effective procedures to restore
                infected or damaged teeth, it is best to avoid the need for a
                root canal in the first place.”
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
                  href="#what-is-root-canal"
                >
                  Q. <span className="underline">What is a root canal?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#root-canal-benefits"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the benefits of a root canal?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#root-canal-process"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens during root canal treatment?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#prevent-root-canal"
                >
                  Q.{" "}
                  <span className="underline">
                    How can someone prevent the need for a root canal?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#root-canal-alternative"
                >
                  Q.{" "}
                  <span className="underline">
                    What is an alternative to root canal treatment?
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
                  href="smile-makeover#care-after-smile-makeover"
                >
                  Q.{" "}
                  <span className="underline">
                    How should people take care of their teeth after a smile
                    makeover?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="smile-makeover#treatments-in-smile-makeover"
                >
                  Q.{" "}
                  <span className="underline">
                    What dental treatments are possible in a smile makeover?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="smile-makeover#causes-of-smile-makeover"
                >
                  Q.{" "}
                  <span className="underline">
                    What substances and habits may cause someone to get a smile
                    makeover?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="root-canal-alternative">
              <h2 className="font-cinzel text-2xl text-primary">
                Alternatives To Root Canal Treatment
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Root canals are safe and effective procedures to save a tooth.
                However, some situations may require alternative treatment, such
                as extraction. Extraction involves pulling out the entire tooth.
              </p>

              <p className="font-tinos mt-2 text-justify">
                This treatment takes more time and can necessitate further
                procedures to surrounding teeth and supporting tissue. It is
                always best to try and save a natural tooth when possible.
                Extractions are best for when a tooth is too damaged to be saved
                with a root canal.
              </p>
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Extractions are best for when a tooth is too damaged to be
                saved with a root canal.”
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
                    How much does a root canal cost?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The cost of a root canal treatment will vary for each
                  patient. Factors that may affect the cost include the extent
                  of damage, the location, and whether insurance covers part of
                  the procedure. People should contact their insurance provider
                  for more information.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Does insurance cover root canal treatment?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Every insurance plan is different. Since root canals are
                  considered a medically necessary treatment, most dental
                  insurance plans will provide some treatment coverage. People
                  will have to contact their insurance provider to learn more
                  about coverage before seeking treatment.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    How long does it take to recover from a root canal?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Recovery following a root canal is often quick and
                  painless. Though soreness and discomfort are normal in the
                  days following treatment, most patients can return to school,
                  work, and their daily activities the next day. Pain that
                  extends beyond a couple of days may indicate a problem.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. <span className="underline">Are root canals painful?</span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Many people believe that root canals are painful. Though
                  discomfort is common, the treatment is typically no more
                  painful than having a cavity filled. However, nervous patients
                  should discuss their fears with their providers beforehand.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    How should I take care of my tooth after root canal
                    treatment?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Although it is normal to experience swelling and
                  inflammation after the root canal, patients can take over the
                  counter pain medication to minimize discomfort. We recommend
                  not chewing on the tooth to keep the area clean and prevent
                  the tooth from breaking before we restore it completely.
                  Patients will need to have a follow-up appointment after
                  treatment to ensure that the healing process progresses well.
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
                    term: "Cementum",
                    definition:
                      "Cementum is that bone-like tissue that forms the outer surface on the root of the tooth.",
                  },
                  {
                    term: "Dental Pulp",
                    definition:
                      "Dental pulp is the inner-most layer of the tooth with connective tissue that contains blood vessels and nerve tissue.",
                  },
                  {
                    term: "Dentin",
                    definition:
                      "Dentin is the inner layer of the tooth structure that is immediately under the enamel and surrounds the dental pulp.",
                  },
                  {
                    term: "Direct Pulp Cap",
                    definition:
                      "A direct pulp cap is a procedure in which a professional treats exposed pulp with a therapeutic material to help the tooth heal.",
                  },
                  {
                    term: "Enamel",
                    definition:
                      "The enamel is the hard calcified layer that covers the entire tooth and is subject to interaction with multiple substances.",
                  },
                  {
                    term: "Endodontist",
                    definition:
                      "An endodontist is a specialist who focuses on treating issues, diseases and conditions that affect the inner-most layer of the tooth, the dental pulp.",
                  },
                  {
                    term: "Pulpectomy",
                    definition:
                      "A pulpectomy is a procedure that involves the complete removal of pulp tissue from the root canal in a tooth.",
                  },
                  {
                    term: "Pulpitis",
                    definition:
                      "Pulpitis is another term to describe the inflammation of the dental pulp due to an injury or infection.",
                  },
                  {
                    term: "Pulpotomy",
                    definition:
                      "A pulpotomy is a procedure involving the removal of a portion of diseased or infected pulp in order to protect the healthy portions of the pulp and teeth still in the mouth.",
                  },
                ].map((item, index) => (
                  <div key={index} className="mt-5 font-tinos">
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
