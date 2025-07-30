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
        <div className="bg-[url(/services/teethxpress.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">TeethXpress</h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Advances in dental technology have made replacing missing teeth
            easier than ever. Dental implants are a top option, offering
            replacements that look and feel natural. TeethXpress® is a procedure
            that allows the placement of multiple implants and implant-supported
            bridges quickly and with minimal discomfort.
          </p>
          <p className="font-tinos  text-justify">
            TeethXpress is available at Revital Dental in Temple and the
            surrounding area. Our dentists are certified TeethXpress
            providers.TeethXpress also includes the use of high-quality implants
            made by BioHorizons, the company that developed the method. Schedule
            an appointment by calling us at (254) 207-0708 to find out if this
            procedure can help you.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="teethxpress-procedure">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              The TeethXpress Treatment Process
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              TeethXpress is an innovative method of replacing a full arch of
              teeth on the lower or upper jaw or both. During the process, we
              will surgically insert between four and six implant posts. Then
              the replacement teeth are affixed to these posts. We may make a
              new set of replacement teeth or use the patient's existing
              dentures.
            </p>
            <p className="text-justify font-tinos mt-4">
              The TeethXpress procedure was explicitly created to be minimally
              invasive and uses specially designed implant posts available in a
              wide variety of shapes and sizes. Patients with some levels of
              bone loss may be able to undergo the process without having to
              receive a bone graft. However, if bone loss is significant, the
              procedure may involve additional steps.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “The TeethXpress procedure was explicitly created to be minimally
              invasive and uses specially designed implant posts available in a
              wide variety of shapes and sizes.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="benefits-of-teethxpress">
            <h2 className="font-cinzel text-2xl text-primary">
              Benefits of TeethXpress
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Traditional dental implants offer a teeth replacement option that
              is most similar to one's natural teeth. TeethXpress provides the
              benefits of traditional implants, plus several additional
              advantages:
            </p>
            <ol className="font-tinos text-justify list-disc pl-4 mt-2">
              <li>
                <span className="font-bold">Speed:</span>
                Patients can undergo the TeethXpress process in as little as one
                appointment. Dentists can insert the implants and place the
                teeth replacements in the space of three to four hours. Though
                some patients may need several appointments to achieve desired
                results, TeethXpress is still likely to be faster than more
                traditional options.
              </li>
              <li>
                <span className="font-bold">Easier Recovery:</span> Another
                common benefit tends to be less pain following the procedure.
                The process is more streamlined and designed to minimize trauma.
                Typically, patients recover quickly with the aid of prescription
                or over-the-counter analgesics and an ice pack during the first
                day or two following the procedure.
              </li>
              <li>
                <span className="font-bold">Multiple Teeth Replacement:</span>{" "}
                Originally designed to replace a large number of missing teeth,
                TeethXpress is most often used to replace a full arch. For
                people needing a complete replacement, TeethXpress can be a
                superior alternative to more traditional options.
              </li>
            </ol>
            <p className="font-tinos mt-2 text-justify">
              According to the American Academy of Implant Dentistry, implants
              are an essential factor in reducing the bone loss that typically
              occurs in the jaw after tooth loss. TeethXpress provides a
              quicker, easier way to get the benefits of implants. It also
              allows those with complete tooth loss to get implants.
            </p>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “TeethXpress provides a quicker, easier way to get the benefits of
              implants.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="teethxpress-candidate">
            <h2 className="font-cinzel text-2xl text-primary">
              Candidates for TeethXpress
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              TeethXpress may be a good option for those who need to replace all
              teeth in one or both jaws. Also, our team can work with patients
              to schedule TeethXpress as part of a treatment plan involving
              all-teeth extraction. Additionally, patients who have been wearing
              full dentures for some time may opt for TeethXpress. They often
              find that this teeth replacement option gives them more
              functionality and less hassle than dealing with dentures, which
              need frequent upkeep and replacement.
            </p>
            <p className="font-tinos mt-2">
              Patients who already have reduced jaw bone mass can also benefit
              from TeethXpress. Opting for traditional implants would likely
              mean these patients would need to undergo a separate bone graft
              procedure and wait for a few months afterward to receive implants.
              TeethXpress allows many patients with bone loss to enjoy the
              functionality and stability of implants without needing a bone
              graft.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “TeethXpress allows many patients with bone loss to enjoy the
                functionality and stability of implants without needing a bone
                graft.”
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

            <div className="mt-10" id="teethxpress-aftercare">
              <h2 className="font-cinzel text-2xl text-primary">
                After the TeethXpress Procedure
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                TeethXpress is associated with less discomfort than other
                implants procedures. However, your mouth will be sore after.
                Typically, patients experience bruising and swelling that is
                strongest around the third day after surgery. You may experience
                some bleeding which should subside a week after the procedure.
                If these symptoms worsen rather than subside, contact our office
                immediately.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Our team will provide aftercare instructions that should be
                followed exactly. The dentist will likely advise you to avoid
                smoking and brush the white part of your new teeth gently with a
                soft-bristled toothbrush. Do not use anything to clean
                underneath the teeth. Drink a lot of fluids and take this time
                to get plenty of rest. Patients may use a cold pack to ease
                swelling.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Adhere to the dentist's care guidelines and take any medication
                as directed. This will further help speed recovery. Also, our
                team will advise you on a hygiene regimen and recommend
                continuing with routine dental visits to promote long-term oral
                health.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Our team will provide aftercare instructions that should be
                followed exactly.”
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
                  href="#teethxpress-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens during a TeethXpress procedure?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#benefits-of-teethxpress"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the benefits of TeethXpress?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#teethxpress-candidate"
                >
                  Q.{" "}
                  <span className="underline">
                    Am I a good candidate for TeethXpress?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#teethxpress-aftercare"
                >
                  Q.{" "}
                  <span className="underline">
                    What should I expect after the procedure?
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
                  href="zoom-teeth-whitening#how-zoom-whitening-works"
                >
                  Q.{" "}
                  <span className="underline">
                    How does Zoom Whitening work?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="zoom-teeth-whitening#zoom-vs-home-whitening"
                >
                  Q.{" "}
                  <span className="underline">
                    Why choose Zoom whitening over whitening at home?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="zoom-teeth-whitening#preparing-for-whitening"
                >
                  Q.{" "}
                  <span className="underline">
                    What does a patient need to do to prepare for teeth
                    whitening?
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-gray-100 p-5 mt-10">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="teethxpress-duration"
                >
                  Q.{" "}
                  <span className="underline">
                    How long does the TeethXpress process take?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Typically, the process takes about three to four hours.
                  This time can vary depending on the specific treatment plan
                  your dentist recommends. In some cases, patients may need
                  additional procedures for optimal results.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="teethxpress-anesthesia"
                >
                  Q.{" "}
                  <span className="underline">
                    Does the TeethXpress placement use any anesthesia?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dentists usually employ a local anesthetic to manage pain
                  during the procedure. Some patients may benefit from sedation
                  or additional pain management techniques. Talk to your dentist
                  about circumstances that could affect the type of anesthesia
                  that is right for you.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="teethxpress-time-off"
                >
                  Q.{" "}
                  <span className="underline">
                    Will I have to schedule time off from work after getting
                    TeethXpress?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Many patients take a day or two off following the
                  procedure, especially if they are taking painkillers or
                  experiencing discomfort. Others may feel well enough to return
                  to work the next day.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="teethxpress-cost"
                >
                  Q.{" "}
                  <span className="underline">
                    How much does TeethXpress cost?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. There is no fixed cost, as each case varies based on the
                  patient’s needs and treatment plan. Options to help pay
                  include partial insurance coverage or a flexible spending
                  account. Though the cost may seem high, TeethXpress is a
                  long-term investment in your dental health.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="teethxpress-recovery"
                >
                  Q.{" "}
                  <span className="underline">
                    What can I do to speed recovery after TeethXpress?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Your provider may prescribe a medicated mouthwash for the
                  first two weeks. During recovery, stick to soft foods and
                  follow your dentist’s post-operative instructions carefully. A
                  low-strength water flosser may be introduced after healing
                  begins.
                </p>

                <h2
                  className="text-justify text-primary font-tinos mt-3"
                  id="teethxpress-oral-health"
                >
                  Q.{" "}
                  <span className="underline">
                    Can getting TeethXpress improve my oral health?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. TeethXpress offers the same bone-preserving benefits as
                  traditional dental implants and can reduce long-term oral
                  health issues. It's a durable and effective replacement
                  solution, but a consultation is needed to evaluate if it's
                  right for your situation.
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
                    An allograft involves transplanting bone or tissue from a
                    donor of the same species, often used in dental surgeries
                    like bone grafting for implants.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Alveolar Ridge</h2>
                  <p>
                    The alveolar ridge is the bony ridge that holds the teeth,
                    located in both the upper and lower jaws. It's crucial for
                    supporting dentures and implants.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Autograft</h2>
                  <p>
                    An autograft uses the patient’s own bone or tissue,
                    typically taken from the chin or jaw, for procedures such as
                    ridge augmentation or sinus lifts.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cap Splint</h2>
                  <p>
                    A cap splint is a custom dental device used to immobilize
                    fractured jawbones or support healing after maxillofacial
                    surgery.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentin Hypersensitivity</h2>
                  <p>
                    This condition causes sharp pain in teeth when exposed to
                    hot, cold, sweet, or acidic foods due to exposed dentin from
                    enamel loss.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Full Mouth Reconstruction</h2>
                  <p>
                    Full mouth reconstruction involves rebuilding or replacing
                    all teeth in the mouth using crowns, bridges, implants, and
                    more to restore function and aesthetics.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Implant-Supported Denture</h2>
                  <p>
                    These dentures are securely anchored using dental implants,
                    offering a more stable and natural-feeling alternative to
                    traditional dentures.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Occlusion</h2>
                  <p>
                    Occlusion refers to the way upper and lower teeth come
                    together when you bite. Misaligned occlusion can lead to jaw
                    pain, tooth wear, and TMJ disorders.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Orthognathic Surgery</h2>
                  <p>
                    This corrective jaw surgery helps align the jaws for better
                    function and facial symmetry, often used in cases of severe
                    bite issues.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Resorption</h2>
                  <p>
                    A rare condition where the body begins to break down and
                    absorb the structure of a tooth, often requiring endodontic
                    treatment or extraction.
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
                  href="/temple-tx/dental-checkup"
                  className="hover:underline"
                >
                  Dental Checkup
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/dental-implants"
                  className="hover:underline"
                >
                  Dental Implants
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/teeth-whitening"
                  className="hover:underline"
                >
                  Teeth Whitening
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/root-canal-treatment"
                  className="hover:underline"
                >
                  Root Canal Treatment
                </Link>
              </li>
              <li className="mt-5">
                <Link
                  href="/temple-tx/dental-crowns-and-dental-bridges"
                  className="hover:underline"
                >
                  Dental Crowns and Bridges
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
