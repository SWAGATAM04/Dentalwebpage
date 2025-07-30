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
        <div className="bg-[url(/services/dental-veneers-and-dental-laminates.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Dental Veneers and Dental Laminates
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Patients who want to improve the appearance of their smiles may
            consider dental veneers or laminates. Although people often use the
            two terms interchangeably, they have some differences. Both
            procedures can help improve a patient’s smile. Knowing the
            difference between them can help you choose the best option for you.
          </p>
          <p className="font-tinos  text-justify">
            From color to size and shape, dental veneers and laminates can
            provide a solution for people who want a better-looking smile. These
            procedures are available at Revital Dental in Temple and the
            surrounding area. Call us at (254) 207-0708 to schedule a
            consultation and learn which option is the best for you.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="understanding-dental-laminates">
          {/* dark section */}
          <div
            className="bg-dark p-5 text-white"
            id="what-happens-during-dental-implant-process"
          >
            <h2 className="text-2xl font-cinzel mb-3">
              Understanding Dental Laminates
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Both dental laminates, like veneers, can improve the appearance of
              a patient’s smile. However, they have key differences that
              patients should consider. Laminates tend to be lighter and less
              durable than veneers. While dental laminates can improve the
              whiteness of teeth, they are not appropriate for dental repairs.
            </p>
            <p className="text-justify font-tinos mt-4">
              Laminates are much thinner than veneers and require less enamel
              removal. Placing laminates does not require much alteration to the
              tooth shape or enamel, which can be better for long term tooth
              health. However, they can be more expensive than veneers and bulky
              on the teeth when placed without any tooth alteration.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Laminates are much thinner than veneers and require less enamel
              removal.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="understanding-dental-veneers">
            <h2 className="font-cinzel text-2xl text-primary">
              Understanding Dental Veneers
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Dental veneers are thin coatings of porcelain or composite resin
              covering the teeth to repair minor damage and improve the
              appearance of stains or discoloration. Some of the common issues
              that veneers can correct include gaps, misshapen teeth, cracks,
              chips, staining, and discoloration. Patients must have enamel
              removal and tooth reshaping to allow the veneer to stay flat
              without being bulky.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Patients can choose between porcelain veneers or composite resin
              veneers. Porcelain veneers usually last longer than composite
              resin ones. They resist staining and tend to be stronger and more
              durable. Composite resin veneers can be completed in a single
              dental visit, while porcelain veneers typically require two dental
              visits. Composite resin also preserves more of the patient's tooth
              enamel and tends to cost less than porcelain but is more prone to
              breakage.
            </p>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Dental veneers are thin coatings of porcelain or composite resin
              covering the teeth to repair minor damage and improve the
              appearance of stains or discoloration.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="placing-dental-veneers">
            <h2 className="font-cinzel text-2xl text-primary">
              Placing Dental Veneers
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              To place porcelain veneers, the cosmetic dentist must remove
              enamel from the tooth’s surface so the thin shell can adhere to
              it. A dental lab technician then creates custom veneers with teeth
              molds and color-matches them to the patient’s teeth. Then the
              shells are bonded to the patient's teeth using special dental
              cement.
            </p>
            <p className="font-tinos mt-2">
              For composite resin veneers, we remove the tooth enamel first. The
              composite resin, which matches the natural enamel, covers and
              reshapes the teeth to improve the appearance. After, a special
              light seals the resin to the underlying teeth. Finally, we file
              the veneers to achieve a natural appearance.
            </p>
            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “To place porcelain veneers, the cosmetic dentist must remove
                enamel from the tooth surface so the thin shell can adhere to
                the tooth.”
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

            <div className="mt-10" id="veneer-laminate-aftercare">
              <h2 className="font-cinzel text-2xl text-primary">
                Dental Veneer and Laminate Aftercare
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                The Canadian Dental Association explains that good dental
                hygiene is essential to maintain the appearance and function of
                new veneers. Brushing and flossing after meals and visiting the
                dentist for regular check-ups are critical aspects of proper
                maintenance. Skipping these steps can cause decay and cavities
                to develop between or under the veneer shells.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Veneers and laminates can also crack, break or loosen under
                pressure. Patients should avoid chewing hard candies, ice, or
                similar items. During the first few days after the procedure,
                patients should stick to soft foods and avoid consuming nuts,
                hard bread, popcorn, and seeds. Wearing a bite guard at night
                can help prevent grinding that may wear down veneers. Veneers
                are more prone to staining than laminates, so we also recommend
                patients avoid substances like tobacco, red wine, and coffee.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Brushing and flossing after meals and visiting the dentist for
                regular check-ups are critical aspects of proper maintenance.”
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
                  href="#understanding-dental-laminates"
                >
                  Q.{" "}
                  <span className="underline">
                    How are laminates different from veneers?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#understanding-dental-veneers"
                >
                  Q. <span className="underline">What are dental veneers?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#placing-dental-veneers"
                >
                  Q.{" "}
                  <span className="underline">
                    How are dental veneers placed?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#veneer-laminate-aftercare"
                >
                  Q.{" "}
                  <span className="underline">
                    How does one care for dental veneers and laminates?
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
                  href="dentures-and-partial-dentures#why-dentures-preferred"
                >
                  Q.{" "}
                  <span className="underline">
                    Why are dentures a preferred treatment?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="dentures-and-partial-dentures#how-dentures-made"
                >
                  Q. <span className="underline">How are dentures made?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="dentures-and-partial-dentures#types-of-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the different types of dentures?
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
                  Q. Are dental laminates and veneers comfortable?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dental laminates and veneers may feel strange at first.
                  Most patients become accustomed to their laminates or veneers
                  a few days after the procedure. Patients should let their
                  cosmetic dentists know about any bite problems as adjustments
                  may be needed.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. Should I choose porcelain or composite dental veneers?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Patients should make their decision based on their desired
                  results and the current state of their teeth. We usually
                  recommend porcelain for patients with crooked or misshapen
                  teeth, gaps, and cracks. Composite veneers may be a better
                  choice for patients with stained or minorly chipped teeth.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. How long do dental veneers last?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Most dental veneers last between seven to 15 years. Proper
                  care is necessary to extend the life of veneers. Visiting the
                  dentist regularly and following aftercare instructions can
                  also help veneers last longer.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. Can I get dental veneers for my entire mouth?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dental veneers are used only on the front teeth and are not
                  appropriate for molars. The exact number of veneers depends on
                  the state of the teeth and the patient's esthetic goals. Most
                  people opt for an even number of veneers, commonly two, four,
                  eight, 10, or 12.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. Will I experience pain when receiving dental veneers?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Local anesthetics numb the patient before removing tooth
                  enamel and installing veneers. After the procedure, it is
                  common to experience mild soreness affecting the jawbone and
                  gums. Over-the-counter pain medication can reduce this
                  discomfort.
                </p>
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  href="#dentist-look-for-dental-examination"
                >
                  Q. What should I do if my dental veneers fall off?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. If damage occurs, the veneer may loosen and eventually come
                  off. Patients should see their cosmetic dentists in these
                  cases. Do not attempt to reattach the veneer at home with glue
                  or any other substance. Avoid hot and cold foods and beverages
                  since the exposed tooth may be sensitive because of the
                  removed enamel.
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
