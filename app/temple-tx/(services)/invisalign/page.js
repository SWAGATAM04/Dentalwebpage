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
        <div className="bg-[url(/services/invisalign.webp)] bg-cover my-10"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">Invisalign</h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Clear orthodontic aligners have been growing in popularity for many
            years. One of the most recognizable brands is Invisalign®.
            Invisalign is a form of orthodontics that uses clear tray aligners
            to straighten the teeth instead of the traditional mouthful of metal
            wires and brackets.
          </p>
          <p className="font-tinos  text-justify">
            If you are a candidate, Invisalign provides an almost invisible way
            to straighten your teeth. Invisalign is available at Revital Dental
            in Temple and the surrounding area. Call us at (254) 207-0708 to
            schedule an appointment to see if this treatment is right for you.
          </p>
        </div>
        <div className="py-5">
          <Form />
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="what-is-invisalign">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              An Alternative to Traditional Braces
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Invisalign uses clear tray aligners instead of metal wires and
              brackets to straighten teeth. The aligners are constructed of a
              solid piece of plastic strong enough to shift the teeth and move
              them into the correct position. Every one or two weeks, the
              patient receives a new tray with an updated aligner. Each tray
              will feel slightly different as it shifts and moves the teeth.
            </p>
            <p className="text-justify font-tinos mt-4">
              The idea of using removable aligners to adjust the teeth is not a
              new concept. The idea was first introduced in the 1940s.
              Additional improvements were made through the decades, though the
              technology did not improve until the 1990s. The creators of
              Invisalign developed their mass-market system in 1999.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Invisalign uses clear tray aligners instead of metal wires and
              brackets to straighten teeth.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="invisalign-steps">
            <h2 className="font-cinzel text-2xl text-primary">
              Invisalign’s Three Steps
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              The first step to getting Invisalign is by scheduling a
              consultation with our dentist. Our staff will look at overall oral
              health and take impressions of the mouth. Next, that impression is
              sent to Invisalign and used to make aligners unique to the
              patient’s mouth for a custom fit.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Once the aligners have been made, our staff will make sure they
              fit well, answer any questions, and go over the treatment plan.
              Patients will be expected to wear the aligners for 20 to 22 hours
              a day to get results. Regular checkups with Revital Dental will
              make sure treatment stays on track. Our staff will determine how
              often new aligners are needed.
            </p>
            <p className="font-tinos mt-2 text-justify">
              After the desired results have been achieved, the patient may be
              expected to wear a retainer to maintain those results. This will
              prevent teeth from gradually shifting back to their initial
              position. Our doctor will provide specific instructions on how
              often a retainer will need to be worn.
            </p>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “The first step to getting Invisalign is by scheduling a
              consultation with our dentist.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="invisalign-pros-cons">
            <h2 className="font-cinzel text-2xl text-primary">
              The Pros and Cons of Invisalign
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              Invisalign is not without its pros and cons. Thanks to the fact
              that they are next-to-invisible, both teens and adults can avoid
              the discomfort and self-consciousness of traditional metal braces.
              Many patients also appreciate that they can take Invisalign
              aligners out to eat, brush and floss, or for social situations.
            </p>
            <p className="font-tinos mt-2">
              However, since they are removable, they are more likely to be lost
              or broken. Patients also need to be careful about what they drink
              when their aligners are in. Anything but water should be avoided.
              Liquids can seep into the plastic and stay there until the aligner
              is removed. This can lead to staining of the aligner and even
              tooth decay.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Thanks to the fact that they are next-to-invisible, both teens
                and adults can avoid the discomfort and self-consciousness that
                comes with traditional metal braces.”
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

            <div className="mt-10" id="invisalign-care">
              <h2 className="font-cinzel text-2xl text-primary">
                Taking Care of Invisalign Aligners
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                It is essential to use and care for Invisalign aligners
                appropriately to have a good orthodontic outcome. For Invisalign
                to work, the aligners have to be worn for the recommended number
                of hours a day. Patients should try to limit the number of times
                they remove the aligners since it will not take long to exceed
                the time they can be left off.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="font-cinzel text-2xl text-primary">
                Cleaning the Aligners
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Patients should always rinse the aligners when they are removed.
                Bacteria and plaque can easily attach to them, which can cause
                an unpleasant odor and sticky feeling on the teeth. Aligners
                should be cleaned with a clear and unscented antibacterial soap.
                If patients use toothpaste to clean the aligners, they should
                make sure that it is not a brand with whitening agents, as these
                can wear away the plastic.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Invisalign aligners need to be stored in a case when not being
                worn. Leaving them out in the open exposes them to germs that
                can then be transferred to the mouth.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="font-cinzel text-2xl text-primary">
                Maintain Proper Oral Hygiene
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Proper oral hygiene is essential at any time, but it is a bit
                easier when using Invisalign versus traditional braces. Food and
                plaque can get trapped in conventional braces' metal brackets
                and can be tough to brush. Since Invisalign aligners can be
                removed, it is simple to brush and floss and replace the
                aligners when finished.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Make sure to brush and floss after meals before putting the
                aligners back in the mouth. This helps keep food particles from
                getting stuck in the aligners, leading to bacteria growth and
                bad breath.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “It is essential to use and care for Invisalign aligners
                appropriately to have a good orthodontic outcome.”
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
                  href="#what-is-invisalign"
                >
                  Q. <span className="underline">What is Invisalign?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#invisalign-steps"
                >
                  Q.{" "}
                  <span className="underline">
                    What steps are involved with getting Invisalign?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#invisalign-pros-cons"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the pros and cons of Invisalign?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#invisalign-care"
                >
                  Q.{" "}
                  <span className="underline">
                    How do I use and care for Invisalign aligners?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#invisalign-duration"
                >
                  Q.{" "}
                  <span className="underline">
                    How long will I have to wear Invisalign aligners?
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
                  href="kid-friendly-dentist#kid-friendly-conditions"
                >
                  Q.{" "}
                  <span className="underline">
                    What conditions are treated by a kid friendly dentist?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="kid-friendly-dentist#kid-friendly-treatments"
                >
                  Q.{" "}
                  <span className="underline">
                    What treatments does a kid friendly dentist provide?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="kid-friendly-dentist#kid-friendly-techniques"
                >
                  Q.{" "}
                  <span className="underline">
                    What kind of techniques do kid friendly dentists use to calm
                    children?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="invisalign-duration">
              <h2 className="font-cinzel text-2xl text-primary">
                Length of Treatment Time
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Only a dentist can reasonably predict the length of the
                Invisalign treatment time. The severity of the condition, how
                well the patient adheres to the treatment plan, and age are all
                factors. On average, it takes less than two years to see
                results. The treatment time for teens is typically a little
                shorter than adults.
              </p>

              <p className="font-tinos mt-2 text-justify">
                Following all the recommended guidelines will ensure patients do
                not extend the treatment time. Patients need to switch trays on
                schedule and talk to our staff if there are any concerns. If the
                aligners are not worn for the recommended time, the teeth may
                start to shift back to their original positions.
              </p>
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Only a dentist can reasonably predict the length of the
                Invisalign treatment time.”
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
                  id="what-is-invisalign"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. <span className="underline">What is Invisalign?</span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Invisalign is an orthodontic technique that uses clear,
                  plastic aligners to straighten the teeth. The aligners are
                  created from a custom mold of the patient’s mouth, and new
                  aligner trays are provided at specific intervals as part of
                  the treatment process. Revital Dental will develop the
                  treatment plan and monitor the process.
                </p>

                <h2
                  id="invisalign-advantages"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the advantages of Invisalign over traditional metal
                    braces?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Since Invisalign aligners are clear, patients can avoid the
                  unsightly look of a mouth filled with metal brackets and
                  wires. They are also more comfortable to wear and allow the
                  patient fewer restrictions on foods they can eat. Since they
                  are removable, it is easier to brush and floss your teeth.
                </p>

                <h2
                  id="invisalign-treatment-time"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q.{" "}
                  <span className="underline">
                    How long is the treatment time?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Treatment, on average, takes less than two years but can
                  vary depending on the patient’s specific concerns. Aligners
                  must be worn for 20-22 hours a day to see results. If a
                  patient does not wear the aligners for the recommended amount
                  of time, treatment results will take longer.
                </p>

                <h2
                  id="invisalign-pain"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. <span className="underline">Does Invisalign hurt?</span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Unlike traditional metal braces, Invisalign’s clear
                  aligners do not rub and poke at the soft tissues of the mouth.
                  Patients can expect to feel some sensitivity for a day or two
                  when a new set of aligners are put in. This means the teeth
                  are shifting and the aligners are working. Any discomfort
                  should go away quickly.
                </p>

                <h2
                  id="invisalign-care"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q.{" "}
                  <span className="underline">
                    How do you keep Invisalign aligners clean?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Aligners should be cleaned with a clear and unscented
                  antibacterial soap or toothpaste. If using toothpaste, make
                  sure it is not a brand with whitening agents, which can wear
                  away the plastic. Always brush and floss after meals before
                  putting the aligners back in the mouth. This helps keep food
                  particles from getting stuck, which can lead to bacteria
                  growth and bad breath.
                </p>

                <h2
                  id="invisalign-foods"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q.{" "}
                  <span className="underline">
                    Do I have to avoid any foods with Invisalign?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. If you eat with the aligners in place, make sure to avoid
                  hard foods like raw carrots and sticky foods like gum. Hard
                  and sticky candies should also be avoided. You will also want
                  to avoid drinking anything other than water when the aligners
                  are in place. Coffee and tea can stain the aligners, while
                  soda has acidic properties that can break down the plastic.
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
