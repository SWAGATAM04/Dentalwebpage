import DentalServiceSection from "@/components/about/DentalServiceSection";
import DrK from "@/components/about/DrK";
import DrSangeeta from "@/components/about/DrSangeeta";
import Employee from "@/components/about/Employee";
import GallerySection from "@/components/about/Gallery";
import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollAppointmentBanner from "@/components/ScrollAppointmentBanner";
import React from "react";

const page = () => {
  return <div>
    <Navbar/>
    <div className= "relative w-full  overflow-hidden md:mt-[125px] mt-[73px]">
        <DentalServiceSection/>
        <DrK/>
        <DrSangeeta/>
        <div className='bg-white text-orange-600 pt-8 py-11 text-center text-4xl mt-10'>. . . . . .</div>
        <GallerySection/>
        <Employee/>
    </div>
    <Book/>
    <Footer/>
    <ScrollAppointmentBanner/>
  </div>;
};

export default page;
