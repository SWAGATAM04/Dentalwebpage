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
        <div className="bg-[url(/educations/options-for-replacing-missing-teeth.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Options for Replacing Missing Teeth
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            When you meet someone for the first time, one of the first things
            this person will notice is your smile. A full set of teeth will
            enhance your smile and appearance. Unfortunately, though teeth are
            strong and durable, they can be damaged and fall out due to injury
            or decay. Replacing missing teeth can restore your smile and allow
            you to eat and speak normally again.
          </p>
          <p className="font-tinos  text-justify">
            Options for missing teeth are available at Revital Dental in Temple
            and the surrounding area. You should speak to our team about which
            options make the most sense for your budget and needs. We can
            provide you with a solution that you can feel good about. Call us
            today at (254) 207-0708 and schedule an appointment.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="replace-missing-teeth">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">Available treatments</h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              The good news for patients who are missing teeth is that there are
              effective options to correct these issues. An evaluation will
              factor in a person's medical history, the severity of oral health
              conditions, and how many teeth are missing to decide on the
              preferred treatment option. Options our team might recommend
              include:
            </p>

            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>
                Dentures: These can be full or partial. Dentures are removable
                and made to look like natural teeth
              </li>
              <li>Bleeding after brushing or flossing</li>
              <li>
                Implants: This process takes longer than other options, but
                implants are more durable. Implants work well for patients who
                are missing multiple teeth
              </li>
              <li>
                Bridges: As an article on WebMD explains, this treatment fixes
                artificial teeth to crowns over natural teeth. Bridges can stop
                surrounding teeth from shifting.
              </li>
            </ul>
            <p className="text-justify font-tinos mt-4">
              All treatment options have benefits and challenges. Therefore, it
              is essential for both the patient and the dentist to openly
              discuss what is available. Then decide on the right fit.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “An evaluation will factor in a person’s medical history, the
              severity of oral health conditions, and how many teeth are missing
              to decide on the preferred treatment option.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="durable-option-missing-teeth">
            <h2 className="font-cinzel text-2xl text-primary">
              Durability Comparison of Tooth Replacement Options
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Durability is a critical factor when choosing a long-term
              treatment option. How long something will last impacts the time it
              takes out of your life and how much it will cost. The last thing a
              patient wants is to return to the office every couple of years for
              more dental work treating the same issues.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Implants are the most durable option. According to an article in
              Healthline, this is the main advantage of dental implants. These
              titanium false teeth can last up to 20 years with proper care and
              maintenance. Implants also replace a tooth's roots and can make
              this system as stable as natural roots.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Bridges will not last as long as implants, but this combination of
              artificial teeth, crowns, and natural teeth can serve a patient
              well for a decade or longer. It is not removable, but routine
              visits with your doctor will help monitor the bridge for wear.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Dentures are a moderately durable option and typically require
              replacement more often than implants and bridges. Patients will
              need to replace them every seven to eight years. However, the
              patient should be able to eat most foods with dentures.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “The last thing a patient wants is to return to the office every
              couple of years for more dental work treating the same issues.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="age-affect-replacement-options">
            <h2 className="font-cinzel text-2xl text-primary">
              The Role of Age on Replacing Missing Teeth
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Regardless of a person's age, it is vital to have functioning
              teeth. Missing teeth makes chewing more difficult, can weaken oral
              health, and can affect appearance. Our staff will consider a
              person's age when deciding what option for replacing missing teeth
              is right. For example, older patients may not be concerned about a
              solution that will last for 20 years and beyond. Older adults may
              prefer dentures for this reason and because it takes less work to
              clean.
            </p>
            <p className="font-tinos mt-2">
              Conversely, young patients are more active and may find themselves
              in more social situations. For this reason, they may prefer to
              choose implants. Also, younger patients are more likely to be in
              good overall health. Overall oral and physical health is an
              important criteria for being a good candidate for dental implants.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Regardless of a person’s age, it is vital to have functioning
                teeth.”
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

            <div className="mt-10" id="consider-tooth-replacement">
              <h2 className="font-cinzel text-2xl text-primary">
                Choosing the Right Options for Replacing Missing Teeth
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                It is beneficial to understand the different treatment options.
                Patients should consider the extent of their issues. For only a
                couple of missing teeth, a bridge or implants may make the most
                sense. For several missing teeth, partial dentures are a good
                option. Getting full dentures is a common solution to replace
                all missing teeth.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Patients need to budget wisely too. Implants may be the most
                long-lasting treatment, but it can be the most expensive as
                well. People who have less to spend should consider dentures or
                dental bridges instead. People should look at their lifestyle
                and determine which replacement option fits their needs and
                preferences.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “People should look at their lifestyle and determine which
                replacement option fits their needs and preferences.”
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
                  href="#replace-missing-teeth"
                >
                  Q.{" "}
                  <span className="underline">
                    How can a dentist replace missing teeth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#durable-option-missing-teeth"
                >
                  Q.{" "}
                  <span className="underline">
                    What is the most durable option for replacing missing teeth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#age-affect-replacement-options"
                >
                  Q.{" "}
                  <span className="underline">
                    How does age affect your options when it comes to replacing
                    missing teeth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#consider-tooth-replacement"
                >
                  Q.{" "}
                  <span className="underline">
                    What should you consider when deciding on a tooth
                    replacement option?
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
                  href="invisalign-or-braces/#invisalign-vs-braces-overview"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the main differences between Invisalign and braces?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="invisalign-or-braces/#invisalign-vs-braces-comparison"
                >
                  Q.{" "}
                  <span className="underline">
                    How do the treatment processes for Invisalign and braces
                    compare?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="invisalign-or-braces/#invisalign-vs-braces-comparison"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the benefits of Invisalign vs. braces?
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
                <h2
                  id="candidate-for-implants"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Who is a good candidate for implants?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. One of the nice things about dental implants is that this
                  option can work well no matter how many missing teeth a person
                  has. It is also a good choice for patients who do not want to
                  worry about another replacement treatment for the next 20 to
                  25 years.
                </p>

                <h2
                  id="replacement-pain"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Are these options for replacing missing teeth painful?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Many people have anxiety about dental visits. However,
                  getting a bridge, dentures, or implants does not involve much,
                  if any, pain. Our dentist will give patients a local
                  anesthetic to numb the area. Patients may feel a little
                  soreness for a couple of days and can manage any discomfort
                  with over-the-counter pain medication.
                </p>

                <h2
                  id="insurance-coverage"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Will insurance cover the replacement treatments?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Patients should check with their insurance provider before
                  visiting our office. Some plans may cover part of the
                  procedure, though others will consider the treatments
                  cosmetic. If you are considering financing options, you may
                  also speak with our staff.
                </p>

                <h2
                  id="are-replacements-essential"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Are replacements essential?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. In some cases, our dentist may be able to salvage severely
                  decayed teeth. However, if a tooth has been completely knocked
                  out, a replacement option may be necessary.
                </p>

                <h2
                  id="broken-dentures"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What happens if dentures break?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. If a patient discovers a crack or a break in the dentures,
                  it is essential to call the dentist immediately. There are
                  home repair kits available, but it is always more effective to
                  contact the dentist. Our office has the right equipment and
                  tools to help repair the apparatus properly.
                </p>

                <h2
                  id="foods-for-denture-wearers"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What can people who wear dentures eat?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Patients should start by eating soft foods until they are
                  used to the dentures. From there, the wearers can gradually
                  move onto harder foods. Our dentist can give you advice on
                  which foods might give you trouble.
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
                  <h2 className="italic text-xl">Abutment</h2>
                  <p>
                    An abutment is a component that connects to the dental
                    implant and holds the dental crown in place, completing the
                    restoration with a natural-looking and functional tooth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Bone Augmentation</h2>
                  <p>
                    Bone augmentation is a surgical procedure that rebuilds and
                    strengthens jawbone structure to support dental implants
                    when bone volume is insufficient.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Implant</h2>
                  <p>
                    A dental implant is an artificial tooth root made of
                    titanium that is surgically placed in the jawbone to support
                    a crown, bridge, or denture.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Osseointegration</h2>
                  <p>
                    Osseointegration is the biological process where the bone
                    fuses with the surface of a titanium implant, creating a
                    stable foundation for a prosthetic tooth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Implant-Supported Bridge</h2>
                  <p>
                    An implant-supported bridge is a prosthetic used to replace
                    multiple missing teeth and is secured by dental implants
                    instead of natural teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Crown</h2>
                  <p>
                    A dental crown is a custom-made cap, usually crafted from
                    porcelain or ceramic, placed over a tooth or implant to
                    restore its shape, function, and appearance.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Ridge Expansion</h2>
                  <p>
                    Ridge expansion is a bone grafting procedure where the
                    dental professional widens the jawbone to make room for
                    dental implants when the ridge is too narrow.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Resorption</h2>
                  <p>
                    Resorption occurs when the jawbone begins to shrink due to
                    the absence of tooth roots, which can complicate or delay
                    implant placement if not treated early.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Endosteal Implant</h2>
                  <p>
                    Endosteal implants are the most common type of dental
                    implants, placed directly into the jawbone and used to
                    anchor one or more prosthetic teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Eposteal Implant</h2>
                  <p>
                    Eposteal, or subperiosteal, implants are placed on top of
                    the jawbone but under the gum tissue, often used for
                    patients with minimal bone height.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Transosteal Implant</h2>
                  <p>
                    Transosteal implants involve metal rods or pins that pass
                    entirely through the jawbone, typically used in patients
                    with significant jawbone loss.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Removable Complete Denture</h2>
                  <p>
                    A removable complete denture is a full arch of artificial
                    teeth that can be taken out for cleaning or while sleeping,
                    often used when all natural teeth are missing.
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
