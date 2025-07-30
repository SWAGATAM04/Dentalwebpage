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
        <div className="bg-[url(/educations/wisdom-teeth-extraction.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Wisdom Teeth Extraction
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Wisdom teeth extraction can help to relieve pain in a patient’s
            teeth that results from the wisdom teeth causing crowding issues or
            growing incorrectly. There are many different reasons you may need
            to extract your wisdom teeth. Wisdom teeth extraction removes the
            third set of molars in the back of your mouth.
          </p>
          <p className="font-tinos  text-justify">
            Wisdom teeth extraction is available at Revital Dental in Temple and
            the surrounding area. Most patients who need wisdom teeth extraction
            are in the stages of young adulthood. Call us today at (254)
            207-0708 to learn more and schedule an appointment.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="what-are-wisdom-teeth">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Understanding Wisdom Teeth Extraction
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              "Wisdom teeth" is the colloquial term for the third set of molars
              that sit in the back of the mouth. They are called such because
              they come between the more "mature" ages of 17 and 21. The
              emergence of wisdom teeth can be uncomfortable, even if they are
              emerging correctly. Wisdom teeth do not always necessitate
              extraction. On the contrary, properly aligned wisdom teeth may
              assist in chewing.
            </p>
            <p className="text-justify font-tinos mt-4">
              However, if there is no adequate space for the wisdom teeth to
              emerge or if the teeth are coming through in the wrong position,
              they may become impacted (or trapped in the jaw or under the
              gums). This may cause cysts, damage to neighboring teeth, gum
              disease, infection, pain, tooth, decay, and tumors. A dentist
              needs to monitor the patient’s wisdom teeth and determine the best
              course of action.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “”Wisdom teeth” is the colloquial term for the third set of molars
              that sit in the back of the mouth.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="risks-of-extraction">
            <h2 className="font-cinzel text-2xl text-primary">
              What to Know Before Wisdom Teeth Extraction
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Wisdom teeth extraction is a common and generally safe procedure
              when performed by qualified doctors. However, like any surgery,
              there is a small risk of complications. Our team takes all
              necessary steps to reduce these risks. Patients should contact our
              office immediately if they experience any of the following
              symptoms after surgery:
            </p>
            <ul className="font-tinos text-justify list-disc pl-4 mt-2">
              <li>
                Absent or dislodged blood clot at the extraction site after
                surgery
              </li>
              <li>High temperature</li>
              <li>Yellow or white discharge from the extraction site</li>
              <li>Persistent pain and swelling</li>
              <li>
                Persistent, heavy bleeding that does not subside over time
              </li>
              <li>Throbbing pain in the gum or jaw</li>
              <li>Unpleasant smell or taste in the mouth</li>
            </ul>
            <p className="font-tinos mt-2">
              Most complications are minor and treatable when addressed early.
              If any of these symptoms arise, prompt medical attention is
              essential.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Wisdom teeth extraction is commonly performed and generally safe
              when carried out by qualified doctors.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="preparing-for-extraction">
            <h2 className="font-cinzel text-2xl text-primary">
              Preparing for Wisdom Teeth Extraction
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              The first step to wisdom teeth extraction begins with an initial
              consultation. During this time, patients should be open and honest
              with their doctor about their entire medical history. This
              includes but is not limited to sharing any health problems they
              may have, any medications and supplements they may take regularly,
              and any lifestyle choices that may influence the success of the
              surgery. The consultation is also a good time for patients to
              assuage their anxieties by asking any questions about the
              procedure.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “The first step to wisdom teeth extraction begins with an
                initial consultation.”
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

            <div className="mt-10" id="after-bone-graft">
              <h2 className="font-cinzel text-2xl text-primary">
                What to Expect During Wisdom Teeth Extraction
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Generally, wisdom teeth extraction begins with the doctor
                injecting the patient with a local anesthetic to numb them to
                the pain of the procedure. The doctor will then cut into the gum
                tissue to expose the tooth and bone, making sure to remove any
                bone blocking access to the tooth root. Depending on how
                severely impacted the tooth is, the tooth may be divided into
                sections to be removed little by little.
              </p>
              <p className="font-tinos mt-2 text-justify">
                After extracting the tooth, the doctor will clean the extraction
                site of any debris. Afterward, the wound may or may not need
                stitches, and the doctor will pack gauze over the extraction
                site to control bleeding and to aid in the formation of a blood
                clot.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “After extracting the tooth, the doctor will clean the
                extraction site of any debris.”
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
                  href="will-i-need-a-bone-graft-for-dental-implants/#bone-grafting-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    How does the bone grafting procedure work?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="will-i-need-a-bone-graft-for-dental-implants/#after-bone-graft"
                >
                  Q.{" "}
                  <span className="underline">
                    What can I expect after a bone graft procedure?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="will-i-need-a-bone-graft-for-dental-implants/#alternatives-bone-grafting"
                >
                  Q.{" "}
                  <span className="underline">
                    What alternative options are available in place of bone
                    grafting?
                  </span>
                </a>
              </div>

              <h2 className="text-4xl text-center font-cinzel mb-3 mt-3">
                People Also Ask
              </h2>
              <hr />
              <div className="flex flex-col mb-4">
                <a className="text-justify font-tinos mt-3" href="#why-xrays">
                  Q. <span className="underline">Why are x-rays taken?</span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="alternatives-bone-grafting">
              <h2 className="font-cinzel text-2xl text-primary">
                Aftercare for Wisdom Teeth Extraction
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Patients should expect to rest for the remainder of the day
                following their wisdom teeth extraction. Though regular
                activities can be resumed as soon as the day after, patients
                should refrain from any strenuous activity for at least a week
                following their procedure. Otherwise, they run the risk of
                overexertion and dislodging the blood clot. Our team will
                provide patients with a customized recovery plan for their
                specific procedures.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Complications following wisdom teeth extraction are rare as long
                as patients follow this plan. However, patients should contact
                us immediately if they are experiencing any of the following:
              </p>
              <ul className="font-tinos text-justify list-disc pl-4 mt-2">
                <li>Blood or pus in nasal discharge</li>
                <li>Difficulty swallowing or breathing</li>
                <li>Excessive bleeding</li>
                <li>Fever</li>
                <li>Foul taste in the mouth</li>
                <li>Persistent numbness or loss of feeling</li>
                <li>Pus in or oozing from the socket</li>
                <li>Severe pain that does not subside</li>
                <li>Swelling that does not subside after two or three days</li>
              </ul>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Though regular activities can be resumed as soon as the day
                after, patients should refrain from any strenuous activity for
                at least a week following their procedure.”
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
                  Q. Will I be able to drive myself home after wisdom teeth
                  extraction?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. This varies from person to person and the type of
                  anesthesia used. Some patients who were only under a local
                  anesthetic may feel alert enough to drive back home after
                  their procedure, while some may not. However, those who have
                  undergone general anesthesia will need to make arrangements
                  for someone to drive them to and from the operation.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Will I be in pain after wisdom teeth extraction?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. You should expect some pain and discomfort following the
                  procedure. However, this is generally manageable through
                  administering ice packs and taking over-the-counter pain
                  relievers. The dentist may prescribe you antibiotics,
                  depending on the severity of your procedure.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. What can I eat after wisdom teeth extraction?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. You may not have much of an appetite after getting your
                  wisdom teeth extracted. Still, it is essential to stay
                  hydrated and eat well. Since you do not want to dislodge your
                  blood clot or stitches, stick to soft, low- or no-chew foods
                  for the first few days. Refrain from eating anything hot or
                  hard. Do not drink from a straw or slurp too vigorously from a
                  spoon.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. How old do I need to be to have my wisdom teeth extracted?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Wisdom teeth can be extracted at any age, depending on the
                  severity and type of impaction. However, complications are
                  less likely in younger adults.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Is there anything I should avoid while recovering from my
                  wisdom teeth extraction?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. You should exercise caution to avoid dislodging your blood
                  clot or stitches for the first week. This means avoiding
                  smoking, spitting, drinking from a straw, or anything else
                  that might disrupt your healing.
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
                  <h2 className="italic text-xl">Anesthesia</h2>
                  <p>
                    Anesthesia is a substance that medical professionals
                    administer in various forms (gas, injection, or pill) to
                    help patients not feel pain or sensations during surgical
                    operations.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Asymptomatic Wisdom Teeth</h2>
                  <p>
                    Asymptomatic wisdom teeth are wisdom teeth that show no
                    symptoms of irritation, inflammation, or overcrowding that
                    would require extraction.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry refers to any dental work that improves
                    the appearance (though not necessarily the function) of a
                    person’s teeth, gums, and/or bite.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cysts – Fluid Filled Sacs</h2>
                  <p>
                    Cysts are fluid-filled sacs that can also contain gas or pus
                    and may occur anywhere on the body, including in or around
                    the mouth and teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Checkup</h2>
                  <p>
                    A dental checkup is an appointment that involves cleaning
                    the teeth, identifying any signs of infection, and removing
                    them, ideally at least once every six months.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Prophylaxis</h2>
                  <p>
                    Dental prophylaxis is a professional and thorough cleaning
                    that involves the removal of plaque, calculus, and stains
                    from the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist, also known as a dental surgeon, is a doctor
                    specializing in the diagnosis, prevention, and treatment of
                    diseases and conditions of the oral cavity.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dry Socket</h2>
                  <p>
                    A dry socket can occur after tooth extraction when the blood
                    clot is lost, exposing white bone in the socket. It often
                    causes bad breath and an unpleasant taste in the mouth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Oral Surgery</h2>
                  <p>
                    Oral surgery focuses on procedures involving the mouth, jaw,
                    gums, or teeth, and can repair, enhance, or correct various
                    oral issues.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Pericoronitis</h2>
                  <p>
                    Pericoronitis is the inflammation of the soft tissue
                    surrounding the crown of a partially erupted tooth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Preventive Dentistry</h2>
                  <p>
                    Preventive dentistry focuses on maintaining oral health to
                    prevent plaque buildup, tartar formation, and infections.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Third Molars</h2>
                  <p>
                    Third molars, also known as wisdom teeth, often require
                    removal to prevent pain and other dental issues.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Vacuum Formed Mouthguard</h2>
                  <p>
                    A vacuum formed mouthguard is customized to fit an
                    individual’s teeth perfectly by molding a plastic material
                    to their dental impression.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Wisdom Teeth Impaction</h2>
                  <p>
                    Wisdom teeth impaction occurs when the teeth remain under
                    the gums and cannot be reached easily for cleaning, often
                    causing discomfort.
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
