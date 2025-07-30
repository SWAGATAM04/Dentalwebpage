import React from "react";
import Image from "next/image";
import { Tinos } from "next/font/google";
import { Cinzel } from "next/font/google";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Book from "@/components/Book";
import Footer from "@/components/Footer";
import ScrollAppointmentBanner from "@/components/ScrollAppointmentBanner";
import Link from "next/link";

const cinzel = Cinzel({ weight: "400", subsets: ["latin"] });
const tinos = Tinos({ weight: "400", subsets: ["latin"] });

const CherryPage = () => {
  return (
    <div>
      <Navbar />

      <section
        className={`flex flex-col md:flex-row items-center md:mt-[125px] mt-[80px] bg-white px-6 py-10 shadow-xl gap-6 ${cinzel.className}`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/3 md:h-[420px] h-[200px] relative">
          <Image
            src="/cherry-logo.jpg"
            alt="Cherry Financing"
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Text + Form Section */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-8">
          {/* Left Column: Text */}
          <div className="md:w-1/2 space-y-4">
            <div>
              <p className="text-orange-500 text-lg">Cherry Financing</p>
              <h2 className="text-4xl font-semibold text-black">
                Get Care Now,
              </h2>
              <h2 className="text-4xl font-semibold text-black">Pay Later</h2>
            </div>

            <p className={`text-black text-justify ${tinos.className}`}>
              Let your money go further and take better control of your cash
              flow when you pay over time in smaller installments with Cherry.
            </p>

            <div className="space-y-2">
              {[
                "Quick Application",
                "Flexible Payment Options",
                "No Hard Credit Check",
                "High Approval Rate",
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
                <Link href="https://pay.withcherry.com/uniquecherryslug">
                  APPLY
                </Link>
              </button>
              <button
                href="https://patient.withcherry.com/"
                className="border border-green-500 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition"
              >
                <Link href="https://patient.withcherry.com/">
                  CHERRY PATIENT PORTAL
                </Link>
              </button>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="hidden lg:block w-fit">
            <Form />
          </div>
        </div>
      </section>
      <div className="bg-dark p-5 text-white mx-5">
        <h2 className="text-2xl font-cinzel mb-3">How It Works</h2>
        <hr />
        <p className="text-justify font-tinos mt-4">
          Choose from a range of monthly payment plans, with qualifying 0% APR
          options. Applying is simple and does not impact your credit score. If
          you're approved for financing, you can use your funds immediately.
          Manage your payment options using Cherry's self-serve patient portal.
        </p>
      </div>

      <div className="bg-gray-100 p-5 mt-10 mx-5 mb-4">
        <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
          Frequently Asked Questions
        </h2>
        <hr />
        <div className="flex flex-col">
          <h2 className="text-justify text-primary font-tinos mt-3">
            Q. How long is my approval valid for?
          </h2>
          <p className="font-tinos md:ps-4 mt-2">
            A. Approvals are valid for an undefined number of days. Once that
            time period expires, you're welcome to reapply.
          </p>

          <h2 className="text-justify text-primary font-tinos mt-3">
            Q. Can I increase my approval amount?
          </h2>
          <p className="font-tinos md:ps-4 mt-2">
            A. If you're eligible for an increase, you can request it through
            the Cherry Patient Portal. Eligibility varies. If you don't see the
            “request an increase” button, you're currently ineligible.
          </p>

          <h2 className="text-justify text-primary font-tinos mt-3">
            Q. Can I pay this off early?
          </h2>
          <p className="font-tinos md:ps-4 mt-2">
            A. Yes, there are no prepayment penalties. Paying early may even
            reduce your interest.
          </p>

          <h2 className="text-justify text-primary font-tinos mt-3">
            Q. Does my 0% APR offer expire?
          </h2>
          <p className="font-tinos md:ps-4 mt-2">
            A. No. If you're approved for a 0% APR term (e.g., 6 months), it
            stays valid for the entire term as long as you're current on
            payments.
          </p>

          <h2 className="text-justify text-primary font-tinos mt-3">
            Q. How much is my down payment and when is it due?
          </h2>
          <p className="font-tinos md:ps-4 mt-2">
            A. You'll see your down payment options after entering your purchase
            price. It’s due once the practice confirms the need for funds to
            proceed. Use a bank-issued debit or credit card* at checkout.
            <br />
            <span className="italic text-sm">
              *Pre-paid or credit card payments incur a 2.99% processing fee. No
              fee for traditional debit cards.
            </span>
          </p>

          <h2 className="text-justify text-primary font-tinos mt-3">
            Q. How are refunds handled?
          </h2>
          <p className="font-tinos md:ps-4 mt-2">
            A. Contact "Your Business Name" directly for refund requests.
            Refunds follow their policy and require their approval. Once
            authorized, Cherry will refund the amount and update your loan
            status.
            <br />
            If partial, your balance is adjusted. If full, any payments made are
            returned to you.
          </p>

          <h2 className="text-justify text-primary font-tinos mt-3">
            Q. Does Cherry report to the credit bureaus?
          </h2>
          <p className="font-tinos md:ps-4 mt-2">
            A. Yes, Cherry may report account status to Equifax, one of the
            major credit bureaus.
          </p>

          <h2 className="text-justify text-primary font-tinos mt-3">
            Q. Can missing payments hurt my credit?
          </h2>
          <p className="font-tinos md:ps-4 mt-2">
            A. Yes. Cherry is required to report all payment activity to credit
            bureaus, including late or missed payments, which could negatively
            impact your credit score.
          </p>
        </div>
      </div>

      <Book />
      <Footer />
      <ScrollAppointmentBanner />
    </div>
  );
};

export default CherryPage;
