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
        <div className="bg-[url(/educations/bone-graft-for-dental-implants.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Will I Need a Bone Graft for Dental Implants
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            A bone graft, or bone augmentation, for dental implants ensures a
            strong and secure hold for the artificial tooth before placing the
            implant. Bone grafting rebuilds density in the jawbone after the
            loss of bone occurs, which commonly results after tooth loss.
            Although a bone graft procedure may not be a desirable experience,
            it makes a massive difference in the long-term results of the dental
            implant process.
          </p>
          <p className="font-tinos  text-justify">
            Our team offers a bone graft for dental implants when necessary,
            along with providing assistance and treatment throughout the entire
            dental implant process. There is no reason to live with the
            insecurity of a missing tooth or several teeth. We can help restore
            the appearance of one's smile and the function of the teeth.
          </p>
          <p className="font-tinos  text-justify">
            To learn more about a bone graft for dental implants, give us a call
            at (254) 207-0708 to schedule a consultation visit.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="bone-grafting-definition">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Bone Grafting for Dental Implants
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              The Centers for Disease Control and Prevention, CDC, states that
              nearly 1 in 5 adults aged 65 or older has lost all of their teeth.
              It is essential to restore lost bone in the jawbone through bone
              graft treatment after tooth loss. By completing this procedure, it
              can help to ensure a future implant and artificial tooth are
              properly supported long-term. A bone graft is a procedure to
              rebuild lost bone inside the jaw and recommended for patients who
              experience loss of bone density as a result of tooth loss.
            </p>
            <p className="text-justify font-tinos mt-4">
              Good candidates for a bone graft include those who are planning to
              undergo implants for missing teeth, those with tooth loss or gum
              disease, and those with bone loss. While the jaw and gums support
              natural teeth, the teeth also help to stimulate the jawbone. When
              tooth loss occurs, the supporting bone loses its primary purpose,
              and the process of resorption begins. This process occurs when the
              body absorbs calcium from the jawbone and distributes it to other
              areas of the body.
            </p>
            <p className="text-justify font-tinos mt-4">
              The lack of calcium in the jawbone makes it more difficult to
              support the implant. Resorption will also mean there is less bone
              that can bond with the titanium implant and help to solidify a
              firm hold of the implant. The purpose of a bone graft procedure is
              to rebuild bone density that may have become lost after the
              natural tooth becomes lost.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “It is essential to restore lost bone in the jawbone through bone
              graft treatment after tooth loss.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="bone-grafting-need">
            <h2 className="font-cinzel text-2xl text-primary">
              When Bone Grafting Is Necessary
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              A dentist typically uses a thorough oral examination and X-rays to
              determine if a bone grafting procedure is necessary for dental
              implants. The jawbone commonly loses density as a result of
              unreplaced missing teeth. Bone is preserved by the pressure and
              stimulus caused by chewing, but when no tooth is present, the
              jawbone is no longer stimulated and starts to deteriorate. It is
              important to correct bone deterioration as it can cause more
              damaging complications, such as tooth loss. Dentists perform bone
              grafts using bone from the patient’s body, usually from the back
              of the jawbone.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-cinzel text-2xl text-primary">
              Signs That Indicate a Bone Graft Is Necessary
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              There are two primary signs the dentist may look for when
              determining if a bone graft is necessary. The first sign is the
              thickness of the bone inside the jaw. The second sign is how soft
              or hard the existing bone is. If the bone inside the jaw is thin,
              then we will likely recommend a bone graft. If the bone is soft,
              then a minor bone graft might be required to strengthen the bone
              and provide additional support for the implant. According to Mayo
              Clinic, periodontitis damages the soft tissue, destroying the bone
              that supports your teeth, so gum disease is a sign of potential
              bone loss as well.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “If the bone is soft, then a minor bone graft might be required to
              strengthen the bone and provide additional support for the
              implant.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="bone-grafting-procedure">
            <h2 className="font-cinzel text-2xl text-primary">
              How Bone Grafting Works
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              There are different types of bone grafts, including autograft,
              allograft, xenograft, and an alloplastic graft. The majority of
              procedures use real bone, although a synthetic bone material is
              used for an alloplastic graft. The steps involved depend on the
              type of bone grafting procedure. It typically involves taking
              either natural bone or a synthetic bone material and placing it
              into the jawbone above the missing tooth through a minor surgical
              procedure. The bone must then heal and fuse with the existing bone
              in the area, which typically takes two to three months.
            </p>

            <p className="font-tinos mt-2">
              Bone grafting is a fairly common procedure. A 2016 study found
              that nearly half of 800 people with dental implants required a
              bone graft prior to implantation. A bone graft is beneficial for
              patients as it provides additional support to the dental implant.
              Otherwise, the dental implant placement process may have a higher
              risk of failure. The bone augmentation can improve the appearance,
              function, and oral health of the patient.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “It typically involves taking either natural bone or a synthetic
                bone material and placing it into the jawbone above the missing
                tooth through a minor surgical procedure.”
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
                What to Expect After the Procedure
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Although patients differ in their condition, oral health status,
                and recovery, there are various ways to help the jaw heal
                faster. Bone grafting may result in swelling, bruising, and
                minor bleeding of the gums after the procedure. To recover as
                quickly as possible, stick to soft foods and avoid dark
                beverages or sugary drinks. Along with that, it is essential to
                practice good oral hygiene through a gentle brushing and
                flossing routine and using mouthwash.
              </p>
              <p className="font-tinos mt-2 text-justify">
                We encourage patients to look for a qualified oral surgeon or
                implant specialist as they are most skilled at bone graft
                procedures. It is important that patients play an active role in
                their oral health and understand their treatments as well as who
                is performing them. As your dentist about their experience with
                bone grafting and how successful their treatments were. It may
                be a good idea to look at before-and-after testimonials and
                patient reviews online prior to scheduling a consultation.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “To recover as quickly as possible, stick to soft foods and
                avoid dark beverages or sugary drinks.”
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
                  href="#bone-grafting-definition"
                >
                  Q. <span className="underline">What is bone grafting?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#bone-grafting-need"
                >
                  Q.{" "}
                  <span className="underline">
                    When is bone grafting necessary?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#bone-grafting-procedure"
                >
                  Q.{" "}
                  <span className="underline">
                    How does the bone grafting procedure work?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#after-bone-graft"
                >
                  Q.{" "}
                  <span className="underline">
                    What can I expect after a bone graft procedure?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#alternatives-bone-grafting"
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
                <a
                  className="text-justify font-tinos mt-3"
                  href="why-are-my-gums-bleeding/#gum-bleeding-triggers"
                >
                  Q.{" "}
                  <span className="underline">
                    What lifestyle factors can trigger gum bleeding?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="why-are-my-gums-bleeding/#treat-bleeding-gums-home"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I treat bleeding gums at home?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="why-are-my-gums-bleeding/#after-gum-treatment"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens after my office visit for gum bleeding?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="alternatives-bone-grafting">
              <h2 className="font-cinzel text-2xl text-primary">
                Alternative Options
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Although bone grafting may be the only procedure available for
                single-tooth implants, there are a few alternative options for
                those seeking full arch or full mouth dental implants. These
                options include a full arch prosthesis or a zygomatic
                prosthesis.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Full arch prostheses are fastened to the jaw using 4 to 6
                implants that provide adequate security. For this procedure to
                work, the patient must have 4 to 6 areas of sufficient bone to
                effectively place the implant arch. Zygomatic prostheses are
                long implants embedded in the zygoma, or cheekbone, as opposed
                to the jawbone. Since the implant is not attached to the jaw, a
                bone graft is not necessary even for patients with low bone
                density. A review of 2,402 Zygomatic implants showed a success
                rate of 96.7% over a 12-year period. Zygomatic implants are
                found to be the safest, most effective procedure in oral
                surgery.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Since the implant is not attached to the jaw, a bone graft is
                not necessary even for patients with low bone density.”
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
                  Q. How do platelet-rich plasma and bone morphogenetic protein
                  improve bone growth?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Your dentist may recommend platelet-rich plasma and bone
                  morphogenetic protein as a way to help regenerate and
                  strengthen bone in the bone grafting process. Platelet-rich
                  plasma may also increase the healing time after the procedure.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. What qualities should I look for in a dental professional
                  who offers bone grafting?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Experience is always an advantage when choosing a bone
                  grafting specialist, but it is not the only factor to
                  consider. It is helpful to have a conversation with the
                  professional and ask questions about their education and
                  training. You can also ask for more information about how the
                  process works and who else will assist in the treatment
                  process.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. What possible options might a dentist recommend aside from
                  bone grafting?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. If the patient intends to replace a damaged or loose tooth
                  with a dental implant, then tooth extraction is necessary. A
                  dentist may also recommend treatment for periodontal disease
                  in addition to a bone grafting procedure, along with filling
                  and repairing any eroded or damaged teeth.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. How long does a bone grafting procedure take?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The length of bone augmentation is dependent upon the type
                  of procedure (autograft, alloplastic, and more), the location
                  of the bone graft, and various other factors. However, it is
                  typically a routine procedure that does not take more than
                  several hours at most. The patient can return home soon after
                  the process is complete.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. How much does bone grafting cost?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The cost of bone grafting depends on the patient’s case,
                  the severity of their condition, and the type of bone graft
                  being performed. On average, bone grafting can cost between
                  $200 to $1,200 per graft. We encourage patients to speak with
                  their insurance provider to find out what their plan covers
                  and learn about any copays that the procedure may entail.
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
                  <h2 className="italic text-xl">Calculus</h2>
                  <p>
                    Calculus, also known as tartar, refers to the hardened
                    dental plaque that forms on teeth due to a lack of proper
                    oral hygiene.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Gingival Flap Surgery</h2>
                  <p>
                    Gingival flap surgery is a procedure in which the
                    periodontist temporarily separates the gums from the teeth
                    to reach the root and nearby bone for treatment.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">
                    Necrotizing Periodontal Diseases
                  </h2>
                  <p>
                    Necrotizing periodontal diseases involve the death of
                    gingival tissues, often accompanied by lesions in the mouth
                    and severe pain.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periapical Abscess</h2>
                  <p>
                    A periapical abscess is an inflammatory condition where pus
                    collects in the tissues surrounding the tip of a tooth root.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontal Ligament</h2>
                  <p>
                    The periodontal ligament is a connective tissue that holds
                    the tooth in place by attaching it to the surrounding bone
                    and can be destroyed by advanced gum disease.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontitis</h2>
                  <p>
                    Periodontitis is a severe gum infection that damages the
                    soft tissue and destroys the bone supporting your teeth,
                    often caused by poor oral hygiene.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontium</h2>
                  <p>
                    The periodontium is the structure that supports the teeth,
                    including the gums, periodontal ligament, cementum, and
                    alveolar bone.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Root Scaling and Planing</h2>
                  <p>
                    Root scaling and planing is a non-surgical procedure where
                    plaque and calculus are removed from below the gum line, and
                    root surfaces are smoothed to promote healing.
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
