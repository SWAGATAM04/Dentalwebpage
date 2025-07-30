"use client";
import React from "react";
import { FaYelp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-20 px-6">
        <div className="flex justify-center items-center flex-col">
          <img src="/ll.png" alt="" className="w-[70%] mb-4" />
          <p className="text-sm font-inter text-neutral-600 lowercase">
            https://revitaldentaltx.com
          </p>
        </div>

        <div className="flex md:justify-start  justify-center items-center">
          <div className="w-[90%]">
            <h2 className="uppercase text-xl font-cinzel text-center md:text-start mt-5 md:mt-0 mb-4">
              <span className="text-2xl">a</span>bout
            </h2>
            <p className="font-inter text-center mt-2 md:text-start text-neutral-700 leading-relaxed">
              We are committed to providing quality healthcare to families
              located in the Temple area and treat patients of all ages.
            </p>
            <hr className="mt-6 border-neutral-300" />
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-6 mt-6">
              <div>
                <h2 className="uppercase text-lg font-cinzel text-center md:text-start mb-3">
                  <span className="text-2xl">O</span>ffice
                </h2>
                <p className="font-semibold text-base font-inter text-center md:text-start text-neutral-800">
                  Revital Dental
                </p>
                <p className="font-inter text-center md:text-start text-neutral-700">
                  4311 S 31st Ste 145
                </p>
                <p className="font-inter text-center md:text-start text-neutral-700">
                  Temple, TX 76502
                </p>
              </div>
              <hr className="mt-5 md:hidden border-neutral-300" />
              <div>
                <h2 className="uppercase text-lg font-cinzel text-center md:text-start mb-3">
                  <span className="text-2xl">C</span>ontact
                </h2>
                <p className="font-semibold text-base font-inter text-center md:text-start text-neutral-800">
                  Phone :{" "}
                  <span className="text-primary font-bold">
                    {" "}
                    (254) 207-0708{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 px-6 md:px-20 flex-col md:flex-row py-6 flex justify-between items-center mt-5">
        <div className="text-xs text-neutral-600">
          <p className="mb-1 text-center font-inter">
            Copyright © 2025 All Rights Reserved Revital Dental.
          </p>
       
        </div>
        <div className="flex md:text-2xl text-lg space-x-4 mt-5 md:mt-0">
          <Link href="http://facebook.com/people/Revital-Dental/100083067285666/" className="text-neutral-600 hover:text-primary transition-colors">
            <FaFacebookF />
          </Link>
          <Link href="https://www.yelp.com/biz/revital-dental-temple" className="text-neutral-600 hover:text-primary transition-colors">
            <FaYelp />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
