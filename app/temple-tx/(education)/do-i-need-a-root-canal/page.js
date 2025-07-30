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
        <div className="bg-[url(/educations/do-i-need-a-root-canal.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Do I Need a Root Canal
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Root canals can save or repair teeth that have been damaged by
            infection or decay. When a tooth does not get needed root canal
            treatment, the surrounding tissue may become infected and surrounded
            by abscesses. Root canals consist of removing the inflamed and
            infected nerve and pulp of the tooth.
          </p>
          <p className="font-tinos  text-justify">
            Root canals are available at Revital Dental in Temple and the
            surrounding area. Do not put off saving your tooth. Call us today at
            (254) 207-0708 to schedule an appointment and learn more.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="pain-addressed-by-root-canal">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Resolving Pain With Root Canals
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              The dental issues that cause the need for root canals often make
              patients uncomfortable. At the bare minimum, patients will
              experience an excruciating toothache. These toothaches may be
              spontaneous, occurring even when the patient is not using the
              tooth. Eventually, this may evolve into a severe headache. Many
              patients often do not make the connection between the toothache
              and the headache.
            </p>
            <p className="text-justify font-tinos mt-4">
              A tooth that is still alive will also be sensitive to heat and
              cold, even after the patient has removed the stimulus. The tooth
              may be particularly susceptible to heat sensitivity. Patients with
              teeth that are already dead and have become abscessed will cause
              pain when the patient chews or otherwise puts pressure on the
              tooth. Any abscesses may produce swelling or bleeding, even to the
              point of requiring emergency care.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “The underlying causes of root canals can often make patients
              uncomfortable.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="need-root-canal">
            <h2 className="font-cinzel text-2xl text-primary">
              When to See a Dentist About Root Canals
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Many different factors may contribute to a patient needing a root
              canal. These conditions can manifest themselves as various
              symptoms. These include chips or cracks in teeth, pain while
              eating or touching the tooth, persistent pain, sensitivity to heat
              and cold, and swollen gums.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Chips or cracks in the tooth allow empty spaces for bacteria to
              settle in and cause infection and inflammation, while tooth
              sensitivity may be a sign of severe decay or nerve damage. In
              general, toothaches are a sign a patient should see a dentist.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Tooth sensitivity may linger longer when the blood vessels and
              nerves in the tooth have become infected or damaged. Swelling may
              also come and go. It is frequently associated with abscesses,
              which may be accompanied by unpleasant taste and odor.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Infected teeth may also feel looser than healthy teeth, due to
              nerve death softening the bone. Furthermore, teeth may turn
              grayish-black when the roots have been damaged and the internal
              tissue has been broken down.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “These conditions can manifest themselves as various symptoms.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="when-root-canal-necessary">
            <h2 className="font-cinzel text-2xl text-primary">
              When Root Canals Are the Only Option
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Root canal treatments are necessary when the pulp of the tooth has
              become inflamed or infected and needs removal. This may happen due
              to deep decay, cracks or chips in the tooth, faulty crowns, and
              repeated dental procedures. Patients should also be warned that
              facial trauma may still damage the pulp even when the tooth does
              not have visible chips or cracks. Leaving pulp inflammation or
              infection untreated may lead to pain or the formation of an
              abscess.
            </p>
            <p className="font-tinos mt-2">
              When left untreated, teeth with damaged pulp eventually die. This
              can negatively impact your overall oral health, as well as make it
              difficult to eat and chew. Root canals can help preserve the
              remaining tooth. The procedure may be followed by the placement of
              an implant or a crown.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Root canal treatments are necessary when the pulp of the tooth
                has become inflamed or infected and needs to be removed.”
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

            <div className="mt-10" id="alternatives-to-root-canal">
              <h2 className="font-cinzel text-2xl text-primary">
                Alternatives to Root Canals
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Root canals can help address any issues caused by infection and
                decay. However, for such treatment to be successful, there must
                be enough of the natural tooth remaining to save. While it is
                best to save and maintain natural teeth whenever possible, some
                teeth may be beyond repair. Teeth with severe fractures or
                cracks extending below the gum line, for example, may be better
                suited for extraction.
              </p>
              <p className="font-tinos mt-2 text-justify">
                If extraction is necessary, patients may want to consider
                getting dental implants. This tooth replacement option looks,
                feels, and functions like a natural tooth and will help maintain
                the appearance of the smile. Dental implants consist of
                artificial tooth roots surgically placed into the jaw to hold an
                artificial tooth (also known as a crown or pontic) in place. Our
                team can help determine which option is best for you.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “However, for such treatment to be successful, there must be
                enough of the natural tooth remaining to save.”
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
                  href="#pain-addressed-by-root-canal"
                >
                  Q.{" "}
                  <span className="underline">
                    What kind of pain can be addressed by a root canal
                    treatment?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#need-root-canal"
                >
                  Q.{" "}
                  <span className="underline">
                    Do I need a root canal procedure?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#when-root-canal-necessary"
                >
                  Q.{" "}
                  <span className="underline">
                    When are root canal treatments necessary?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#alternatives-to-root-canal"
                >
                  Q.{" "}
                  <span className="underline">
                    Are there any alternatives to root canals?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#emergency-root-canal"
                >
                  Q.{" "}
                  <span className="underline">
                    Do I need an emergency root canal?
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
                  href="do-i-have-sleep-apnea/#what-is-sleep-apnea"
                >
                  Q. <span className="underline">What is sleep apnea?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="do-i-have-sleep-apnea/#difference-between-sleep-apnea-and-other-sleep-disorders"
                >
                  Q.{" "}
                  <span className="underline">
                    What is the difference between sleep apnea and other sleep
                    disorders?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="do-i-have-sleep-apnea/#causes-of-sleep-apnea"
                >
                  Q. <span className="underline">What causes sleep apnea?</span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="emergency-root-canal">
              <h2 className="font-cinzel text-2xl text-primary">
                Emergency Root Canals
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Since every tooth that requires a root canal is in the process
                of dying, patients should consider every root canal an emergency
                procedure. Delaying treatment will only increase the chances of
                pulp necrosis, or having the pulp of the tooth die off entirely.
                Only a root canal procedure or tooth extraction can reverse the
                symptoms of pulp necrosis. When left untreated, pulp necrosis
                may put patients at risk for infection, fever, jaw swelling,
                cellulitis, abscesses (including those in the brain), sinusitis,
                periodontitis, and bone loss. Contact our office immediately if
                you are experiencing severe toothaches when biting down or
                chewing, sensitivity to hot or cold temperatures (especially
                hot), darkening or discoloration of the teeth, swelling or
                tender gums, and pimples on the gums.
              </p>
            </div>
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Since every tooth that requires a root canal is in the process
                of dying, patients should consider every root canal an emergency
                procedure.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            {/* Q & A */}

            <div className="bg-gray-100 p-5 mt-10 ">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2
                  id="what-happens-during-root-canal"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What happens during a root canal?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A root canal procedure may require multiple office visits.
                  The first step is for our team to take an X-ray to see the
                  shape of your root canals and look for any signs of infection.
                  Then, during the actual procedure, the dentist removes the
                  inflamed nerve and pulp of the tooth. The inside of the tooth
                  will be cleaned and sealed.
                </p>

                <h2
                  id="is-root-canal-painful"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Is it painful to get a root canal?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. It is a common misconception that root canals are
                  excruciatingly painful. With modern technology, getting a root
                  canal is not much more uncomfortable than getting a cavity
                  filled. Root canals can address the causes of any pain you
                  have been experiencing due to the damaged tissues.
                </p>

                <h2
                  id="how-long-root-canal-takes"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. How long does it take to get a root canal?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. This varies on a case-by-case basis. However, most patients
                  can expect one or two 90-minute appointments.
                </p>

                <h2
                  id="root-canal-recovery-tips"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What should I do while recovering from a root canal?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Avoid placing any pressure on the affected area, and eat
                  carefully. Refrain from chewing on the side of the mouth where
                  you had your root canal. Opt for soft foods until your tooth
                  has healed. Usually, patients can manage any pain or
                  discomfort during this time with over-the-counter medication.
                </p>

                <h2
                  id="how-long-root-canal-recovery"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. How long will it take me to recover from my root canal?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. You may be uncomfortable for a few days after the
                  anesthesia wears off, especially if you were already dealing
                  with swelling and inflammation. You should be able to return
                  to your normal activities as soon as the day after the
                  procedure. If your pain worsens or does not subside, call our
                  office immediately.
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
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry is generally used to refer to any dental
                    work that improves the appearance (though not necessarily
                    the function) of a person’s teeth, gums, and/or bite.
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
                    Dental caries, commonly known as cavities, occur when proper
                    oral hygiene is not maintained, allowing plaque to form and
                    create tiny holes in the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Checkup</h2>
                  <p>
                    A dental checkup is an appointment where the dentist cleans
                    your teeth, identifies any signs of infection, and removes
                    the infection at least once every six months.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Filling</h2>
                  <p>
                    A dental filling is used to restore the structure of a tooth
                    by filling it with materials like metal, alloy, porcelain,
                    or plastic to restore its function and appearance.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Prophylaxis</h2>
                  <p>
                    Dental prophylaxis is a professional cleaning procedure that
                    removes plaque, tartar, and stains from the teeth to
                    maintain oral health.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Sealants</h2>
                  <p>
                    Dental sealants are resinous materials applied to the
                    chewing surfaces of the posterior teeth to prevent cavities
                    by shielding them from plaque.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist, also known as a dental surgeon, specializes in
                    diagnosing, preventing, and treating diseases and conditions
                    of the oral cavity.
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
                    Tooth enamel is the visible outer surface of the tooth that
                    serves as a protective barrier to the underlying dentin and
                    dental pulp.
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
