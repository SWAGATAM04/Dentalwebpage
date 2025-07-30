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
        <div className="bg-[url(/educations/i-think-my-gums-are-receding.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            I Think My Gums Are Receding
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            For many patients, solutions for gum recession can enhance both
            their appearance and overall dental health. Gum recession can happen
            even to people with good oral hygiene. There are many options
            available to treat receding gums.
          </p>
          <p className="font-tinos  text-justify">
            Solutions for gum recession are available at Revital Dental in
            Temple and the surrounding area. Call us today at (254) 207-0708 to
            schedule an appointment and learn more.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="symptoms-of-gum-recession">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Signs of Gum Recession
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              For some patients, gum recession may set in subtly and go
              unnoticed for some time. The aesthetic changes following gum
              recession are the most apparent. These include visibly shrinking
              gums and exposed tooth roots. However, other common symptoms
              include:
            </p>

            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>Bad breath</li>
              <li>Bleeding after brushing or flossing</li>
              <li>Loose teeth</li>
              <li>Pain at the gum line</li>
              <li>Red, swollen gums</li>
            </ul>
            <p className="text-justify font-tinos mt-4">
              Patients may experience concerns about their appearance during
              this time, as well as a fear of losing teeth. Additionally, teeth
              may be particularly sensitive to cold and heat (due to the exposed
              tooth roots).
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “The aesthetic changes that follow gum recession are the most
              apparent.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="why-gums-receding">
            <h2 className="font-cinzel text-2xl text-primary">
              Causes of Gum Recession
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Several factors can cause a person's gums to recede, regardless of
              the state of their oral hygiene. These include aggressive
              toothbrushing, body piercing, clenching or grinding teeth, crooked
              teeth or a misaligned bite, hormonal changes, insufficient dental
              care, periodontal disease, and tobacco products. Genetics may also
              be a factor. For example, parents may pass down weak, thin gums to
              their children.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Some patients may also find that their gums are receding only on
              one side. Usually, this is due to plaque concentrating in one area
              of the mouth. This may be due to neglecting oral hygiene on one
              side of the mouth, as excess plaque and bacteria at the gum line
              may release toxic substances that destroy gum tissue.
              Alternatively, a misaligned bite may cause more wear and tear to
              one side of the mouth than the other. Gum recession may happen on
              only one tooth for similar reasons or some physical trauma.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Several different factors can cause a person’s gums to recede,
              regardless of the state of their oral hygiene.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="what-to-do-about-receding-gums">
            <h2 className="font-cinzel text-2xl text-primary">
              Treating Gum Recession
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Some cases of gum recession are mild enough that they do not need
              treatment. Still, several treatment options are available for
              those who need it. These include composite restoration;
              desensitizing agents, varnishes, and dentin bonding agents;
              orthodontics; pink porcelain or composite; removable gum veneers;
              and surgery. Composite restorations are natural-looking,
              tooth-colored composite resins that cover the surface of the tooth
              root. They may be used to close any black gaps between the teeth.
            </p>
            <p className="font-tinos mt-2">
              Desensitizing agents, varnishes, and dentin bonding agents may
              help reduce the exposed tooth root's sensitivity. By lessening the
              nerve symptoms, desensitizing agents may ease the brushing of
              sensitive teeth and promote oral hygiene. Orthodontics (or braces)
              are more of a long-term treatment that moves a tooth slowly over
              time. This repositioning can help correct the margin of the gum.
            </p>
            <p className="font-tinos mt-2">
              Pink porcelain or composite that matches the color of the gums can
              be applied to the "gaps" to reduce the appearance of receded gums.
              Similarly, removable gum veneers, which usually consist of acrylic
              or silicone, can be applied in the "gaps." Finally, more severe
              cases of gum recession may necessitate surgery, usually a gum
              graft.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Some cases of gum recession are mild enough not to need
                treatment.”
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

            <div className="mt-10" id="prevent-gum-recession">
              <h2 className="font-cinzel text-2xl text-primary">
                Preventing Gum Recession
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Proper dental care is the number one way to prevent gum
                recession. This involves maintaining a routine where patients
                brush their teeth with a soft-bristled toothbrush at least twice
                daily and floss at least once daily. Patients should also see a
                dentist at least twice a year. At-risk patients may require more
                frequent visits, and a dentist that notices signs of gum
                recession may want to keep a vigilant watch that it does not
                worsen.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Patients may want to consider asking their dentist how to
                properly brush their teeth to ensure that they are not brushing
                too aggressively. Additionally, healthy lifestyle choices like
                eating a well-balanced diet and not smoking can lessen one's
                chances of gum recession dramatically.
              </p>
              <p className="font-tinos mt-2 text-justify">
                It can be dangerous to leave gum recession untreated. Exposed
                tooth roots may decay very quickly, necessitating various
                expensive, painful procedures. Teeth may get more sensitive, and
                the appearance of the smile may become imbalanced. It is also
                possible that what patients are experiencing is not gum
                recession but undetected, worsening gum disease.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “…healthy lifestyle choices like eating a well-balanced diet and
                not smoking can lessen one’s chances of gum recession
                dramatically.”
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
                  href="#symptoms-of-gum-recession"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the symptoms of gum recession?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#why-gums-receding"
                >
                  Q.{" "}
                  <span className="underline">Why are my gums receding?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#what-to-do-about-receding-gums"
                >
                  Q.{" "}
                  <span className="underline">
                    What can I do about receding gums?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#prevent-gum-recession"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I prevent gum recession?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#risk-for-receding-gums"
                >
                  Q.{" "}
                  <span className="underline">
                    Am I at risk for receding gums?
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
                  href="do-i-need-a-root-canal/#pain-addressed-by-root-canal"
                >
                  Q.{" "}
                  <span className="underline">
                    What kind of pain can be addressed by a root canal
                    treatment?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="do-i-need-a-root-canal/#need-root-canal"
                >
                  Q.{" "}
                  <span className="underline">
                    Do I need a root canal procedure?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="do-i-need-a-root-canal/#when-root-canal-necessary"
                ></a>
              </div>
            </div>

            <div className="mt-10" id="risk-for-receding-gums">
              <h2 className="font-cinzel text-2xl text-primary">
                Risk Factors for Gum Recession
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Certain populations may be more at risk for gum recession than
                others. For instance, age is a leading risk factor for receding
                gums, with almost 90% of people older than 65 reporting a
                receding gum in at least one tooth. Those who smoke or use other
                tobacco products also face an increased risk of receding gums,
                as they are more likely to develop sticky plaque.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Some genetic conditions, like thin or weak gums, may also
                increase one's chances of gum recession. Patients with diabetes
                may also be more likely to have their gums recede, as the
                disease might reduce the blood supply to the gums.
              </p>
            </div>
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Certain populations may be more at risk for gum recession than
                others.”
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
                  id="gum-recession-bone-loss"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Is gum recession correlated with bone loss?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes. The bone around the tooth dissolves when the gum
                  recedes. It is crucial to address gum recession right away to
                  prevent further bone loss.
                </p>

                <h2
                  id="gum-grafting-root-coverage"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Will gum grafting cover all my exposed tooth roots?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Some teeth are easier to treat with gum grafting than
                  others. Teeth with long, exposed roots, fillings, or notches
                  can be difficult to cover, as can teeth with lost bone between
                  the teeth. Early treatment is key for optimum results. Our
                  team can help go over the options with you.
                </p>

                <h2
                  id="dentures-cause-gum-recession"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Can poor-fitting partial dentures cause gum recession?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Anything that causes excess wear and tear on the gums and
                  jaw can contribute to gum recession. Contact us if you are
                  unsure if your dentures are fitting correctly.
                </p>

                <h2
                  id="gum-recession-diagnosis"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. How is gum recession diagnosed?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Our team will start with reviewing your medical history to
                  identify any factors that could be causing or aggravating your
                  symptoms. Then, you will undergo an examination to look for
                  any plaque and tartar buildup, along with any easy bleeding.
                  The dentist will then measure the pocket depth of the groove
                  between your gums and teeth. If necessary, our team will take
                  X-rays to check for any bone loss.
                </p>

                <h2
                  id="gum-recession-tooth-loss"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Can gum recession cause me to lose teeth?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes. Gum recession involves the loss of attached tissue,
                  which protects the tooth and gums from any foreign materials
                  that can infect the bone. Losing the attached tissue leads to
                  a significant loss of bone support for the tooth.
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
