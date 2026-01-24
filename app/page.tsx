"use client";

import { animate } from "framer-motion";
import{ motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import About from "@/components/About"
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer"

export default function  Home () {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </motion.main>
  )
} 