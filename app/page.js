import Book from "@/components/Book";
import Dots from "@/components/Dots";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import ScrollAppointmentBanner from "@/components/ScrollAppointmentBanner";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Dots />
      <Map />
      <Book />
      <Footer />
      <ScrollAppointmentBanner/>
    </>
  );
}
