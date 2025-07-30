'use client';
import { motion } from "framer-motion";
import Book from "@/components/Book";
import Dots from "@/components/Dots";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Hero />
      </motion.div>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Welcome />
      </motion.div>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Dots />
      </motion.div>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Map />
      </motion.div>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Book />
      </motion.div>
      <Footer />
    </>
  );
}
