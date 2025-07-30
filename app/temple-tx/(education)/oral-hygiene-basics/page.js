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
        <div className="bg-[url(/educations/oral-hygiene-basics.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Oral Hygiene Basics
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Understanding oral hygiene basics allow people to better care for
            their teeth. However, the basics extend beyond the teeth — they
            pertain to the entirety of the mouth, including the gums, cheeks,
            and tongue. Oral health is critical to the body’s overall health.
          </p>
          <p className="font-tinos  text-justify">
            Starting good oral hygiene habits early in life can set everyone up
            for a lifetime of not only healthy smiles but also healthy bodies.
            To get started with an oral hygiene routine, contact our Revital
            Dental team in Temple at (254) 207-0708 to schedule an appointment.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="importance-oral-hygiene">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              The Importance of Good Oral Hygiene
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              The teeth are connected to the jaw bone in the face through the
              tooth’s roots. These roots are deeply ingrained in the bone to
              provide structure and strength to the mouth, which is important
              for biting, chewing, and speaking. Without an oral hygiene
              routine, the teeth risk the buildup of bacteria, otherwise known
              as tartar and plaque. This appears as a yellowish buildup on the
              teeth around the gum line.
            </p>
            <p className="text-justify font-tinos mt-4">
              Over time, if someone does not brush, floss, and rinse at home
              regularly and maintain their regular dental checkups, this buildup
              can start to affect the smile. If left alone, the bacteria can get
              beneath the gums and create dental pockets. These pockets occur
              when the gum tissue starts to pull away from the teeth. This may
              also cause gum recession, which may eventually expose the tooth
              roots. If the bacteria have access to the roots beneath the gum
              line, they may gain access to the body's bloodstream.
            </p>
            <p className="text-justify font-tinos mt-4">
              Once the bacteria can enter the bloodstream, the entire body may
              be at risk. Starting and following an oral hygiene routine will
              help prevent the buildup of bacteria and plaque on the teeth and
              keep the body safe. To protect the health of the smile is to
              protect the overall health of the body.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “To protect the health of the smile is to protect the overall
              health of the body.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="family-oral-health-education">
            <h2 className="font-cinzel text-2xl text-primary">
              Helping Family Members With Oral Hygiene
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Since oral health can affect body health, it is important to teach
              children and others about oral hygiene. Someone should talk to
              family members about the importance of dental care. If any family
              member has anxiety about visiting the dentist, speak to the dental
              team about options to make the experience less intimidating.
              Either way, every member of the family should learn about oral
              hygiene and what they can do to take care of their smile.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Children and adults should have similar oral hygiene routines.
              There is a common misconception that a child's oral health care is
              different or perhaps not as important since their baby teeth will
              fall out. Even though baby teeth are replaced by larger adult
              teeth, they are still connected to the jaw bone in the same way.
              With children, this buildup on baby teeth can weaken their adult
              teeth for the rest of their lives, putting them at a higher risk
              of decay and disease later. This is why dental professionals
              recommend that children start visiting their dentist regularly
              from an early age.
            </p>
            <p className="font-tinos mt-2 text-justify">
              No matter the age, everyone should prioritize oral health and
              establish an oral hygiene routine to keep themselves healthy. As
              they age, however, their smile may indeed have different needs.
              Along the way, they will have the help and guidance of our dental
              team, so they should be open with them and discuss their concerns.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “If any family member has anxiety about visiting the dentist,
              speak to the dental team about options to make the experience less
              intimidating.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="home-care-routine">
            <h2 className="font-cinzel text-2xl text-primary">
              What to Include in a Dental Care Routines
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              A dental care routine will depend on the individual's current oral
              health needs, but in general, most routines should include the
              following:
            </p>
            <h2 className="mt-2 font-cinzel text-2xl text-primary">Brushing</h2>
            <p className="font-tinos mt-2 text-justify">
              Everyone should brush their teeth twice a day with a
              dentist-recommended toothbrush and toothpaste. The right
              toothbrush should have soft bristles to prevent damage to the gums
              and tooth enamel. When brushing, use a small, pea-sized amount of
              toothpaste and move the brush against the teeth in a gentle
              circular motion. Move the toothbrush along the rows of the teeth
              at a 45-degree angle to brush at the gum line as well. Dental
              professionals recommend brushing for about two minutes. Make sure
              to get the top and bottom rows, as well as all surfaces of the
              teeth.
            </p>
            <h2 className="mt-2 font-cinzel text-2xl text-primary">Flossing</h2>
            <p className="font-tinos mt-2 text-justify">
              After brushing the surface of the teeth, everyone needs to floss
              to clean the spaces between their teeth. Flossing should be done
              at least once a day to remove anything that may have gotten stuck
              between the teeth and reduce the possibility of buildup. To floss,
              hold a piece of dental floss tightly between the hands with the
              thumb and index finger. Gently slide the floss up and down between
              the teeth, curving it at the base of each tooth to get beneath the
              gum line.
            </p>
            <h2 className="mt-2 font-cinzel text-2xl text-primary">Rinsing</h2>
            <p className="font-tinos mt-2 text-justify">
              After flossing, everyone should rinse with a dentist-approved
              mouthwash. Most mouthwashes will contain a small amount of
              fluoride to help keep the teeth healthy between regular dental
              checkups. Depending on the circumstances, the dentist may make a
              recommendation. Some people may need a mouthwash to help with bad
              breath, dry mouth, or gum disease. To rinse, follow the guidelines
              on the mouthwash bottle. Typically this means using a small amount
              of mouthwash poured into a clean cup to swish around the mouth for
              about a minute before spitting it out.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “A dental care routine will depend on current oral health
                needs.”
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

            <div className="mt-10" id="diet-and-tooth-decay">
              <h2 className="font-cinzel text-2xl text-primary">
                How to Keep the Smile Healthy and Prevent Tooth Decay
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Following a dental hygiene routine with at-home care and regular
                dental checkups will help keep the smile healthy and prevent
                tooth decay, but other things can be done as well. Certain foods
                and drinks, such as sodas and sugary sweets, can put the teeth
                at risk. The ingredients in these food items can attack the
                enamel on the teeth and weaken it, making them more susceptible
                to bacteria and decay.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Rather than eating and drinking sugary or acidic substances,
                everyone should try things like cheese, fruits, vegetables, and
                green and black teas. Cheese can combat erosion of the enamel,
                high-fiber fruits and vegetables can stimulate saliva production
                to help remove particles from the teeth, and certain teas combat
                bacteria that cause plaque. Plus, these healthy food items are
                good for the body, too, so while they are protecting the smile
                from tooth decay, they can give the body the nutrition it
                deserves.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Following a dental hygiene routine with at-home care and
                regular dental checkups will help you keep the smile healthy and
                prevent tooth decay.”
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
                  href="#importance-oral-hygiene"
                >
                  Q.{" "}
                  <span className="underline">
                    Why is good oral hygiene important?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#family-oral-health-education"
                >
                  Q.{" "}
                  <span className="underline">
                    Why is it important to educate the family about oral
                    healthcare?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#home-care-routine"
                >
                  Q.{" "}
                  <span className="underline">
                    What should a home oral care routine include?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#diet-and-tooth-decay"
                >
                  Q.{" "}
                  <span className="underline">
                    How can a person’s diet help with tooth decay?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#maintaining-healthy-smile"
                >
                  Q.{" "}
                  <span className="underline">
                    How does one maintain a healthy smile?
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
                  href="oral-cancer-screening/#oral-cancer-screening-frequency"
                >
                  Q.{" "}
                  <span className="underline">
                    How frequently should I get an oral cancer screening?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="oral-cancer-screening/#oral-cancer-risk-factors"
                >
                  Q.{" "}
                  <span className="underline">
                    Am I at high risk for developing oral cancer?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="oral-cancer-screening/#oral-cancer-screening-limits"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the limits of oral cancer screenings?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="maintaining-healthy-smile">
              <h2 className="font-cinzel text-2xl text-primary">
                Health Practices for a Healthy Smile
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                If the goal is to have a healthy smile for life, then there are
                a number of things anyone can do to achieve that goal. The first
                and quite possibly most important thing to do is to stay in
                touch with the dental team. The dental professionals on this
                team will come to know each individual and their smile over
                time. They can provide guidance as the mouth ages and changes.
                To build and maintain this connection, regular dental checkups
                are important.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Dental checkups are normally recommended every six months,
                though some individuals may need them more often if they have a
                history of oral health concerns or gum disease. Between
                checkups, everyone should continue their at-home oral hygiene
                routine. While a checkup is a great way to remove the buildup of
                plaque and polish the teeth to protect them from bacteria,
                everyone needs to remove particles and bacteria daily to keep
                their smile healthy.
              </p>
              <p className="font-tinos mt-2 text-justify">
                A daily routine should include brushing, flossing, and rinsing
                with a mouthwash. The dentist may also recommend different or
                additional steps depending on the smile’s health. Additional
                recommendations may include:
              </p>
              <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
                <li>Drinking fluoridated water</li>
                <li>Quitting smoking and other tobacco products</li>
                <li>Limiting alcoholic, caffeinated or sugary drinks</li>
                <li>Controlling other diseases that may affect the teeth</li>
                <li>Deep cleaning</li>
              </ul>
            </div>
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “While a checkup is a great way to remove the buildup of plaque
                and polish the teeth to protect them from bacteria, everyone
                needs to remove particles and bacteria daily to keep their smile
                healthy.”
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
                  id="importance-oral-hygiene"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Why is oral hygiene important?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Aside from being one of the first things people notice
                  about others, the smile is important to the body's overall
                  health. Maintaining oral hygiene helps protect the body from
                  disease. By keeping the smile healthy and attending regular
                  dental checkups, everyone can support their overall health.
                </p>

                <h2
                  id="oral-care-children"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Is oral care important for children?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes. While baby teeth are temporary, how they are cared for
                  affects future oral health. Good habits early in life can lead
                  to a lifetime of healthy smiles.
                </p>

                <h2
                  id="dental-care-routine"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What should be included in a dental care routine?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A complete routine typically includes brushing at least
                  twice daily, flossing once a day, rinsing with
                  dentist-approved mouthwash, and attending regular dental
                  checkups. Individual needs may vary slightly.
                </p>

                <h2
                  id="what-is-dental-checkup"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What is a dental checkup?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A dental checkup usually includes a cleaning and
                  examination. The dental professional removes plaque and tartar
                  and checks for any signs of decay, gum disease, or other oral
                  health issues.
                </p>

                <h2
                  id="maintain-healthy-smile"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. How can anyone keep their smile healthy?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Healthy habits such as quitting smoking, limiting dark
                  drinks like coffee or tea, and practicing consistent oral care
                  at home — along with regular dental visits — help maintain a
                  clean, bright smile.
                </p>

                <h2
                  id="cleaning-vs-deep-cleaning"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Are dental cleanings and deep cleanings different?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes. Both involve cleaning the teeth, but deep cleanings
                  also include scaling and root planing below the gum line. Deep
                  cleaning is usually recommended for those with gum disease or
                  heavy buildup.
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
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry refers to dental procedures that enhance
                    the appearance of the teeth, gums, or bite. Common
                    treatments include teeth whitening, veneers, and bonding.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Decay</h2>
                  <p>
                    Tooth decay occurs when bacteria in plaque produce acid that
                    erodes tooth enamel, leading to cavities and infection if
                    left untreated.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Checkup</h2>
                  <p>
                    A dental checkup is a routine appointment where a dentist
                    examines oral health, removes plaque and tartar, and checks
                    for signs of gum disease or cavities.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Filling</h2>
                  <p>
                    A dental filling is used to restore a tooth damaged by
                    decay. It involves cleaning the cavity and filling it with
                    materials like composite, porcelain, or amalgam.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Prophylaxis</h2>
                  <p>
                    Dental prophylaxis is a professional cleaning procedure that
                    removes plaque, tartar, and stains from teeth to prevent
                    oral diseases.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Sealants</h2>
                  <p>
                    Dental sealants are thin protective coatings applied to the
                    chewing surfaces of molars to prevent cavities by blocking
                    bacteria and food.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Gingivitis</h2>
                  <p>
                    Gingivitis is a mild form of gum disease that causes
                    redness, swelling, and bleeding gums. It is reversible with
                    proper oral hygiene and professional care.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tartar</h2>
                  <p>
                    Tartar, also known as calculus, is hardened plaque that
                    sticks to the teeth and can only be removed by a dental
                    professional during cleanings.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Enamel</h2>
                  <p>
                    Tooth enamel is the hard, outermost layer of a tooth that
                    protects it from decay and damage. It cannot regenerate once
                    worn down.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist is a licensed medical professional who diagnoses,
                    treats, and helps prevent diseases and conditions affecting
                    the oral cavity.
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
