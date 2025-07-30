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
        <div className="bg-[url(/services/smile-makeover.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">Smile Makeover</h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            If you are unhappy with your smile’s appearance, a smile makeover
            can help. Smile makeovers involve a combination of at least two
            cosmetic dental procedures. People can choose from various
            procedures to achieve a more beautiful smile.
          </p>
          <p className="font-tinos  text-justify">
            Smile makeovers are available at Revital Dental in Temple and the
            surrounding area. Our team can help determine which procedures are
            right for your needs. Call us today at (254) 207-0708 to schedule an
            appointment or learn more about our services.
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
              Candidates for a Smile Makeover
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              A good candidate for a smile makeover is someone who is not
              satisfied with their smile. They may lack confidence in the
              appearance of their teeth. Other people who may want to consider a
              makeover of their smiles are those who are having functional
              issues.
            </p>
            <p className="text-justify font-tinos mt-4">
              Misshapen teeth, crooked teeth, and gaps in the mouth can affect
              speech and cause other complications such as difficulty and pain
              when chewing. People can choose to have a smile makeover for many
              reasons. Our team can create a customized treatment plan according
              to each patient’s unique needs and goals.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “A good candidate for a smile makeover is someone who is not
              satisfied with their smile.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="root-canal-benefits">
            <h2 className="font-cinzel text-2xl text-primary">
              Dental Care Plan After the Makeover
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              The procedures in a smile makeover require regular oral hygiene
              care and may need maintenance over time. For example, teeth
              whitening is not a permanent treatment. Patients will need
              touch-up treatments to maintain their results. While it is always
              important to practice good oral hygiene, it is especially
              important after a smile makeover.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Proper maintenance and care will help prevent future dental issues
              and previous problems from reappearing. Our team will provide
              patients with tips and instructions on how to maintain their new
              smile after. Tips for maintaining a newly restored smile include
              brushing and flossing multiple times daily and visiting the
              dentist for professional cleanings on a regular basis. Certain
              procedures require special care, so it is important to follow the
              instructions precisely.
            </p>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “While it is always important to practice good oral hygiene, it is
              especially important after a smile makeover.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="root-canal-process">
            <h2 className="font-cinzel text-2xl text-primary">
              Dental Treatments for a Smile Makeover
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              After examining the patient’s teeth, we will develop a customized
              treatment plan to address their unique needs. Smile makeovers
              involve a minimum of two procedures. There are numerous treatment
              options to choose from depending on the patient’s issues.
            </p>
            <p className="font-tinos mt-2">
              Some of the most common dental treatments include veneers,
              bonding, implants, teeth whitening, crowns, and bridges. People
              who are interested in receiving a smile makeover should contact us
              to learn about the available options. A smile makeover can correct
              various cosmetic issues, such as gaps, stains, and crooked,
              missing, or uneven teeth. We provide comprehensive and custom
              treatments to help smiles look their best.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Some of the most common dental treatments include veneers,
                bonding, implants, teeth whitening, crowns, and bridges.”
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
                Reasons to Get a Smile Makeover
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Certain lifestyle choices can adversely affect the appearance
                and function of a smile. One lifestyle choice that can affect
                the appearance of teeth is smoking. According to Healthline, the
                nicotine and tar in cigarettes can cause teeth to become
                yellowed and stained. Additionally, people who smoke are also at
                higher risk of gum disease, further damaging teeth.
              </p>
              <p className="font-tinos mt-2 text-justify">
                People should also avoid eating and drinking sugary foods and
                beverages. The sugar feeds the bacteria, which produce acid that
                can also damage teeth, causing cavities to form or erosion to
                occur. Fortunately, a smile makeover can give people a fresh
                start and a new smile. It is important for people who receive a
                smile makeover to change their lifestyle and make healthy
                choices to maintain a healthy, beautiful smile.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Certain lifestyle choices can adversely affect the appearance
                and function of a smile.”
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
                  href="#who-can-get-smile-makeover"
                >
                  Q.{" "}
                  <span className="underline">
                    Who can get a smile makeover?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#care-after-smile-makeover"
                >
                  Q.{" "}
                  <span className="underline">
                    How should people take care of their teeth after a smile
                    makeover?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#treatments-in-smile-makeover"
                >
                  Q.{" "}
                  <span className="underline">
                    What dental treatments are possible in a smile makeover?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#causes-of-smile-makeover"
                >
                  Q.{" "}
                  <span className="underline">
                    What substances and habits may cause someone to get a smile
                    makeover?
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
                  href="snap-on-smile#snap-on-smile-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    What is the process for getting Snap-On Smile?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="snap-on-smile#snap-on-smile-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the benefits of Snap-On Smile?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="snap-on-smile#snap-on-smile-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    How do I care for Snap-On Smile?
                  </span>
                </a>
              </div>
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
                    Is a smile makeover the same as full mouth rejuvenation?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. No, it is not. Full mouth rejuvenation uses many of the
                  same cosmetic methods as a makeover, but it also consists of
                  general and restorative services, such as TMJ or gum disease
                  treatment. A smile makeover is more cosmetic based and is a
                  less extensive process.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    What are the most common procedures used for a smile
                    makeover?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Every situation is different, but certain procedures are
                  used more commonly than others. These include veneers,
                  tooth-colored fillings, bonding, and gum contouring. Teeth
                  whitening is probably the most commonly used method.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    How long does a makeover take?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The overall timeframe of a smile makeover varies greatly
                  based on the types and number of procedures. Some methods,
                  like teeth whitening, take one visit. Many of the procedures
                  require at least two visits, and some are spaced weeks apart.
                  Dental implants usually take the longest, as it takes numerous
                  steps. The whole process can take months to complete.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Is there recovery time after a smile makeover?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Many of the procedures do not require recovery time.
                  Others, such as implants, may include some discomfort and
                  swelling after the procedure. Patients may need to restrict
                  physical activity and temporarily change eating habits until
                  healing is complete. Our team will provide patients with
                  instructions and tips to recover after treatment.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    What aspects does the dentist consider when planning a smile
                    makeover?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. We consider many features besides the general state of your
                  teeth and gums. Detailed aspects of the teeth, such as their
                  size, color, and shape, are factored in; along with the
                  condition of the gums. The dentist also looks at the different
                  features of the face and the patient’s skin tone, which makes
                  a makeover especially effective.
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
                  <h2 className="italic text-xl">Bleachorexia</h2>
                  <p>
                    Bleachorexia refers to the excessive use of whitening
                    products without dental supervision, leading to enamel
                    erosion and gum irritation.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry includes procedures that enhance the
                    appearance of your teeth and smile, such as veneers,
                    whitening, and bonding.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Imaging</h2>
                  <p>
                    Cosmetic imaging uses digital tools to show patients a
                    preview of their smile after cosmetic treatments, helping
                    them make informed decisions.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Crown Lengthening</h2>
                  <p>
                    Crown lengthening is a procedure that reshapes gum tissue
                    and bone to expose more of a tooth for cosmetic or
                    restorative purposes.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Crown</h2>
                  <p>
                    A dental crown is a custom-made cap that covers a damaged or
                    decayed tooth to restore its shape, strength, and
                    appearance.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist is a healthcare professional trained to diagnose,
                    treat, and prevent oral health issues affecting the teeth,
                    gums, and mouth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Full Mouth Rehabilitation</h2>
                  <p>
                    Full mouth rehabilitation combines multiple dental
                    procedures to restore the health, function, and aesthetics
                    of the entire mouth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Smile Selection Guide</h2>
                  <p>
                    A smile selection guide helps patients visualize different
                    smile styles to choose the one that best fits their facial
                    features and preferences.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Smile Shape Guide</h2>
                  <p>
                    A smile shape guide offers options for tooth shapes and
                    smile designs, helping customize cosmetic treatments to meet
                    aesthetic goals.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tetracycline</h2>
                  <p>
                    Tetracycline is an antibiotic known to cause permanent tooth
                    discoloration, especially when taken during childhood or
                    tooth development.
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
