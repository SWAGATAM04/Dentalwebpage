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
        <div className="bg-[url(/educations/improve-your-smile-for-senior-pictures.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Improve Your Smile for Senior Pictures
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Improving your smile for senior pictures may also help you improve
            your dental health. This may lead to feelings of increased
            self-confidence and improved overall dental health. When it comes to
            preparing for senior pictures, it is best to start far in advance.
          </p>
          <p className="font-tinos  text-justify">
            Solutions to improve your smile for senior pictures are available at
            Revital Dental in Temple and the surrounding area. Enhancing your
            appearance can also help improve your dental health. Call us today
            at (254) 207-0708 to schedule an appointment and learn more.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="smile-benefits-senior-pictures">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              More Than Just a Better Smile for Senior Pictures
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Despite what the name may imply, cosmetic dentistry has more than
              just aesthetic benefits. Cosmetic dentistry is a broad field that
              can involve improving the alignment, color, position, shape, and
              size of the gums and teeth. These aesthetic enhancements often
              cross over with functional improvements. These include correcting
              a misaligned bite, improving dental and overall health, and
              increasing focus on oral hygiene.
            </p>
            <p className="text-justify font-tinos mt-4">
              Additionally, a 2018 study published in the International Journal
              of Medical and Surgical Sciences found that malocclusion may
              negatively affect patients' self-image. Correcting these
              functional irregularities may lead to feelings of increased
              self-esteem while also improving one's ability to speak and eat.
            </p>
            <p className="text-justify font-tinos mt-4">
              Other cosmetic dental procedures like bonding, crowns, inlays,
              onlays, and veneers can help repair cracked or broken teeth. By
              providing additional support, these treatments protect the teeth
              from further damage and can maintain the remaining tooth. All
              cosmetic dental procedures also encourage an increased focus on
              dental hygiene as part of upkeep. The result is improved dental
              health, directly correlated with improved overall health.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Despite what the name may imply, cosmetic dentistry has more than
              just aesthetic benefits.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="clear-aligners-vs-braces">
            <h2 className="font-cinzel text-2xl text-primary">
              Clear Aligners for Senior Pictures
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Clear aligners, such as Invisalign®, have been growing in
              popularity over recent years. For many patients, these "invisible
              braces'' are an appealing alternative to traditional options, as
              they are more unobtrusive aesthetically. While conventional braces
              move teeth through brackets connected by wires, invisible aligners
              use a series of custom-made mouthpieces consisting of clear
              plastic or acrylic material.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Clear aligners are also removable, making it easier for patients
              to brush and floss well. Thus, it may be easier to maintain a
              thorough dental hygiene routine than with traditional braces.
              Treatment time with clear aligners depends on a case-by-case
              basis. On average, however, patients usually complete treatment
              within 10 to 24 months. Consequently, it is best to schedule a
              consultation well in advance of any senior photos.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Clear aligners are best-suited for teens and adults with mild or
              moderate orthodontic issues. Those with more severe conditions,
              however, may require more involved treatment with traditional
              braces. Our qualified team works closely with our patients to
              determine an individualized treatment plan for their needs.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “While conventional braces move teeth through brackets connected
              by wires, invisible aligners use a series of custom-made
              mouthpieces consisting of clear plastic or acrylic material.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="veneers-before-photos">
            <h2 className="font-cinzel text-2xl text-primary">
              Dental Veneers for Senior Pictures
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Dental veneers, also known as dental porcelain laminates, are
              thin, tooth-colored shells that cover the front surface of the
              teeth. They may consist of porcelain or resin composite materials,
              and they can enhance teeth's color, shape, size, or length.
              Veneers may be able to help patients whose teeth are chipped or
              broken, discolored, irregularly shaped, misaligned, worn down,
              uneven, or have gaps between them. Patients may be able to get
              veneers for one or more teeth.
            </p>
            <p className="font-tinos mt-2">
              Veneers are a natural-looking tooth enhancement option that do not
              require any prior, extensive shaping. Porcelain veneers, in
              particular, are stain-resistant and well-tolerated by gum tissue.
              By effectively replacing the outer layer of the teeth (or enamel),
              veneers can give the appearance of a more symmetrical smile
              without actually moving your teeth.
            </p>
            <p className="font-tinos mt-2">
              It typically takes about three dental appointments to get veneers.
              During the initial consultation, the patient will tell Revital
              Dental about the results they want, and Revital Dental will
              conduct a thorough examination to determine if veneers are right
              for them. The second appointment consists of preparation, where
              the teeth have their surfaces reshaped and Revital Dental makes a
              model or impression of the teeth. In the third appointment, the
              veneers are finally bonded to the teeth. This entire process
              generally takes a few weeks, as does aftercare. Our team
              recommends booking the procedure a few months in advance of any
              senior photos.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Veneers are a natural-looking tooth enhancement option that do
                not require any prior, extensive shaping.”
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

            <div className="mt-10" id="anesthesia-dental-bonding">
              <h2 className="font-cinzel text-2xl text-primary">
                Dental Bonding for Senior Pictures
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                In a dental bonding procedure, patients have a tooth-colored
                resin material applied and hardened onto their teeth to restore
                or improve their smile. Dental bonding may address several
                different cosmetic concerns, including chipped or cracked teeth,
                decayed teeth, discolored teeth, misshapen teeth, and receding
                gums. Additionally, dental bonding may help close spaces between
                teeth or make teeth look longer. Some patients also opt for
                dental bonding as an alternative to amalgam fillings.
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
                  href="#smile-benefits-senior-pictures"
                >
                  Q.{" "}
                  <span className="underline">
                    Are there any functional benefits to improving my smile for
                    senior pictures?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#clear-aligners-vs-braces"
                >
                  Q.{" "}
                  <span className="underline">
                    What is the difference between clear aligners and
                    traditional braces?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#veneers-before-photos"
                >
                  Q.{" "}
                  <span className="underline">
                    When should I get veneers before senior photos?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#anesthesia-dental-bonding"
                >
                  Q.{" "}
                  <span className="underline">
                    Will I need anesthesia to have dental bonding done?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#composite-fillings-time"
                >
                  Q.{" "}
                  <span className="underline">
                    How long will it take to get composite fillings?
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
                  href="i-think-my-gums-are-receding/#why-gums-receding"
                >
                  Q.{" "}
                  <span className="underline">Why are my gums receding?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="i-think-my-gums-are-receding/#what-to-do-about-receding-gums"
                >
                  Q.{" "}
                  <span className="underline">
                    What can I do about receding gums?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="i-think-my-gums-are-receding/#prevent-gum-recession"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I prevent gum recession?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="i-think-my-gums-are-receding/#risk-for-receding-gums"
                >
                  Q.{" "}
                  <span className="underline">
                    Am I at risk for receding gums?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="composite-fillings-time">
              <h2 className="font-cinzel text-2xl text-primary">
                Composite Fillings for Senior Pictures
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Composite fillings, or resins, are tooth-colored fillings that
                protect small- to midsize fillings against moderate pressure
                from the constant stress of chewing. Composites may be used both
                on front or back teeth, in part because they look so natural.
                They are also arguably safer than amalgam fillings, which
                consist of metal alloys that may include mercury. However, both
                types function in the same way.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Composite fillings are a relatively quick and easy cosmetic
                dental procedure, with the process taking about less than 30
                minutes per tooth. Their ability to bond to the tooth structure
                allows them to provide even further support. Additionally, they
                may be used to repair broken, chipped, or worn teeth.
              </p>
            </div>
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Composite fillings are a relatively quick and easy cosmetic
                dental procedure, with the process taking about less than 30
                minutes per tooth.”
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
                  <h2 className="italic text-xl">Bleachorexia</h2>
                  <p>
                    Bleachorexia refers to the overuse or obsession with teeth
                    whitening treatments, often done without dental supervision,
                    leading to enamel erosion and gum damage.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Carbamide Peroxide</h2>
                  <p>
                    Carbamide peroxide is a whitening agent that breaks down
                    into hydrogen peroxide and urea, used in professional and
                    at-home teeth whitening products.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry includes treatments focused on enhancing
                    the appearance of teeth, gums, and smiles, such as
                    whitening, veneers, and bonding.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Deeper Teeth Stains</h2>
                  <p>
                    Deeper teeth stains occur within the tooth structure and
                    often result from aging, poor oral hygiene, or consumption
                    of staining foods and beverages, requiring professional
                    treatment.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentin Hypersensitivity</h2>
                  <p>
                    Dentin hypersensitivity is a condition where the inner layer
                    of the tooth becomes exposed, causing pain when consuming
                    hot, cold, sweet, or acidic substances.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist is a licensed medical professional trained in the
                    prevention, diagnosis, and treatment of conditions affecting
                    the teeth, gums, and oral cavity.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Hydrogen Peroxide</h2>
                  <p>
                    Hydrogen peroxide is a powerful bleaching compound commonly
                    used in teeth whitening products to remove surface stains
                    and brighten enamel.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Relief ACP</h2>
                  <p>
                    Relief ACP (amorphous calcium phosphate) is a gel that helps
                    relieve sensitivity in teeth by remineralizing enamel and
                    reducing discomfort.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Stained Dentin</h2>
                  <p>
                    Stained dentin refers to discoloration that affects the
                    inner part of the tooth, often requiring professional
                    whitening procedures for improvement.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Surface Enamel</h2>
                  <p>
                    Surface enamel is the outermost layer of a tooth that
                    protects the underlying structures and plays a key role in
                    maintaining a white, healthy smile.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Surface Teeth Stains</h2>
                  <p>
                    Surface teeth stains are external discolorations typically
                    caused by foods, drinks, or smoking and can often be removed
                    through dental cleanings or whitening.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">
                    Teeth Whitening Concentrate
                  </h2>
                  <p>
                    Teeth whitening concentrate is a high-strength bleaching
                    gel, usually containing hydrogen or carbamide peroxide,
                    available through professional dental services.
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
