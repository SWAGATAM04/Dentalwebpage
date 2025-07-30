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
        <div className="bg-[url(/educations/do-i-have-sleep-apnea.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Do I Have Sleep Apnea
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            For many patients, treating sleep apnea can improve their overall
            quality of life. The condition can be obtrusive and affect you in
            both your sleeping and waking hours. Sleep apnea may be treatable
            through dental care.
          </p>
          <p className="font-tinos  text-justify">
            Solutions for sleep apnea are available at Revital Dental in Temple
            and the surrounding area. Maintaining your dental health can also
            benefit your sleep. We may be able to help. Call us today at (254)
            207-0708 to schedule an appointment and learn more.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="what-is-sleep-apnea">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Understanding Sleep Apnea
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Obstructive sleep apnea is a condition where patients have
              something blocking (or obstructing) part or all of their upper
              airway in their sleep, forcing the diaphragm and chest muscles to
              work harder to pull air into the lungs. This condition may cause
              the patient's breathing to become very shallow or even briefly
              stop altogether. Eventually, when the patient begins to breathe
              again, it will be accompanied by a loud gasp, snort, or body jerk.
            </p>
            <p className="text-justify font-tinos mt-4">
              Many patients are not aware that they have this condition and may
              think they are only suffering from inadequate sleep. Dentists may
              be able to recognize and treat the signs of sleep apnea, as these
              symptoms often take a toll on the mouth and jaw.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Obstructive sleep apnea is a condition where patients have
              something blocking (or obstructing) part or all of their upper
              airway in their sleep, forcing the diaphragm and chest muscles to
              work harder to pull air into the lungs.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div
            className="mt-10"
            id="difference-between-sleep-apnea-and-other-sleep-disorders"
          >
            <h2 className="font-cinzel text-2xl text-primary">
              Sleep Apnea and Other Sleep Disorders
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              There are several different types of sleep disorders. Each falls
              into six different categories: insomnias, hypersomnias,
              sleep-related breathing disorders, circadian rhythm sleep-wake
              disorders, parasomnias, and sleep movement disorders. While
              insomnia is a type of sleep disorder where the patient is unable
              to fall or stay asleep, hypersomnia is a group of sleep disorders
              that cause a patient to feel excessively sleepy.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Parasomnias are a group of sleep disorders that consist of having
              undesirable experiences while falling asleep, sleeping, or waking
              up. Sleep apnea can be an underlying cause of parasomnias, since
              intermittently losing breath inevitably puts stress on the body.
              The same can be said for circadian rhythm sleep-wake disorders
              (where the sleep times are out of alignment) and sleep movement
              disorders (where movement during or before sleep interferes with
              sleep). Sleep apnea itself is a sleep-related breathing disorder,
              where there is difficulty breathing during sleep.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “There are several different types of sleep disorders.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="causes-of-sleep-apnea">
            <h2 className="font-cinzel text-2xl text-primary">
              Causes of Sleep Apnea
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Many patients are surprised to learn about the link between sleep
              apnea and dental health. Often, the pauses in breathing associated
              with sleep apnea are caused by flaccid muscles in the back of the
              throat, a too-large tongue, or a too-small jaw. Tooth grinding, or
              bruxism, is the first sign of sleep apnea. This may cause tooth
              wear and breakage, along with inflamed and receding gums. Revital
              Dental can conduct a thorough oral examination to determine
              whether or not a patient has sleep apnea.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Many patients are surprised to learn about the link between
                sleep apnea and dental health.”
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

            <div className="mt-10" id="signs-of-sleep-apnea">
              <h2 className="font-cinzel text-2xl text-primary">
                Recognizing Sleep Apnea
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Some groups may be more at risk of developing sleep apnea than
                others. Age, for instance, increases one's chance of developing
                sleep apnea. The condition is also more common in younger men
                than in younger women. Unhealthy lifestyle habits, such as
                excessive alcohol consumption, smoking, and poor diet, may also
                contribute. Taking steps towards a healthier lifestyle may
                lessen an individual's risk of developing sleep apnea.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Being able to recognize the signs of sleep apnea is crucial.
                Patients should watch out for sore throat upon waking, excessive
                daytime sleeping, restless sleep, decreased libido, waking
                during the night, high blood pressure, and gastroesophageal
                reflux disease (GERD). Children may also exhibit different
                symptoms of sleep apnea than adults. These may include
                bedwetting, choking, drooling, excessive nighttime sweatiness,
                learning and behavior issues, and problems at school.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Children may also exhibit different symptoms of sleep apnea
                than adults.”
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
                  href="#what-is-sleep-apnea"
                >
                  Q. <span className="underline">What is sleep apnea?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#difference-between-sleep-apnea-and-other-sleep-disorders"
                >
                  Q.{" "}
                  <span className="underline">
                    What is the difference between sleep apnea and other sleep
                    disorders?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#causes-of-sleep-apnea"
                >
                  Q. <span className="underline">What causes sleep apnea?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#signs-of-sleep-apnea"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the signs of sleep apnea?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#managing-sleep-apnea"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I manage my sleep apnea?
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
                  href="braces-for-teens/#alternatives-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    What is the process for getting alternatives to braces?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="braces-for-teens/#alternatives-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the benefits of alternatives to braces?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="braces-for-teens/#alternatives-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    How do teens care for orthodontic alternatives?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="managing-sleep-apnea">
              <h2 className="font-cinzel text-2xl text-primary">
                Treating Sleep Apnea
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Luckily, there are many different ways to treat sleep apnea
                including oral appliances. Patients who are good candidates for
                oral appliances must have impressions of their teeth and return
                for a fitting during a later appointment. It may be necessary
                for patients to have another sleep test while wearing the device
                to ensure its efficacy. Further office visits may be required to
                make adjustments. These devices are unobtrusive and easy to
                travel with, as they do not require any electricity.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Other options include continuous positive air pressure (CPAP)
                machines and surgery. These are more involved treatments that
                may benefit those with more severe cases of sleep apnea. Revital
                Dental can help patients determine which treatment is right for
                them.
              </p>
            </div>
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Revital Dental can help patients determine which treatment is
                right for them.”
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
                  id="can-i-still-travel-if-i-have-sleep-apnea"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Can I still travel if I have sleep apnea?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes, you can still travel safely with sleep apnea. For best
                  results, you should take your CPAP machine and other dental
                  appliances with you—particularly on any trips that will take
                  longer than one or two days.
                </p>

                <h2
                  id="risks-of-untreated-sleep-apnea"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Are there any risks associated with untreated sleep apnea?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. There is a direct correlation between sleep apnea and other
                  health issues, like high blood pressure. Constantly waking up
                  in the middle of the night puts stress on your body, causing
                  the hormone systems to work overtime and increase blood
                  pressure. The low oxygen and stress associated with sleep
                  apnea are also related to heart disease.
                </p>

                <h2
                  id="is-snoring-always-a-sign-of-sleep-apnea"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Is snoring always a sign of sleep apnea?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. No. Snoring is very common. However, snoring that wakes you
                  up in the middle of the night can be a sign of sleep apnea.
                  Snoring associated with sleep apnea also tends to be deeper,
                  louder, and more consistent. It may also be interrupted with
                  gasps, choking, or pauses. Patients should see a doctor if
                  they experience a combination of any of these symptoms.
                </p>

                <h2
                  id="how-common-is-sleep-apnea"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. How common is sleep apnea?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The American Sleep Apnea Association estimates that over 20
                  million Americans suffer from sleep apnea. Furthermore, they
                  estimate that as much as 80 percent of moderate and severe
                  cases of obstructive sleep apnea are undiagnosed.
                </p>

                <h2
                  id="can-sleep-apnea-be-cured"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Can sleep apnea be cured?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Unfortunately, no. However, there are many different ways
                  you can minimize and manage the symptoms of sleep apnea.
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
