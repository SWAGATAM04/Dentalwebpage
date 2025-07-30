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
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2 md:mt-[125px] border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/services/kid-friendly-dentist.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Kid Friendly Dentist
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            A kid friendly dentist is a dental professional who has the unique
            skills and experience to provide professional dental care and
            comfort for children and younger patients. Kid friendly dentists
            desire to provide children with positive experiences at the dental
            office. The office and waiting room are both designed to create a
            kid friendly environment, with friendly staff ready to assuage any
            fears or concerns.
          </p>
          <p className="font-tinos  text-justify">
            A kid friendly dentist is available at Revital Dental in Temple and
            the surrounding area. Get your child started on the road to good
            oral health. Call Revital Dental today at (254) 207-0708 to set up
            an appointment.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="kid-friendly-ages">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Ages Treated by a Kid Friendly Dentist
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Taking your child to a dentist tuned in specifically to children’s
              needs can help alleviate the stress and anxiety that comes with
              visits. This allows for a positive association at a young age with
              dental hygiene and helps curate healthy lifelong habits. Our staff
              is warm and used to engaging with children, allowing for easy and
              fun interactions as soon as each child walks through the door.
            </p>
            <p className="text-justify font-tinos mt-4">
              A kid friendly dentist can make dentistry a pleasant experience
              for children of any age, even your kindergartener. Kid friendly
              dentists have the expertise needed to make little ones feel safe
              and sound in the dentist’s chair. It is essential for children to
              get the dental care they need early on, so parents should never
              delay to get them the treatment they need.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “A kid friendly dentist can make dentistry a pleasant experience
              for children of any age, even your kindergartener.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="kid-friendly-unique">
            <h2 className="font-cinzel text-2xl text-primary">
              Qualities That Make a Kid Friendly Dentist Unique
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Our waiting room is kid friendly, ensuring our patients are at
              optimum comfort from the moment they walk through the door. We
              know that kids do not have the same patience as adults, so we do
              not think they need to have the same waiting space. Child friendly
              furniture, toys, reading materials, and other safe and fun items
              are available to entertain little hands and minds while they wait.
            </p>
            <p className="font-tinos mt-2 text-justify">
              We also know that not all supplies are created equal. Dental tools
              made for adults are often too large to work correctly for
              procedures in smaller mouths and can cause discomfort or even
              damage. Our instruments and supplies are varied to fit even our
              littlest patients' needs.
            </p>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Our waiting room is kid friendly, ensuring our patients are at
              optimum comfort from the moment they walk through the door.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="kid-friendly-conditions">
            <h2 className="font-cinzel text-2xl text-primary">
              Concerns Treated by a Kid Friendly Dentist
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              At Revital Dental, we check for issues that may develop from
              pacifier use, thumb sucking, or other common childhood habits that
              can affect dental health. We also watch for tooth decay signs that
              may come from poor nutrition or insufficient brushing and
              flossing.
            </p>
            <p className="font-tinos mt-2">
              It is also crucial to note that oral health is inextricably linked
              to overall health. Any tooth decay or gum disease may lead to
              other forms of disease later on. As such, a kid friendly dentist
              will closely monitor a child’s gum health. A kid friendly dentist
              must also closely monitor a child’s baby teeth, as these
              effectively act as placeholders for the permanent teeth.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “At Revital Dental,we provide general oral health examinations
                and visits, along with more specialized treatments based on the
                needs of our young patients.”
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

            <div className="mt-10" id="kid-friendly-treatments">
              <h2 className="font-cinzel text-2xl text-primary">
                General Treatments Provided
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Our team provides general oral health examinations and visits,
                along with more specialized treatments based on the needs of our
                young patients. We can provide sealants to help minimize the
                potential for decay and fillings when cavities become
                problematic in both baby teeth and permanent ones.
              </p>
              <p className="font-tinos mt-2 text-justify">
                We also keep a close watch on how teeth are coming in behind
                baby teeth. We can use technology to spot problems before they
                become an issue. This allows us to perform preventive procedures
                and to create any necessary game plans early on, such as
                utilizing braces or retainers to minimize the effects down the
                road.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Our team provides general oral health examinations and visits,
                along with more specialized treatments based on the needs of our
                young patients.”
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
                  href="#kid-friendly-ages"
                >
                  Q.{" "}
                  <span className="underline">
                    What ages does a kid friendly dentist treat?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#kid-friendly-unique"
                >
                  Q.{" "}
                  <span className="underline">
                    What makes a kid friendly dentist unique?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#kid-friendly-conditions"
                >
                  Q.{" "}
                  <span className="underline">
                    What conditions are treated by a kid friendly dentist?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#kid-friendly-treatments"
                >
                  Q.{" "}
                  <span className="underline">
                    What treatments does a kid friendly dentist provide?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#kid-friendly-techniques"
                >
                  Q.{" "}
                  <span className="underline">
                    What kind of techniques do kid friendly dentists use to calm
                    children?
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
                  href="laser-dentistry#laser-dentistry-procedures"
                >
                  Q.{" "}
                  <span className="underline">
                    What procedures can be performed with laser dentistry?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="laser-dentistry#laser-dentistry-procedures"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the benefits of laser dentistry?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="laser-dentistry#laser-dentistry-procedures"
                >
                  Q.{" "}
                  <span className="underline">
                    How often should I have a dental checkup with laser
                    treatments?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="kid-friendly-techniques">
              <h2 className="font-cinzel text-2xl text-primary">
                How Kid Friendly Dentists Work
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                A kid friendly dentist will also be familiar with behavioral
                techniques to help reduce fear and anxiety. These can include
                calming techniques and methods to help diffuse the stress that
                comes with painful or uncomfortable procedures. For instance,
                they may use the "teach back" technique to ensure that patients
                understand what they have learned about oral hygiene in a
                stress-free manner.
              </p>

              <p className="font-tinos mt-2 text-justify">
                A kid friendly dentist is perfect for children who are
                intimidated by the prospect of being in the dentist’s chair. We
                communicate with them in simple and easy-to-understand terms to
                explain what we are doing. We are careful not to use scary
                jargon or speak in a way that may cause a patient to feel
                intimidated. It is important for us that our patients understand
                what we are trying to convey and feel like they are part of the
                process. Trust is integral in a healthy relationship, and we
                know good communication is vital in achieving that.
              </p>
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “A kid friendly dentist is perfect for children who are
                intimidated by the prospect of being in the dentist’s chair.”
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
                    Will a kid friendly dentist explain oral hygiene to my
                    child?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes, at Revital Dental, we explain to your child how they
                  can maintain proper oral hygiene. We know this is new to our
                  patients and that it takes practice to create habits. We give
                  both our patients and their parents specific instructions on
                  what the children should do, how to do it, and how often.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Can we tour the kid friendly dentist office before the
                    appointment?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Give us a call, and we may be able to schedule an office
                  tour for you and your little one. This will allow you to meet
                  the staff to create more of a sense of familiarity when the
                  actual appointment comes around. It also gives your child a
                  chance to see where they will be sitting during the
                  appointment and ask questions about tools and other items that
                  may be in the office.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Can I be in the room with my child during the kid friendly
                    dentist visit?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. While you ultimately have the choice of whether to
                  accompany your child, keep in mind that the American Academy
                  of Pediatric Dentistry encourages parents of older children to
                  stay in the waiting room. Younger children may benefit from
                  having a parent present in the room, but it is best to keep
                  out of sight for the duration of the visit. As a silent
                  observer, you can allow the dentist to connect with the
                  patient and establish trust with your child.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Who is an ideal patient for a kid friendly dentist?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. An ideal patient for a kid friendly dentist is a youth who
                  may not be comfortable yet in an adult setting. Someone who
                  needs to learn about oral hygiene and is willing to learn and
                  practice dental health basics is a perfect candidate. The
                  child friendly atmosphere can help an otherwise unsure youth
                  wade into appointments in a pressure-free setting.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    What should I take to my child’s first kid friendly dentist
                    appointment?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. If your child has been to a dental professional in the
                  past, bring along the records. If there are medical issues
                  that might affect your child’s oral health, be sure to bring
                  them as well. Have all insurance cards and information on hand
                  so you can properly fill out the forms upon arrival and copies
                  can be made in the office. Finally, if your child has a
                  stuffed animal or another toy that offers emotional solace,
                  bring it along for extra comfort.
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
                  <h2 className="italic text-xl">Aligner Trays</h2>
                  <p>
                    With Invisalign® treatment, the patient will receive a
                    series of aligner trays and swap out each one for the next
                    one in the series every two weeks in order to gradually
                    straighten the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">
                    Blue Compliance Indicator (Invisalign® Teen)
                  </h2>
                  <p>
                    The blue compliance indicator is a small blue dot on the
                    aligners that will fade from blue to clear in order to
                    indicate if the patient is wearing the aligner for the
                    proper amount of time and where the patient is in the
                    Invisalign® process.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">ClinCheck® Software</h2>
                  <p>
                    ClinCheck® software allows professionals to map out the
                    straightening process the patient’s teeth will go through
                    with Invisalign® in great detail.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Gum Line</h2>
                  <p>
                    The gum line is the line in the mouth where the teeth and
                    gums meet. If a patient struggles with gum recession, then
                    the gum tissue around the teeth may begin to wear away.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Incisal Ridges</h2>
                  <p>
                    Incisal ridges are the portion of the crown of the tooth
                    that makes up the incisal portion and can be a direct cause
                    of overbite if they are extended too far.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">iTero Element® Scanner</h2>
                  <p>
                    An iTero Element® scanner allows professionals to create a
                    3D image of the patient’s teeth in minutes and predict what
                    it will take to move the teeth into proper alignment.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Malocclusion</h2>
                  <p>
                    Malocclusion is the condition in which the upper and lower
                    teeth do not meet properly when the bite is closed.
                    Conditions of malocclusion can include overbite, underbite,
                    crossbite and open bite; all of which are treatable with
                    Invisalign®.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Overbite</h2>
                  <p>
                    An overbite is a type of malocclusion that occurs when the
                    upper teeth jut out over the lower teeth, covering them and
                    causing other issues.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Polyurethane Resin</h2>
                  <p>
                    Polyurethane Resin is a USP Class VI medical grade, high
                    molecular weight compound that makes up the Invisalign®
                    aligners.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">SmartForce Attachments</h2>
                  <p>
                    SmartForce attachments are small attachments that
                    professionals place on the patient’s teeth before placing
                    aligners to help move the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Smart Track® Material</h2>
                  <p>
                    Smart Track® material is in Invisalign® aligners to increase
                    comfort, improve control of movement, increases the speed of
                    treatment and applies a gentle force to the teeth over time.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Smile-Scan</h2>
                  <p>
                    Smile-Scan analyzes the way a patient smiles by measuring
                    the position of the mouth and eyes before giving a score.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Vivera® Retainers</h2>
                  <p>
                    Vivera® retainers are a type of retainer that consists of
                    clear plastic material and helps to maintain orthodontic
                    corrections after a treatment.
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
