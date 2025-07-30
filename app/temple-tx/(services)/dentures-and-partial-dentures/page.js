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
        <div className="bg-[url(/services/dentures-and-partial-dentures.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Dentures and Partial Dentures
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Dentures and partial dentures are most commonly associated with
            seniors, but many young people wear them too. According to the
            National Health and Nutrition Examination Survey, adult tooth loss
            has been on the decline since the 1960s. Even so, many Americans
            rely on dentures to improve not just their smiles but also their
            speech and ability to chew food comfortably.
          </p>
          <p className="font-tinos  text-justify">
            Dentures and partial dentures are available at Revital Dental in
            Temple and the surrounding area. Dentures and partial dentures fill
            any tooth loss gaps with false teeth. We offer a range of tooth
            replacement options. If you are ready to learn more about the
            available options, reach out to us by phone (254) 207-0708.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="why-dentures-preferred">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Reasons to Get Dentures
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Dentures are not the only tooth replacement option. Implants have
              become more popular in recent years. However, not every tooth
              replacement option is the right choice for every patient. Here are
              several reasons people may prefer dentures to other tooth
              replacement options:
            </p>

            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>
                <span className="font-bold">
                  Dentures may be an affordable solution to tooth loss:{" "}
                </span>{" "}
                Other tooth replacement options tend to cost more, usually
                contingent upon the insurance provider. Traditional full
                dentures and partial dentures are typically more cost-efficient
                than the alternatives. This is true even when factoring in the
                cost of replacing the dentures every 5-10 years.
              </li>
              <li>
                <span className="font-bold">
                  Lower risk associated with denture procedure:
                </span>{" "}
                The patient prefers to avoid the risk of a potentially painful
                bridge failure. Dental implants require more invasive surgery,
                by nature making them riskier. Age and potential bone loss can
                increase risk.
              </li>
              <li>
                <span className="font-bold">
                  Dentures can be received relatively quickly:
                </span>{" "}
                The denture process typically takes less time than implant
                procedures. Dental implants may take a year or more to complete.
                Healing periods between steps may last for up to six months.
              </li>
            </ul>
            <p className="text-justify font-tinos mt-4">
              The tooth replacement method the patient chooses depends on their
              unique situation. One should examine all their options when making
              this decision. Our team can offer the guidance you need in
              deciding if dentures are right for you.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Traditional full dentures and partial dentures are typically more
              cost-efficient than the alternatives.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="how-dentures-made">
            <h2 className="font-cinzel text-2xl text-primary">
              The Denture Process
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Typically, the process starts with taking an impression of the
              mouth. From that, the dentist creates a model using dental stone
              as a cast. Our team may ask the patient to try several different
              sets of sterilized dentures to determine the ideal fit and the
              preferred color and size of teeth. After these selections, the
              dentist may make some adjustments to the cast. Then, it is sent to
              a dental laboratory for completion.
            </p>
            <p className="font-tinos mt-2 text-justify">
              At the dental laboratory, technicians may create a wax version of
              the gum line. These technicians make the replacement teeth from a
              material that closely resembles real teeth known as resin.
              Virtually, all labs seek approval from the patient and dentist
              before proceeding with the finishing touches.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Following approval, the technician removes the wax and replaces it
              with acrylic. This looks far more realistic. This process entails
              boiling the wax out, drilling holes in the teeth, and injecting
              the acrylic. Finally, technicians clean up the teeth and polish
              the appliance. The entire process may require the patient to visit
              the dentist’s office four to five times.
            </p>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Our team may ask the patient to try several different sets of
              sterilized dentures to determine the ideal fit as well as the
              preferred color and size of teeth.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="types-of-dentures">
            <h2 className="font-cinzel text-2xl text-primary">
              Types of Dentures
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              When considering dentures, patients can choose between full and
              partial dentures. In fact, over the past few years, dentists
              created hybrids with other dental treatments to provide patients
              with even more options. Here is a shortlist of denture options one
              can consider:
            </p>
            <ol className="font-tinos text-justify list-disc pl-4 mt-2">
              <li>
                <span className="font-bold">Full Dentures.</span> Most commonly
                used by seniors, these dentures replace a complete set of teeth.
                They sit directly on top of the gums. Some patients are good
                candidates for immediate placement. In this instance, the
                dentist places the previously made dentures immediately after
                the extraction of the teeth. For everyone else, the dentist may
                recommend waiting eight to 12 weeks after teeth removal.
              </li>
              <li>
                <span className="font-bold">Partial Dentures.</span> If the
                patient still has a number of healthy teeth left, the dentist
                may recommend partial dentures. This usually requires the use of
                a metal piece to which a pink-colored base is attached. The
                metal helps to anchor the false teeth to the natural teeth to
                prevent movement.
              </li>
              <li>
                <span className="font-bold">Implant-Supported Dentures.</span>{" "}
                This method blends dental implants with dentures. Instead of
                anchoring all the teeth in place individually, the dentist may
                add several dental implants that hold the full upper and/or
                lower set in place. Dentists may use this for partial dentures
                too. These dentures are not removable once in place. Please note
                that not all patients are good candidates for these.
              </li>
              <li>
                <span className="font-bold">
                  Overdentures or Snap-In Dentures.
                </span>{" "}
                When patients prefer to retain the ability to remove dentures,
                but like the stability of implants, they may opt for
                overdentures. These are handy in instances where a person has no
                teeth, as the dental implants provide an anchor that the teeth
                can sit on. For even more excellent stability, patients may opt
                for snap-in dentures. In this case, the implants have locator
                receptors, and the dentures have attachments. These work
                together to snap the dentures into place for a snug fit.
              </li>
            </ol>
            <p className="font-tinos mt-2">
              The option a patient chooses will depend on that patient's unique
              situation and health. Our team is available to discuss all the
              options. We will help you determine the right one for you.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “In fact, over the past few years, dentists created hybrids with
                other dental treatments to provide patients with even more
                options.”
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

            <div className="mt-10" id="cleaning-dentures">
              <h2 className="font-cinzel text-2xl text-primary">
                How to Care for Dentures
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
                Dentures do require ongoing maintenance outside of the typical
                oral hygiene routine. Many people believe they can set dentures
                down by the side of the bed. However, this can lead to warping
                and cracking over time.
              </p>

              <p className="font-tinos mt-2 text-justify">
                Patients should soak dentures overnight. Avoid hot water, as
                this may also cause warping. Never use a denture solution
                directly in the mouth. Patients who use denture solutions should
                rinse thoroughly before placing dentures in the mouth because
                denture solutions should not be ingested. Our team can help you
                determine if a solution is right for your regimen.
              </p>

              <p className="font-tinos mt-2 text-justify">
                It is also important to note that dentures require cleaning,
                just like regular teeth do. Whenever possible, remove dentures
                after eating or drinking and rinse them to get rid of food
                particles. Patients should brush dentures at least once per day.
                Dentists recommend a soft-bristled brush as a more abrasive
                brush may cause damage over time.
              </p>

              <p className="font-tinos mt-2 text-justify">
                Even if no teeth remain, continued dental hygiene is essential.
                Brush the teeth and gums and floss any remaining teeth. Patients
                may use gauze or a soft bristled toothbrush to clean the cheeks,
                roof of the mouth, and the tongue. Finally, people who use
                adhesives should take care to remove it.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Dentures do require ongoing maintenance outside of the typical
                oral hygiene routine.”
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
                  href="#why-dentures-preferred"
                >
                  Q.{" "}
                  <span className="underline">
                    Why are dentures a preferred treatment?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#how-dentures-made"
                >
                  Q. <span className="underline">How are dentures made?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#types-of-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the different types of dentures?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#cleaning-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    How should I clean my dentures?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#dentures-longevity"
                >
                  Q.{" "}
                  <span className="underline">How long do dentures last?</span>
                </a>
              </div>
              <h2 className="text-4xl text-center font-cinzel mb-3 mt-3">
                People Also Ask
              </h2>
              <hr />
              <div className="flex flex-col">
                <a
                  className="text-justify font-tinos mt-3"
                  href="emergency-dentist#what-makes-different"
                >
                  Q.{" "}
                  <span className="underline">
                    What makes emergency dentistry different?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="emergency-dentist#when-to-seek"
                >
                  Q.{" "}
                  <span className="underline">
                    When should I seek emergency dental care?
                  </span>
                </a>

                <a
                  className="text-justify font-tinos mt-3"
                  href="emergency-dentist#what-to-do"
                >
                  Q.{" "}
                  <span className="underline">
                    What should I do while waiting to get to the emergency
                    dentist?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="dentures-longevity">
              <h2 className="font-cinzel text-2xl text-primary">
                Common Myths and Misconceptions
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                One of the most common myths we hear about dentures is that once
                a patient gets their dentures created and placed, they are set
                for life. Dentures typically last for five to 10 years. Since
                this is a long time, patients may wonder how to know when they
                need new dentures. If the color has changed dramatically or
                there is physical damage, dentures may need replacement. A
                common telling sign is when they no longer fit securely.
              </p>

              <p className="font-tinos mt-2 text-justify">
                Some people believe that if they remove all their teeth and get
                full dentures, they will never need to set foot in a dentist’s
                office again.This is not true and regular dental visits are
                still necessary. Dentists are in the best position to tell
                patients whether or not they need to get their dentures repaired
                or replaced. In fact, the dentist may adjust dentures during
                annual or bi-annual visits to keep them fitting correctly.
                Dentists also pay keen attention to gum health especially if the
                patient smokes or suffers from an illness affecting the gums.
              </p>
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Some people may also believe that if they remove all their
                teeth and get full dentures, they’ll never need to set foot in a
                dentist’s office again.”
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
                    Will dentures change my appearance?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. When patients lose their teeth, the bone loss may begin to
                  cause the cheek to look hollow and sunken. Dentures can help
                  to fill out space and retain the face’s original shape. Having
                  a full set of teeth that look beautiful and healthy also
                  improves a person’s appearance and overall confidence.
                </p>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Is it difficult to eat with dentures?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Eating with dentures may feel uncomfortable for a few
                  weeks, just as when people get braces for the first time.
                  However, over time, it becomes easier. In the beginning, try
                  to stay away from foods that meet any of the following
                  criteria:
                </p>
                <div className="list-disc pl-6 font-tinos mt-2">
                  <ul>
                    <li>Sharp-edged</li>
                    <li>Tough</li>
                    <li>Sticky</li>
                    <li>Hot</li>
                  </ul>
                </div>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Are there any risks associated with dentures?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A 2015 study published by the National Institute of Health
                  found that seniors who wore dentures while they slept
                  long-term faced a higher risk of developing pneumonia. The CDC
                  also believes dentures may negatively affect nutrition. They
                  attribute this to denture wearers avoiding fruits and
                  vegetables because they are more difficult to chew.
                </p>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. <span className="underline">Are Adhesives Necessary?</span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Patients who have lost all their natural teeth may require
                  adhesives, while others may not. Even so, patients with only
                  partial tooth loss may choose to use adhesives for additional
                  support. It may also assist people suffering from neurological
                  disabilities, dry mouth, or who take certain medications.
                </p>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">How Much Do Dentures Cost?</span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dentures tend to be more affordable than other tooth
                  replacement options. Each case is different, and the
                  individual selections a patient makes can affect the cost.
                  Generally speaking, dentures offer the most cost-effective
                  full tooth replacement. When patients choose hybrid options
                  that involve implants, the price may increase for each implant
                  added.
                </p>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">How Can I Pay for Dentures?</span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dental insurance may cover the cost of dentures. However,
                  there may be a waiting period due to a pre-existing condition.
                  Some patients rely on dental savings plans. Your insurance
                  provider can discuss with you the details.
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
                  <h2 className="italic text-xl">Alveolar Bone</h2>
                  <p>
                    The alveolar bone is the bone surrounding the root of the
                    tooth that keeps the tooth in place.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Clasp</h2>
                  <p>
                    A clasp is a device that holds a removable partial denture
                    prosthesis to the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Denture Base</h2>
                  <p>
                    The denture base is the part of the denture that connects
                    the artificial teeth with the soft tissue of the gums.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Edentulous</h2>
                  <p>
                    Edentulous is a term that applies to people who do not have
                    any teeth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontal Disease</h2>
                  <p>
                    Periodontal disease is a condition that causes inflammation
                    of the gingival tissues and membrane of the teeth, leading
                    to tooth loss without professional treatment.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Pontic</h2>
                  <p>
                    Pontic is another term for an artificial tooth on a fixed
                    partial denture.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Rebase</h2>
                  <p>
                    Rebase is the process of refitting denture prosthesis by
                    replacing the base material.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Reline</h2>
                  <p>
                    Reline is when a professional resurfaces the surface of the
                    prosthesis with a new base material.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Resin/Acrylic</h2>
                  <p>
                    Resin and Acrylic are resinous materials that can be
                    components in a denture base.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Stomatitis</h2>
                  <p>
                    Stomatitis is the inflammation of the tissue that is
                    underlying a denture that does not fit properly. It can also
                    result from other oral health factors.
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
